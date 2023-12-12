/**
 * @file Defines helpers for loading/creatinf objects from GLTF/GLB/OBJ files.
 *
 * Sometimes models are broken! Use this online model viewer for a sanity check:
 * https://www.creators3d.com/online-viewer
 */
import {
    Body,
    Box,
    ConvexPolyhedron,
    Sphere as CannonSphere,
    Trimesh,
    Vec3,
    Shape,
    Material,
} from 'cannon-es';
import {
    Box3,
    BufferGeometry,
    Group,
    Mesh,
    Object3D,
    Quaternion,
    Sphere,
    Vector3,
} from 'three';
import { PRINT_MODELS_ON_LOAD, WALL_PHYSICS_MATERIAL, WORLD } from './globals';
import {
    ConvexHull,
    GLTFLoader,
    MTLLoader,
    OBJLoader,
    VertexNode,
} from 'three/examples/jsm/Addons.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * @example
 * import MODEL_URL from "@assets/models/paperplane.glb?url";
 * const model = await createModelFromGLTF(MODEL_URL);
 * // console.log the model to find the appropriate child
 * const object = model.children[0];
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
 * Extracts all of the geometries from an object and puts them in an array.
 */
function extractGeometries(object: Object3D): BufferGeometry[] {
    const geometries = [];

    const dfs = [...object.children];
    const seen = new Set();
    while (dfs.length > 0) {
        const child = dfs.pop() as unknown as Mesh;
        if (seen.has(child)) continue;

        if (child.isMesh) {
            geometries.push(child.geometry);
        } else {
            dfs.push(...(child as unknown as Object3D).children);
        }
    }

    return geometries;
}

function mergedGeometry(object: Object3D, useGroups?: boolean) {
    const geometries = extractGeometries(object);
    if (geometries.length === 1) {
        return geometries[0];
    } else {
        return mergeGeometries(geometries, useGroups);
    }
}

/**
 * Creates a box collision body from the bounding box of the input geometry.
 */
function createBox(object: Object3D, scale: number = 1): Box {
    const geometries = extractGeometries(object);
    geometries[0].computeBoundingBox();

    const boundingBox = geometries[0].boundingBox!.clone();
    for (const geometry of geometries) {
        geometry.computeBoundingBox();
        boundingBox.union(geometry.boundingBox as Box3);
    }

    const dims = boundingBox.max.clone().sub(boundingBox.min);
    return new Box(new Vec3(...dims.toArray().map((c) => (c * scale) / 2)));
}

/**
 * Creates a sphere collision body from the bounding sphere of the input
 * geometry.
 */
function createSphere(object: Object3D, scale: number = 1): CannonSphere {
    const geometries = extractGeometries(object);
    geometries[0].computeBoundingSphere();

    const sphere = geometries[0].boundingSphere!.clone();
    for (const geometry of geometries) {
        geometry.computeBoundingSphere();
        sphere.union(geometry.boundingSphere as Sphere);
    }

    return new CannonSphere(sphere.radius * scale);
}

/**
 * Creates a trimesh collision body from the input object's geometry. Not super
 * useful since Cannon only calculates Trimesh collision with planes.
 *
 * Sources:
 * @see {@link https://sbcode.net/threejs/convexgeometry/}
 */
function createTrimesh(object: Object3D, scale = 1): Trimesh {
    const points: number[] = [];
    for (const geometry of extractGeometries(object)) {
        const geometryClone = geometry.clone();
        if (scale !== 1) {
            geometryClone.scale(scale, scale, scale);
        }

        let curr: Float32Array;
        if (geometryClone.getIndex() !== null) {
            curr = geometryClone.toNonIndexed().getAttribute('position')
                .array as Float32Array;
        } else {
            curr = geometryClone.getAttribute('position').array as Float32Array;
        }

        points.push(...curr);
    }

    const indices = Object.keys(points).map(Number);
    return new Trimesh(points as unknown as number[], indices);
}

