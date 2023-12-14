/**
 * @file Global definitions and helper functions for materials which change
 * opacity based on the positions of the camera and the player.
 */
import { Vector3, Material, Object3D } from 'three';
import { meshesOf } from './utils';

export type DynamicOpacityParams = {
    detection: 'characterIntersection' | 'directional';
    transparent: true;
    hasDynamicOpacity: true;
    lowOpacity: number;
    highOpacity: number;
    /** Only present if type === "directional". */
    normal: Vector3;
};

export type DynamicOpacityMaterial = Material & DynamicOpacityParams;

export type DynamicOpacityConfig = Omit<
    DynamicOpacityParams,
    'transparent' | 'hasDynamicOpacity'
>;

/** Sets all of the opacity parameters of the given material. */
export function makeDynamic<M extends Material>(
    material: M,
    config: DynamicOpacityConfig
): DynamicOpacityMaterial {
    const mat = material as unknown as DynamicOpacityMaterial;

    mat.transparent = true;
    mat.hasDynamicOpacity = true;
    mat.opacity = config.highOpacity;
    for (const [key, value] of Object.entries(config)) {
        // @ts-ignore
        mat[key] = value;
    }
    if (mat.normal) {
        mat.normal = mat.normal.clone();
    }

    return mat;
}

export function makeObjectDynamic(
    object: Object3D,
    config: DynamicOpacityConfig
): Object3D {
    meshesOf(object).forEach((mesh) => {
        const material = mesh.material;
        if (Array.isArray(material)) {
            mesh.material = material.map((mat) =>
                makeDynamic(mat.clone(), config)
            );
        } else {
            mesh.material = makeDynamic(material.clone(), config);
        }
    });

    return object;
}
