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
        super.update(dt);
    }

    dispose(): void {
        super.dispose();
    }
}

export default RangedEnemy;
