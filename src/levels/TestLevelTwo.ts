import { Color, Vector3 } from 'three';

import { COLORS, WALL_THICKNESS } from '../globals';
import Level from './Level';
import Player from '../characters/Player';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import TestLevelTwoLights from '../lights/TestLevelTwoLights';

class TestLevelTwo extends Level {
    initCameraPosition = new Vector3(-10, 20, 10);

    constructor() {
        super();

        // Set background to a nice color
        this.background = new Color(COLORS.BLACK);

        // Add meshes to scene
        this.player = new Player({
            size: [1, 2, 1],
            position: [10, 6, -5],
            color: COLORS.PLAYER,
        });
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: COLORS.BARBIE,
        });

        // Add platform in the middle of the room
        const { size, position, opacityConfig, color } = room.options;
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

        this.add(this.player, room, platform, new TestLevelTwoLights());
    }
}

export default TestLevelTwo;
