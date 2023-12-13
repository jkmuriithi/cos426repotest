import { FLOAT_EPS, ICE_SKATER_MODE } from '../globals';
import { CharacterOptions } from './Character';
import Enemy from './Enemy';

/* TODO */
class MeleeEnemy extends Enemy {
    static readonly defaultOptions: CharacterOptions = {
        ...Enemy.defaultOptions,
        name: 'melee-enemy',
    };

    constructor(options: Partial<CharacterOptions>) {
        super({ ...MeleeEnemy.defaultOptions, ...options });
    }

    update(dt: number): void {
        if (!this.player_pos) {
            super.update(dt);
            return;
        }

        const movementDirection = this.player_pos.clone().sub(this.position);
        // Make enemy turn toward player
        movementDirection.y = 0;
        movementDirection.normalize();
        if (movementDirection.length() > FLOAT_EPS) {
            this.turnToFace(movementDirection);
            // Remove all character spin
            this.body.angularVelocity.setZero();
        }

        movementDirection.multiplyScalar(this.moveVelocity);
        if (ICE_SKATER_MODE) {
            this.body.velocity.x += movementDirection.x / 20;
            this.body.velocity.z += movementDirection.z / 20;
        } else {
            this.body.velocity.x = movementDirection.x;
            this.body.velocity.z = movementDirection.z;
        }
        super.update(dt);
    }

    dispose(): void {
        super.dispose();
    }
}

export default MeleeEnemy;
