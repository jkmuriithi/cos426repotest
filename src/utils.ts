/**
 * @file General utility functions which are useful for handling Object3D and
 * CSSObject2D
 */
import { BufferGeometry, Material, Mesh, Object3D, Sphere } from 'three';
import { CSS2DObject } from 'three/examples/jsm/Addons.js';

import { makeDynamic } from './opacity';

import PhysicsObject from './PhysicsObject';

/**
 * Traverse the graph of object children, calling the callback on each child.
 * Useful for when Object3D.traverse blows the function call stack.
 */
export function dfsTraverse(
    object: Object3D,
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
    object: Object3D,
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

export function meshesOf(object: Object3D | Mesh): Mesh[] {
    if (object instanceof Mesh) {
        return [object];
    } else {
        return dfsFind(object, (c) => c instanceof Mesh) as Mesh[];
    }
}

export function geometriesOf(object: Object3D | Mesh): BufferGeometry[] {
    return meshesOf(object).map((mesh) => mesh.geometry);
}

export function materialsOf(object: Object3D | Mesh): Material[] {
    return meshesOf(object).flatMap((mesh) => mesh.material);
}

export function boundingSphereOf(object: Object3D): Sphere {
    const geometries = geometriesOf(object);
    geometries[0].computeBoundingSphere();

    const sphere = geometries[0].boundingSphere!.clone();
    for (const geometry of geometries) {
        geometry.computeBoundingSphere();
        sphere.union(geometry.boundingSphere as Sphere);
    }

    return sphere;
}

/**
 * Sets all of the meshes in the given object to use the given material(s).
 * Automatically calls makeDynamic on the input materials unless `dynamic` is
 * set to `false`.
 */
export function setMaterial(
    object: Object3D | PhysicsObject | Mesh,
    material: Material | Material[],
    dynamic = true
) {
    let mat = material;
    // If the given object has dynamic opacity, clone the material and set it
    // to match by default
    if (
        dynamic &&
        object instanceof PhysicsObject &&
        object.options.opacityConfig
    ) {
        const config = object.options.opacityConfig;
        if (Array.isArray(material)) {
            mat = material.map((m) => m.clone());
            mat.forEach((m) => makeDynamic(m, config));
        } else {
            mat = makeDynamic(material.clone(), config);
        }
    }

    meshesOf(object).forEach((mesh) => (mesh.material = mat));
}

export type Object2DConfig = {
    textContent: string;
    id?: string;
    className: string;
    style: Partial<CSSStyleDeclaration>;
};

const defaultObject2DConfig: Object2DConfig = {
    textContent: 'hello',
    className: 'text',
    style: {
        color: 'white',
        backgroundColor: 'transparent',
    },
};

export function createObject2D(config?: Partial<Object2DConfig>): CSS2DObject {
    const conf = { ...defaultObject2DConfig, ...config };
    const elem = document.createElement('div');
    elem.textContent = conf.textContent;
    elem.className = conf.className;
    if (conf.id) elem.id = conf.id;

    for (const [k, v] of Object.entries({
        ...defaultObject2DConfig.style,
        ...conf.style,
    })) {
        // @ts-ignore
        elem.style[k] = v;
    }

    const obj = new CSS2DObject(elem);

    obj.layers.set(1);
    return obj;
}
