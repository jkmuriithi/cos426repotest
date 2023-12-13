import { Object3D } from 'three';

import { PhysicsObjectOptions } from '../PhysicsObject';

/**
 * Loading GLTFs is expensive, so we use a factory to avoid reloading the same
 * model when creating projectiles.
 */
class ProjectileFactory {
    object: Object3D;
    options?: Partial<PhysicsObjectOptions>;

    constructor(obj: Object3D, options?: Partial<PhysicsObjectOptions>) {
        this.object = obj.clone();
        this.options = options;
    }

    createProjectile() {}
}

export default ProjectileFactory;
