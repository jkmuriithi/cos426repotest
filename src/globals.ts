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
} from 'cannon-es';

// Game constants
export const WALL_THICKNESS = 0.1;
export const ORBIT_CONTROLS_ENABLED = false;
export const ICE_SKATER_MODE = false;
export const FLOAT_EPS = 1e-8;

// ThreeJS constants
export const camera = new PerspectiveCamera();
export const initCameraPosition = new Vector3(-10, 10, 10);
export const renderer = new WebGLRenderer({ antialias: true });
// Cannon-ES constants
export const world = new World({
    gravity: new Vec3(0, -9.81, 0),
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
