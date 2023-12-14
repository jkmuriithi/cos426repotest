import { Color, MeshPhongMaterial, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS } from '../globals';
import { setMaterial } from '../utils';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import BankRobberyLights from '../lights/BankRobberyLights';

import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';
import BANK from '@models/bank.glb?url';

import KOOL_AID_MAN from '@textures/BEAM.jpg';

class BankRobbery extends Level {
    initCameraPosition = new Vector3(-50, 10, 10);

    async load() {
        // Load models from files
        const chucks = await loadModelFromGLTF(NUNCHUCKS);
        const saucer = await loadModelFromGLTF(SAUCER);
        const bank = await loadModelFromGLTF(BANK);

        // Load textures from files
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);

        this.background = new Color(COLORS.BLACK);

        // Characters
        this.player = new Player({
            size: [1, 2, 1],
            position: [10, 6, -5],
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
        this.add(...this.enemies);

        // Physics objects
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
            }),
            new PhysicsObject(bank, {
                position: [0, 10, 0],
                scale: 0.05,
                mass: 0,
            })
        );

        // Room setup
        // const room = new Room({
        //     size: [30, 10, 20],
        //     position: [10, 0, -5],
        //     color: COLORS.WHITE,
        // });
        const room = new Room({
            size: [100, 30, 80],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        })
        setMaterial(
            room.leftBackWall,
            new MeshPhongMaterial({
                color: COLORS.RED,
                map: kool[0],
            })
        );

        this.add(room);

        this.add(new BankRobberyLights());

        await super.load();
    }
}

export default BankRobbery;