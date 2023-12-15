import {
    Box,
    ConvexPolyhedron,
    Sphere as CannonSphere,
    Trimesh,
    Vec3,
} from 'cannon-es';
import { Box3, Object3D, Sphere, Vector3 } from 'three';
import { ConvexHull, VertexNode } from 'three/examples/jsm/Addons.js';

import { geometriesOf } from './object3d';

/**
 * Creates a box collision body from the bounding box of the input geometry.
 */
export function createBox(object: Object3D, scale: number = 1): Box {
    const boundingBox = new Box3().setFromObject(object, true);
    const dims = boundingBox.max.clone().sub(boundingBox.min);
    return new Box(new Vec3(...dims.toArray().map((c) => (c * scale) / 2)));
}

/**
 * Creates a sphere collision body from the bounding sphere of the input
 * geometry.
 */
export function createSphere(
    object: Object3D,
    scale: number = 1
): CannonSphere {
    const geometries = geometriesOf(object);
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
export function createTrimesh(object: Object3D, scale = 1): Trimesh {
    const points: number[] = [];
    for (const geometry of geometriesOf(object)) {
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
export function createConvexPolyhedron(
    object: Object3D,
    scale = 1
): ConvexPolyhedron {
    // Compute geometry point vectors from vector coordinates
    const points = [];
    for (const geometry of geometriesOf(object)) {
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
