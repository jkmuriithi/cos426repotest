/**
 * @file Defines helpers for loading/creatinf objects from GLTF/GLB/OBJ files.
 *
 * Sometimes models are broken! Use this online model viewer for a sanity check:
 * https://www.creators3d.com/online-viewer
 */
import { Body, Box, Trimesh, Vec3 } from 'cannon-es';
import { BufferGeometry, Group, Mesh, Quaternion, Vector3 } from 'three';
import { PRINT_MODELS_ON_LOAD, WALL_PHYSICS_MATERIAL, WORLD } from './globals';
import { GLTFLoader, MTLLoader, OBJLoader } from 'three/examples/jsm/Addons.js';

/**
 * @example
 * import MODEL_URL from "@assets/models/paperplane.glb?url";
 *
 * const model = await createModelFromGLTF(MODEL_URL); // this is the model
 * const mesh = model.children[0]; // this should be the mesh
 *
 * @see {@link https://discourse.threejs.org/t/parts-of-glb-object-disappear-in-certain-angles-and-zoom/21295/5}
 */
async function createModelFromGLTF(gltfUrl: string): Promise<Group> {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(gltfUrl);

    gltf.scene.traverse((object) => (object.frustumCulled = false));
    if (PRINT_MODELS_ON_LOAD) {
        console.log(gltf);
    }

    return gltf.scene;
}

async function createModelFromOBJ(
    objUrl: string,
    mtlUrl?: string
): Promise<Group> {
    const loader = new OBJLoader();
    if (mtlUrl) {
        const mtl = await new MTLLoader().loadAsync(mtlUrl);
        loader.setMaterials(mtl);
    }

    const obj = await loader.loadAsync(objUrl);
    obj.traverse((object) => (object.frustumCulled = false));
    if (PRINT_MODELS_ON_LOAD) {
        console.log(obj);
    }

    return obj;
}

/**
 * Creates a trimesh collision body from some geometry. Not super useful since
 * Cannon only calculates Trimesh collision with planes.
 *
 * Sources:
 * @see {@link https://sbcode.net/threejs/convexgeometry/}
 */
function createTrimesh(geometry: BufferGeometry): Trimesh {
    let points: Float32Array;
    if (geometry.getIndex() !== null) {
        points = geometry.toNonIndexed().getAttribute('position')
            .array as Float32Array;
    } else {
        points = geometry.getAttribute('position').array as Float32Array;
    }

    const indices = Object.keys(points).map(Number);
    return new Trimesh(points as unknown as number[], indices);
}

// function createConvexPolyhedron(geometry: BufferGeometry): ConvexPolyhedron {
//     let values: Float32Array;
//     if (geometry.getIndex() !== null) {
//         values = geometry.toNonIndexed().getAttribute('position')
//             .array as Float32Array;
//     } else {
//         values = geometry.getAttribute('position').array as Float32Array;
//     }

//     const points: Vector3[] = [];
//     for (let i = 0; i < values.length / 3; ++i) {
//         points.push(new Vector3(values[i], values[i + 1], values[i + 2]));
//     }
//     const hull = new ConvexHull().setFromPoints(points);

//     return new ConvexPolyhedron({ vertices: hull.vertices, faces: hull.faces });
// }

export { createModelFromGLTF, createModelFromOBJ, createTrimesh };

type PhysicsObjectOptions = {
    name: string;
    scale: number;
    position: [number, number, number];
    direction: [number, number, number];
};

export type { PhysicsObjectOptions };

/** Currently uses the input mesh's bounding box for collision. */
class PhysicsObject extends Group {
    static readonly defaultOptions: PhysicsObjectOptions = {
        name: 'physicsObject',
        scale: 1,
        position: [0, 0, 0],
        direction: [0, 1, 0],
    };

    readonly options: PhysicsObjectOptions;

    body: Body;

    constructor(mesh: Mesh, options: Partial<PhysicsObjectOptions>) {
        super();

        this.options = { ...PhysicsObject.defaultOptions, ...options };
        const { name, scale, position, direction } = this.options;

        this.name = name;

        const meshClone = mesh.clone();
        meshClone.geometry.computeBoundingBox();
        meshClone.geometry.center();

        this.add(meshClone);
        this.scale.set(scale, scale, scale);
        this.translateOnAxis(new Vector3(...position), 1);
        this.applyQuaternion(
            new Quaternion().setFromUnitVectors(
                new Vector3(0, 1, 0),
                new Vector3(...direction).normalize()
            )
        );

        const box = meshClone.geometry.boundingBox;
        const dims = box!.max.clone().sub(box!.min);

        this.body = new Body({
            mass: 1,
            material: WALL_PHYSICS_MATERIAL,
            position: new Vec3(...position),
            shape: new Box(
                new Vec3(...dims.toArray().map((c) => (c * scale) / 2))
            ),
        });
        this.body.quaternion.setFromVectors(
            new Vec3(0, 1, 0),
            new Vec3(...direction)
        );
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }

    dispose(): void {
        WORLD.removeBody(this.body);
    }
}

export default PhysicsObject;
