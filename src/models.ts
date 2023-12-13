/**
 * @file Defines helpers for loading/creating objects from GLTF/GLB/OBJ files,
 * as well as helpers for dealing with model geometries and general traversal.
 *
 * Sometimes models are broken! Use this online model viewer for a sanity check:
 * https://www.creators3d.com/online-viewer
 */
import { Group, Object3D, BufferGeometry, Mesh, Scene } from 'three';
import { GLTFLoader, OBJLoader, MTLLoader } from 'three/examples/jsm/Addons.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import { PRINT_MODELS_ON_LOAD } from './globals';

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
 * Traverse the graph of object children, calling the callback on each child.
 * Useful for when Object3D.traverse blows the function call stack.
 */
function dfsTraverse(
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
function dfsFind(
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
function geometriesOf(object: Scene | Object3D): BufferGeometry[] {
    const meshes = dfsFind(object, (c) => (c as Mesh).isMesh, true) as Mesh[];
    return meshes.map((mesh) => mesh.geometry);
}

function mergedGeometry(object: Object3D, useGroups?: boolean) {
    const geometries = geometriesOf(object);
    if (geometries.length === 1) {
        return geometries[0];
    } else {
        return mergeGeometries(geometries, useGroups);
    }
}

export {
    createModelFromGLTF,
    createModelFromOBJ,
    dfsTraverse,
    dfsFind,
    geometriesOf,
    mergedGeometry,
};
