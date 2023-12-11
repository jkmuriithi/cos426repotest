/**
 * @file Global definitions and helper functions for materials which change
 * opacity based on the positions of the camera and the player.
 */
import { Vector3, Material } from 'three';

export type DynamicOpacityParams = {
    detection: 'playerIntersection' | 'directional';
    transparent: true;
    hasDynamicOpacity: true;
    lowOpacity: number;
    highOpacity: number;
    /** Only present if type === "directional". */
    normal?: Vector3;
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
