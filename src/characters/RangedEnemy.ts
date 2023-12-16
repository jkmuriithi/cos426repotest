import { Vector3 } from 'three';
import { FLOAT_EPS, DEBUG_FLAGS, WORLD } from '../globals';
import Enemy, { EnemyOptions } from './Enemy';

export type RangedEnemyOptions = EnemyOptions & {
    fireRate: number;
};

class RangedEnemy extends Enemy {
    private initPos?: Vector3;
    private lastFiredTime: number = 0;
    static readonly defaultOptions: RangedEnemyOptions = {
        ...Enemy.defaultOptions,
        name: 'ranged-enemy',
        fireRate: 2,
    };

    readonly options: RangedEnemyOptions;

    constructor(options?: Partial<RangedEnemyOptions>) {
        const opts = { ...RangedEnemy.defaultOptions, ...options };

        super(opts);
        this.options = opts;
        this.initPos = this.position.clone();
    }

    update(dt: number): void {
        if (!this.initPos || !this.playerPos) {
            super.update(dt);
            return;
        }

        // move toward initial position
        const movementDirection = this.initPos.clone().sub(this.position);
        if (movementDirection.length() > 2) {
            movementDirection.normalize();
            movementDirection.multiplyScalar(this.moveVelocity);
            if (DEBUG_FLAGS.ICE_SKATER_MODE) {
                this.body.velocity.x += movementDirection.x / 20;
                this.body.velocity.z += movementDirection.z / 20;
            } else {
                this.body.velocity.x = movementDirection.x;
                this.body.velocity.z = movementDirection.z;
            }
        }

        const shootDirection = this.playerPos.clone().sub(this.position);
        shootDirection.y = 0;
        shootDirection.normalize();
        // Make enemy turn toward player
        if (shootDirection.length() > FLOAT_EPS) {
            this.turnToFace(shootDirection);
            // Remove all character spin
            this.body.angularVelocity.setZero();
        }
        if (WORLD.time - this.lastFiredTime > this.options.fireRate) {
            this.lastFiredTime = WORLD.time;
            this.fireProjectile();
        }

        super.update(dt);
    }

    dispose(): void {
        super.dispose();
    }
}

export default RangedEnemy;
