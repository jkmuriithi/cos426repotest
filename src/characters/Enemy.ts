import { Vector3 } from 'three';

import Character, { CharacterOptions } from './Character';

/** A non-user-controlled Character. */

export type EnemyOptions = CharacterOptions & {
    contactDamage: number;
};

class Enemy extends Character {
    static readonly defaultOptions: EnemyOptions = {
        ...Character.defaultOptions,
        name: 'enemy',
        contactDamage: 30,
    };

    protected playerPos?: Vector3;

    moveVelocity = 6;
    contactDamage: number;

    constructor(options: Partial<EnemyOptions>) {
        const opts = { ...Enemy.defaultOptions, ...options };
        const { contactDamage } = opts;

        super(opts);
        this.contactDamage = contactDamage;
    }

    setPlayerPosition(position: Vector3) {
        this.playerPos = position;
    }
}

export default Enemy;