/**
 * Creates a convex polyhedron collision body using the convex hull of the input
 * geometry. Unless the given geometry is **really** low-poly, it's probably
 * best to use a simpler collision shape for the sake of performance.
 *
 * Sources:
 * @see {@link https://github.com/pmndrs/cannon-es/issues/103}
 */
function createConvexPolyhedron(object: Object3D, scale = 1): ConvexPolyhedron {
    // Compute geometry point vectors from vector coordinates
    const points = [];
    for (const geometry of extractGeometries(object)) {
        let coords: Float32Array;
        const geometryClone = geometry.clone();

        if (scale !== 1) {
            geometryClone.scale(scale, scale, scale);
        }
        if (geometryClone.getIndex() !== null) {
            coords = geometryClone.toNonIndexed().getAttribute('position')
                .array as Float32Array;
        } else {
            coords = geometryClone.getAttribute('position')
                .array as Float32Array;
        }

        for (let i = 0; i < coords.length; i += 3) {
            points.push(new Vector3(coords[i], coords[i + 1], coords[i + 2]));
        }
    }

    // Traverse convex hull to create face mappings
    const hull = new ConvexHull().setFromPoints(points);

    const vertexIndices = new Map<VertexNode, number>();
    for (let i = 0; i < hull.vertices.length; ++i) {
        vertexIndices.set(hull.vertices[i], i);
    }

    const faceMappings: number[][] = [];
    for (const face of hull.faces) {
        const curr = [];
        // Traverse halfedges to get the indices of this face's vertices
        const initial = face.edge;
        let he = initial;
        do {
            const idx = vertexIndices.get(he.vertex);
            curr.push(idx);
            he = he.next;
        } while (he !== initial);
        faceMappings.push(curr as number[]);
    }

    return new ConvexPolyhedron({
        vertices: hull.vertices.map((v) =>
            new Vec3().copy(v.point as unknown as Vec3)
        ),
        faces: faceMappings,
        normals: hull.faces.map((f) =>
            new Vec3().copy(f.normal as unknown as Vec3)
        ),
    });
}

export {
    extractGeometries,
    mergedGeometry,
    createModelFromGLTF,
    createModelFromOBJ,
    createBox,
    createSphere,
    createTrimesh,
    createConvexPolyhedron,
};

type PhysicsObjectOptions = {
    name: string;
    scale: number;
    position: [number, number, number];
    direction: [number, number, number];
    mass: 1;
    colllisionShape?: Shape;
    collisionMaterial: Material;
};

export type { PhysicsObjectOptions };

/** Currently uses the input mesh's bounding box for collision. */
class PhysicsObject extends Group {
    static readonly defaultOptions: PhysicsObjectOptions = {
        name: 'physicsObject',
        scale: 1,
        position: [0, 0, 0],
        direction: [0, 1, 0],
        mass: 1,
        colllisionShape: undefined,
        collisionMaterial: WALL_PHYSICS_MATERIAL,
    };

    readonly options: PhysicsObjectOptions;

    body: Body;

    constructor(input: Object3D, options: Partial<PhysicsObjectOptions>) {
        super();

        this.options = { ...PhysicsObject.defaultOptions, ...options };
        const {
            name,
            scale,
            position,
            direction,
            mass,
            colllisionShape,
            collisionMaterial,
        } = this.options;

        this.name = name;

        const object = input.clone();
        this.add(object);
        this.scale.set(scale, scale, scale);
        this.translateOnAxis(new Vector3(...position), 1);
        this.applyQuaternion(
            new Quaternion().setFromUnitVectors(
                new Vector3(0, 1, 0),
                new Vector3(...direction).normalize()
            )
        );

        const shape = colllisionShape || createBox(object, scale);
        this.body = new Body({
            mass,
            shape,
            material: collisionMaterial,
            position: new Vec3(...position),
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
