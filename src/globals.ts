/**
 * @file Defines global game variables. Circular imports can interfere with
 * Vite's build process, so it's best to put any state shared between modules
 * in this file.
 */
import { PerspectiveCamera, WebGLRenderer } from 'three';
import { Vec3, World } from 'cannon-es';

// ThreeJS
export const camera = new PerspectiveCamera();
export const renderer = new WebGLRenderer({ antialias: true });

// Cannon-ES
export const world = new World({
    gravity: new Vec3(0, -9.82, 0),
});
