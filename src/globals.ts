import { Vec3, World } from 'cannon-es';

// Set up physics sim
export const world = new World({
    gravity: new Vec3(0, -9.82, 0),
});
