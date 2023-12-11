import { CharacterOptions } from './Character';
import Enemy from './Enemy';

/* TODO */
class RangedEnemy extends Enemy {
    constructor(options: Partial<CharacterOptions>) {
        super({ ...RangedEnemy.defaultOptions, ...options });
    }
}

export default RangedEnemy;
