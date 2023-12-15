/**
 * @file Defines global game variables and types.
 *
 * Circular imports can interfere with Vite's build process, so it's best to put
 * any state shared between modules in this file. **NOTE**: For the same reason,
 * try to avoid importing from any game source file into this file. Use "import
 * type" if you need to reference a type.
 */
import { PerspectiveCamera, Vector3, WebGLRenderer } from 'three';
import {
    Body,
    Vec3,
    World,
    Material as CannonMaterial,
    ContactEquation,
} from 'cannon-es';

import type Character from './characters/Character';

// Game
export const PROJECTILE_QUEUE: Character[] = [];
export const PROJECTILE_LIMIT = 100;
export const UP_AXIS = [0, 1, 0] as const;
export const STARTING_LEVEL = 2;
export const WALL_THICKNESS = 0.4;
export const FLOAT_EPS = 1e-6;

// Colors
export const COLORS = {
    WHITE: 0xffffff,
    BLACK: 0x000000,
    GRAY: 0x999999,
    RED: 0xff0000,
    PLAYER: 0xe8beac,
    BARBIE: 0xffc0cb,
};

// Debug feature flags
export const HOTKEYS_ENABLED = true;
export const ORBIT_CONTROLS_ENABLED = false;
export const ICE_SKATER_MODE = false;
export const PRINT_ASSETS_ON_LOAD = true;
export const DRAW_CHARACTER_DIRECTION_LINE = true;

// ThreeJS
export const UP_AXIS_THREE = new Vector3(...UP_AXIS);
export const CAMERA = new PerspectiveCamera();
export const INIT_CAMERA_POSITION = new Vector3(-10, 10, 10);
export const RENDERER = new WebGLRenderer({ antialias: true });
export const SHADOW_MAP_SIZE = 512;

// Cannon-ES
export const UP_AXIS_CANNON = new Vec3(...UP_AXIS);
export const WORLD = new World({ gravity: new Vec3(0, -9.81, 0) });

export const WALL_PHYSICS_MATERIAL = new CannonMaterial();
export const CHARACTER_PHYSICS_MATERIAL = new CannonMaterial();

export type CollideEvent = {
    /** Body that was collided with. */
    body: Body;
    contact: ContactEquation;
};
