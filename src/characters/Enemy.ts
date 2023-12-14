import { Vector3 } from 'three';

import Character, { CharacterOptions } from './Character';

/** A non-user-controlled Character. */
class Enemy extends Character {
    static readonly defaultOptions: CharacterOptions = {
        ...Character.defaultOptions,
        name: 'enemy',
    };

    moveVelocity = 6;
    playerPos?: Vector3;

    constructor(options: Partial<CharacterOptions>) {
        super({ ...Enemy.defaultOptions, ...options });
    }

    setPlayerPosition(position: Vector3) {
        this.playerPos = position;
    }
}

export default Enemy;
