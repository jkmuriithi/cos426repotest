import { Vector3 } from 'three';
import { FLOAT_EPS, ICE_SKATER_MODE } from '../globals';
import { CharacterOptions } from './Character';
import Enemy from './Enemy';

type RangedEnemyOptions = CharacterOptions & {
    fireRate: number;
};

class RangedEnemy extends Enemy {
    private initPos?: Vector3;
    private elapsedTime: number = 0;
    static readonly defaultOptions: RangedEnemyOptions = {
        ...Enemy.defaultOptions,
        name: 'ranged-enemy',
        fireRate: 120,
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
            if (ICE_SKATER_MODE) {
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
        if (this.elapsedTime !== 0 && this.elapsedTime % this.options.fireRate === 0) {
            this.fireProjectile();
        }
        this.elapsedTime += 1;

        super.update(dt);
    }

    dispose(): void {
        super.dispose();
    }
}

export default RangedEnemy;
