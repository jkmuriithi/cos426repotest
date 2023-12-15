import { Color, MeshPhongMaterial, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE, WALL_THICKNESS } from '../globals';
import { meshesOf, setMaterial } from '../utils';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import TestLevelOneLights from '../lights/TestLevelOneLights';

import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';
import DOOR from '@models/door.glb?url';

import KOOL_AID_MAN from '@textures/BEAM.jpg';

class TestLevelOne extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        const chucks = await loadModelFromGLTF(NUNCHUCKS);
        const saucer = await loadModelFromGLTF(SAUCER);
        const door = await loadModelFromGLTF(DOOR, true);
        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);

        this.background = new Color(COLORS.BLACK);

        // Characters
        this.player = new Player({
            size: [1, 2, 1],
            position: [15, 6, -5],
            color: COLORS.PLAYER,
        });
        setMaterial(
            this.player,
            new MeshPhongMaterial({
                color: COLORS.PLAYER,
                map: kool[0],
            })
        );
        this.add(this.player);

        this.enemies = [
            new MeleeEnemy({
                size: [1.5, 1, 1.5],
                position: [0, 8, -5],
                color: COLORS.RED,
            }),
            new RangedEnemy({
                size: [1, 2, 1],
                position: [12, 8, -5],
                color: COLORS.BLACK,
                health: 200,
            }),
        ];
        this.add(...this.enemies);

        // Physics objects
        // Projectiles
        this.projectileConfig = {
            object: saucer,
            damage: 35,
            speed: 50,
            options: {
                scale: 0.001,
            },
        };
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
                mass: 0,
            })
        );

        // Room setup
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: COLORS.WHITE,
        });
        setMaterial(
            room.leftBackWall,
            new MeshPhongMaterial({
                color: COLORS.RED,
                map: kool[0],
            })
        );
        this.portal = new PhysicsObject(door, {
            position: [25, 4, -10],
            scale: 7,
            mass: 0,
        });
        this.add(this.portal);


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
                characterIntersection: true,
                lowOpacity: 0.4,
            },
        });
        meshesOf(platform).forEach((mesh) => (mesh.castShadow = true));
        room.add(platform);

        this.add(room);
        this.add(new TestLevelOneLights());

        await super.load();
    }
}

export default TestLevelOne;
