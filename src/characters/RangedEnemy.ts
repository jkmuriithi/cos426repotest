import { FLOAT_EPS } from '../globals';
import { CharacterOptions } from './Character';
import Enemy from './Enemy';

class RangedEnemy extends Enemy {
    static readonly defaultOptions: CharacterOptions = {
        ...Enemy.defaultOptions,
        name: 'ranged-enemy',
    };

    constructor(options: Partial<CharacterOptions>) {
        super({ ...RangedEnemy.defaultOptions, ...options });
    }

    update(dt: number): void {
        if (!this.player_pos) {
            super.update(dt);
            return;
        }

        const shootDirection = this.player_pos.clone().sub(this.position);
        shootDirection.y = 0;
        // Make enemy turn toward player
        if (shootDirection.length() > FLOAT_EPS) {
            this.turnToFace(shootDirection);
            // Remove all character spin
            this.body.angularVelocity.setZero();
        }
        super.update(dt);
    }

    dispose(): void {
        super.dispose();
    }
}

export default RangedEnemy;
