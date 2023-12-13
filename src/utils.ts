/**
 * @file General utility functions which are useful for handling Object3D
 */
import { BufferGeometry, Mesh, Object3D, Scene } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/**
 * Traverse the graph of object children, calling the callback on each child.
 * Useful for when Object3D.traverse blows the function call stack.
 */
export function dfsTraverse(
    object: Scene | Object3D,
    callback: (child: Object3D) => void,
    includeSelf: boolean = false
) {
    const dfs = includeSelf ? [object] : [...object.children];
    const seen = new Set();
    while (dfs.length > 0) {
        const child = dfs.pop() as Object3D;
        if (seen.has(child)) continue;

        seen.add(child);
        dfs.push(...child.children);
        callback(child);
    }
}

/**
 * Traverses the children of the given object using an iterative DFS. Returns
 * an array of all of the highest-level children of the given object for which
 * the callback returns true.
 */
export function dfsFind(
    object: Scene | Object3D,
    callback: (child: Object3D) => boolean,
    includeSelf: boolean = false
): Object3D[] {
    const result = [];

    const dfs = includeSelf ? [object] : [...object.children];
    const seen = new Set();
    while (dfs.length > 0) {
        const child = dfs.pop() as Object3D;
        if (seen.has(child)) continue;

        seen.add(child);
        if (callback(child) === true) {
            result.push(child);
        } else {
            dfs.push(...child.children);
        }
    }

    return result;
}

/** Extracts all of the geometries from an object and puts them in an array. */
export function geometriesOf(object: Scene | Object3D): BufferGeometry[] {
    const meshes = dfsFind(object, (c) => (c as Mesh).isMesh, true) as Mesh[];
    return meshes.map((mesh) => mesh.geometry);
}

export function mergedGeometry(object: Object3D, useGroups?: boolean) {
    const geometries = geometriesOf(object);
    if (geometries.length === 1) {
        return geometries[0];
    } else {
        return mergeGeometries(geometries, useGroups);
    }
}
