/**
 * @file Defines global game variables. Circular imports can interfere with
 * Vite's build process, so it's best to put any state shared between modules
 * in this file.
 */
import { PerspectiveCamera, Vector3, Material, WebGLRenderer } from 'three';
import {
    Vec3,
    World,
    Material as CannonMaterial,
    ContactMaterial,
    ContactEquation,
} from 'cannon-es';

// Game parameters
export const STARTING_LEVEL = 0;
export const WALL_THICKNESS = 0.1;
export const FLOAT_EPS = 1e-8;

// Colors
export const COLORS = {
    WHITE: 0xffffff,
    BLACK: 0x000000,
    GRAY: 0x080808,
    RED: 0xff0000,
    PLAYER: 0xe8beac,
    BARBIE: 0xffc0cb,
};

// Debug flags
export const ORBIT_CONTROLS_ENABLED = false;
export const ICE_SKATER_MODE = false;

// ThreeJS
export const UP_AXIS = new Vector3(0, 1, 0);
export const CAMERA = new PerspectiveCamera();
export const INIT_CAMERA_POSITION = new Vector3(-10, 10, 10);
export const RENDERER = new WebGLRenderer({ antialias: true });
export const SHADOW_MAP_SIZE = 512;

// Cannon-ES
export const UP_AXIS_CANNON = new Vec3().copy(UP_AXIS as unknown as Vec3);
export const WORLD = new World({ gravity: new Vec3(0, -9.81, 0) });

export const WALL_PHYSICS_MATERIAL = new CannonMaterial();
export const CHARACTER_PHYSICS_MATERIAL = new CannonMaterial();
WORLD.addContactMaterial(
    new ContactMaterial(WALL_PHYSICS_MATERIAL, CHARACTER_PHYSICS_MATERIAL, {
        friction: 0,
        restitution: 0,
        frictionEquationRelaxation: 1,
        contactEquationRelaxation: 1,
        frictionEquationStiffness: 1e9,
        contactEquationStiffness: 1e9,
    })
);

export type CollideEvent = {
    body: Body;
    contact: ContactEquation;
};

// Dynamic opacity materials
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
