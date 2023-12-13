import { Color, Vector3 } from 'three';

import { COLORS } from '../globals';
import Level from './Level';
import Player from '../characters/Player';
import Room from '../rooms/Room';
import TestLevelTwoLights from '../lights/TestLevelTwoLights';

class TestLevelTwo extends Level {
    initCameraPosition = new Vector3(-10, 20, 10);

    async load() {
        // Set background to a nice color
        this.background = new Color(COLORS.BLACK);

        // Add meshes to scene
        this.player = new Player({
            size: [2, 4, 2],
            position: [10, 6, -5],
            color: COLORS.RED,
        });
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: COLORS.BARBIE,
        });

        this.add(this.player, room, new TestLevelTwoLights());

        await super.load();
    }
}

export default TestLevelTwo;
