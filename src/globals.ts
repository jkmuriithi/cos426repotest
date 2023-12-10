/**
 * @file Defines global game variables. Circular imports can interfere with
 * Vite's build process, so it's best to put any state shared between modules
 * in this file.
 */
import {
    Mesh,
    PerspectiveCamera,
    Vector3,
    Material,
    WebGLRenderer,
} from 'three';
import {
    Vec3,
    World,
    Material as CannonMaterial,
    ContactMaterial,
} from 'cannon-es';

// ThreeJS constants
export const camera = new PerspectiveCamera();
export const renderer = new WebGLRenderer({ antialias: true });
export const EPS = 0.1;

// Cannon-ES constants
export const world = new World({
    gravity: new Vec3(0, -9.82, 0),
});
export const world_physics_material = new CannonMaterial();
export const character_physics_material = new CannonMaterial();
const world_character_contact = new ContactMaterial(
    world_physics_material,
    character_physics_material,
    { friction: 0.0 }
);
world.addContactMaterial(world_character_contact);

// Types
export type DynamicOpacityConfig = {
    transparent: true;
    hasDynamicOpacity: true;
    normal: Vector3;
    lowOpacity: number;
    highOpacity: number;
};

export type DynamicOpacityMaterial = Material & DynamicOpacityConfig;
