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

// ThreeJS
export const camera = new PerspectiveCamera();
export const renderer = new WebGLRenderer({ antialias: true });
export const EPS = 0.1;

export type DynamicOpacityMaterial = Material & {
    hasDynamicOpacity: true;
    normal: Vector3;
    lowOpacity: number;
    highOpacity: number;
};

// Cannon-ES
export const world = new World({
    gravity: new Vec3(0, -9.82, 0),
});
export const world_material = new CannonMaterial();
export const character_material = new CannonMaterial();
const world_character_contact = new ContactMaterial(
    world_material,
    character_material,
    { friction: 0.0 }
);
world.addContactMaterial(world_character_contact);
