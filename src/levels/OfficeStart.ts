import { Color, MeshPhongMaterial, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE } from '../globals';
import { setMaterial } from '../utils';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import RangedEnemy from '../characters/RangedEnemy';
import OfficeStartLights from '../lights/OfficeStartLights';

import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';
// import CURTAINS from '@models/curtains.glb?url';
import WINDOW_SMALL from '@models/squarewindow.glb?url';
import WINDOW_LARGE from '@models/windowlarge.glb?url';
import KOOL_AID_MAN from '@textures/BEAM.jpg';
import QUOTE from '@textures/motivation.jpg';
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';

import { makeDynamic, makeObjectDynamic } from '../opacity';

class OfficeStart extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        // const chucks = await loadModelFromGLTF(NUNCHUCKS);
        // const saucer = await loadModelFromGLTF(SAUCER);
        const windowSmall = await loadModelFromGLTF(WINDOW_SMALL);
        const windowLarge = await loadModelFromGLTF(WINDOW_LARGE);

        windowSmall.castShadow = false;
        windowLarge.castShadow = false;

        makeObjectDynamic(windowSmall, {
            detection: 'directional',
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(0, 0, 1),
        });

        // const computer = await loadModelFromGLTF();
        console.log(window);

        windowSmall.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        // const meshes = dfsFind(curtains, (c) => c instanceof Mesh) as Mesh[];
        // meshes.forEach((mesh) => {
        //     mesh.geometry.rotateY(Math.PI / 2);
        // });

        // Load textures from files
        const motivation = await loadTexturesFromImages([QUOTE]);
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);

        this.background = new Color(COLORS.WHITE);

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

        // this.enemies = [
        //     // new MeleeEnemy({
        //     //     size: [1, 2, 1],
        //     //     position: [10, 8, -5],
        //     //     color: COLORS.RED,
        //     // }),
        //     new RangedEnemy({
        //         size: [2, 2, 2],
        //         position: [12, 8, -5],
        //         color: COLORS.BLACK,
        //     }),
        // ];
        // this.add(...this.enemies);

        // WINDOWS
        const window1 = new PhysicsObject(windowLarge, {
            position: [15, 5, -14],
            scale: 3,
            castShadow: false,
            mass: 0,
        });

        makeObjectDynamic(window1, {
            detection: 'directional',
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(0, 0, 1),
        });

        const window2 = new PhysicsObject(windowLarge, {
            position: [10, 5, 4],
            scale: 3,
            castShadow: false,
            mass: 0,
        });

        makeObjectDynamic(window2, {
            detection: 'directional',
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(0, 0, -1),
        });

        const window3 = new PhysicsObject(
            windowLarge.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [25, 5, -3],
                scale: 3,
                castShadow: false,
                mass: 0,
            }
        );

        makeObjectDynamic(window3, {
            detection: 'directional',
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(-1, 0, 0),
        });

        // ADDING OBJECTS
        this.add(
            // new PhysicsObject(chucks, {
            //     position: [10, 8, -5],
            //     scale: 0.000006,
            // }),
            // new PhysicsObject(saucer, {
            //     position: [18, 8, -5],
            //     scale: 0.01,
            // }),
            // new PhysicsObject(saucer, {
            //     position: [2, 8, -5],
            //     scale: 0.01,
            //     mass: 0,
            // }),
            // new PhysicsObject(windowSmall, {
            //     position: [10, 5, -14],
            //     scale: 2,
            //     mass: 0,
            // }),
            // new PhysicsObject(windowSmall, {
            //     position: [7.5, 5, -14],
            //     scale: 2,
            //     mass: 0,
            // }),
            // new PhysicsObject(windowSmall, {
            //     position: [12.5, 5, -14],
            //     scale: 2,
            //     mass: 0,
            // }),
            window1,
            window2,
            window3
        );

        // Room setup
        const room = new Room({
            size: [35, 12, 25],
            position: [13, -2, -9],
            color: COLORS.WHITE,
        });

        const { size, position, opacityConfig, color } = room.options;

        // SETTING BACK WALL TO QUOTE
        setMaterial(
            room.leftBackWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: motivation[0],
                }),
                opacityConfig
            )
        );

        // SETTING CEILING TO PANELS
        setMaterial(
            room.ceiling,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: ceil[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, -1, 0),
                }
            )
        );

        // SETTING FLOOR TO CARPET
        setMaterial(
            room.floor,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: carp[0],
                }),
                opacityConfig
            )
        );

        // Add platform in the middle of the room
        // const platform = new Wall({
        //     name: 'platform',
        //     size: [size[0] / 4, WALL_THICKNESS, size[2] / 4],
        //     position: [position[0], position[1] + size[1] / 4, position[2]],
        //     direction: [0, -1, 0],
        //     color,
        //     opacityConfig: {
        //         ...opacityConfig,
        //         lowOpacity: 0.5,
        //         detection: 'characterIntersection',
        //     },
        // });
        // room.add(platform);
        this.add(room);

        this.add(new OfficeStartLights());

        await super.load();
    }
}

export default OfficeStart;
