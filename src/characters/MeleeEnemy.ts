import { CharacterOptions } from "./Character";
import Enemy from "./Enemy";

/* TODO */
class MeleeEnemy extends Enemy {
    constructor(options: Partial<CharacterOptions>) {
        super({ ...MeleeEnemy.defaultOptions, ...options });
    }
}

export default MeleeEnemy;