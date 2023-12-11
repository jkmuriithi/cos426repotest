import { Group, Mesh, Vector3 } from 'three';
import { Body, Shape, Vec3 } from 'cannon-es';

import type Player from '../characters/Player';
import { WORLD } from '../globals';

type ProjectileInfo = {
    force: number;
    direction: Vector3;
    startingPoint: Vector3;
    sender: Player;
};

export type { ProjectileInfo };

class Projectile extends Group {
    body: Body;

    constructor(mesh: Mesh, body: Body, info: ProjectileInfo) {
        super();
        this.add(mesh);
        this.body = body;

        const force = new Vec3()
            .copy(info.direction as unknown as Vec3)
            .scale(info.force);
        this.body.applyImpulse(force);
    }

    dispose() {
        WORLD.removeBody(this.body);
    }
}

/**
 * Loading GLTFs is expensive, so we use a factory to avoid reloading the same
 * model when creating projectiles.
 */
class ProjectileFactory {
    mesh: Mesh;
    shape: Shape;

    constructor() {}
}

export { Projectile, ProjectileFactory };
