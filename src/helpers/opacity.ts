/**
 * @file Global definitions and helper functions for materials which change
 * opacity based on the positions of the camera and the player.
 * FIXME: These shouldn't be called directly, PhysicsObject should be used
 * instead.
 */
import { Vector3, Material, Object3D } from 'three';

import { meshesOf } from './object3d';

export type DynamicOpacityParams = {
    transparent: true;
    hasDynamicOpacity: true;
    lowOpacity: number;
    highOpacity: number;
    characterIntersection?: boolean;
    directional?: boolean;
    normal: Vector3;
};

export type DynamicOpacityMaterial = Material & DynamicOpacityParams;

export type DynamicOpacityConfig = Omit<
    DynamicOpacityParams,
    'transparent' | 'hasDynamicOpacity'
>;

/**
 * Sets all of the opacity parameters of the given material to work with the
 * dynamic opacity system.
 */
export function makeDynamic<M extends Material>(
    material: M,
    config: DynamicOpacityConfig
): DynamicOpacityMaterial {
    const mat = material as unknown as DynamicOpacityMaterial;

    mat.transparent = true;
    mat.alphaHash = false;
    mat.hasDynamicOpacity = true;
    mat.opacity = config.highOpacity;

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
