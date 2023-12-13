import { Color, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { createBox } from '../collision';
import { createModelFromGLTF } from '../models';
import { COLORS, WALL_THICKNESS } from '../globals';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import TestLevelOneLights from '../lights/TestLevelOneLights';

import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';

class TestLevelOne extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    constructor() {
        super();

        this.background = new Color(COLORS.BLACK);

        // Characters
        this.player = new Player({
            size: [1, 2, 1],
            position: [10, 6, -5],
            color: COLORS.PLAYER,
        });

        this.enemies = [
            new MeleeEnemy({
                size: [1, 2, 1],
                position: [10, 8, -5],
                color: COLORS.RED,
            }),
            new RangedEnemy({
                size: [1, 2, 1],
                position: [12, 8, -5],
                color: COLORS.BLACK,
            }),
        ];

        // Room setup
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: COLORS.WHITE,
        });

        const { size, position, opacityConfig, color } = room.options;
        // Add platform in the middle of the room
        const platform = new Wall({
            name: 'platform',
            size: [size[0] / 4, WALL_THICKNESS, size[2] / 4],
            position: [position[0], position[1] + size[1] / 4, position[2]],
            direction: [0, -1, 0],
            color,
            opacityConfig: {
                ...opacityConfig,
                detection: 'playerIntersection',
            },
        });
        room.add(platform);

        this.add(this.player, ...this.enemies, room, new TestLevelOneLights());
    }

    async load() {
        // Load models from files
        const chucks = await createModelFromGLTF(NUNCHUCKS);
        const saucer = await createModelFromGLTF(SAUCER);

        this.add(
            new PhysicsObject(chucks, {
                position: [10, 8, -5],
                scale: 0.000006,
            }),
            new PhysicsObject(saucer, {
                position: [18, 8, -5],
                scale: 0.01,
            }),
            new PhysicsObject(saucer, {
                position: [2, 8, -5],
                scale: 0.01,
                mass: 40,
                colllisionShape: createBox(saucer, 0.005),
            })
        );

        await super.load();
    }
}

export default TestLevelOne;
