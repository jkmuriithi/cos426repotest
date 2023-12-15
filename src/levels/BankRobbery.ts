import { Color, MeshPhongMaterial, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE } from '../globals';
import { setMaterial } from '../utils';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import BankRobberyLights from '../lights/BankRobberyLights';

import COIN from '@models/coin.glb?url';
import KNIGHT from '@models/knightchesspiece.glb?url';
import TREE from '@models/bloodwoodtree.glb?url';
import BANK from '@models/bank.glb?url';

import KOOL_AID_MAN from '@textures/BEAM.jpg';
// import SKY from '@textures/skybackground.jpeg';

import { makeDynamic } from '../opacity';

class BankRobbery extends Level {
    initCameraPosition = new Vector3(-100, 10, 0);

    async load() {
        // Load models from files
        const bank = await loadModelFromGLTF(BANK);
        const coin = await loadModelFromGLTF(COIN);
        const knight = await loadModelFromGLTF(KNIGHT);
        const tree = await loadModelFromGLTF(TREE);

        // Load textures from files
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);
        // const sky = await loadTexturesFromImages([SKY]); // WAKE UP

        this.background = new Color(COLORS.BLACK);

        // Characters
        this.player = new Player({
            size: [1, 2, 1],
            position: [-70, 6, 0],
            color: COLORS.PLAYER,
        });
        this.add(this.player);

        for (let i = 0; i < 200; i += 10) {
            this.enemies.push(
                new MeleeEnemy({
                    size: [1, 2, 1],
                    position: [30, 8, -75 + i],
                    color: COLORS.RED,
                }));
            this.enemies.push(
                new RangedEnemy({
                    size: [1, 20, 1],
                    position: [40, 8, -70 + i],
                    color: COLORS.BLACK,
                })
            );
            this.add(...this.enemies);
        }

        this.add(...this.enemies);

        // Physics objects
        const bank1 = new PhysicsObject(
            bank.rotateOnAxis(UP_AXIS_THREE, -Math.PI),
            {
                position: [60, 10, 0],
                scale: 0.05,
                mass: 0,
            }
        );
        const coin1 = new PhysicsObject(
            coin.rotateOnAxis(UP_AXIS_THREE, -Math.PI),
            {
                position: [60, 10, -50],
                scale: 80,
                mass: 0,
            }
        );
        // const knight1 = new PhysicsObject(
        //     knight.rotateOnAxis(UP_AXIS_THREE, -Math.PI),
        //     {
        //         position: [0, 2.5, 30],
        //         scale: 2,
        //         mass: 0,
        //     }
        // );
        for (let i = 0; i < 10; i++) {
            const knight2 = new PhysicsObject(
                knight.rotateOnAxis(UP_AXIS_THREE, 0),
                {
                    position: [i * -10 + 40, 2.5, -15], // increment x position by 10 each time
                    scale: 2,
                    mass: 0,
                }
            );
            this.add(knight2);
        }

        this.add(
            bank1,
            coin1,
            // knight2
        );

        this.add(
            new PhysicsObject(tree, {
                position: [60, 10, 0],
                scale: 0.05,
                mass: 0,
            }),
            new PhysicsObject(tree, {
                position: [60, 10, 0],
                scale: 0.05,
                mass: 0,
            }),
        );

        // Room setup
        // const room = new Room({
        //     size: [30, 10, 20],
        //     position: [10, 0, -5],
        //     color: COLORS.WHITE,
        // });
        const room = new Room({
            size: [200, 120, 500],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        });

        const opacityConfig = room.options.opacityConfig;

        setMaterial(
            room.rightBackWall,
            new MeshPhongMaterial({
                color: COLORS.RED,
                map: kool[0],
            })
        );
        setMaterial(
            room.floor,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.RED,
                    map: kool[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, 1, 0),
                }
            )
        );

        this.add(room);

        this.add(new BankRobberyLights());

        await super.load();
    }
}

export default BankRobbery;