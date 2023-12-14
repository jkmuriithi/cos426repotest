import { Color, MeshPhongMaterial, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE } from '../globals';
import { setMaterial } from '../utils';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import OfficeStartLights from '../lights/OfficeStartLights';

// models
import WINDOW_SMALL from '@models/squarewindow.glb?url';
import WINDOW_LARGE from '@models/windowlarge.glb?url';
import WATER_COOLER from '@models/watercooler.glb?url';
import CUBICLE from '@models/cubicle.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';

// textures
import KOOL_AID_MAN from '@textures/BEAM.jpg';
import QUOTE from '@textures/motivation.jpg';
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';

import { makeDynamic, makeObjectDynamic } from '../opacity';

class OfficeStart extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        const windowSmall = await loadModelFromGLTF(WINDOW_SMALL);
        const windowLarge = await loadModelFromGLTF(WINDOW_LARGE);
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const door = await loadModelFromGLTF(DOOR, true);

        windowSmall.castShadow = false;
        windowLarge.castShadow = false;

        // makeObjectDynamic(windowSmall, {
        //     detection: 'directional',
        //     lowOpacity: 0.2,
        //     highOpacity: 1,
        //     normal: new Vector3(0, 0, 1),
        // });

        windowSmall.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const motivation = await loadTexturesFromImages([QUOTE]);
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);

        this.background = new Color(COLORS.WHITE);

        /************************************
         * Creating characters
         ************************************/

        /**** CREATING PLAYER ****/
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

        /**** CREATING ENEMY ****/
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

        /************************************
         * Creating objects for the office
         ************************************/

        /**** CREATING FURNITURE ****/
        // water cooler
        const cooler1 = new PhysicsObject(cooler, {
            position: [10, 2, -5],
            scale: 2,
            castShadow: false,
            mass: 0,
        });

        // whiteboard
        const board1 = new PhysicsObject(whiteboard, {
            position: [30, 5, -7],
            scale: 7,
            castShadow: false,
            mass: 0,
        });

        const cubicle1 = new PhysicsObject(cubicle, {
            position: [4, 1, -5],
            scale: 3,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });

        // cubicle(s)

        /**** CREATING WINDOWS ****/
        // window 1
        const window1 = new PhysicsObject(windowLarge, {
            position: [17, 5, -21],
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

        // window 2
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

        // window 3
        const window3 = new PhysicsObject(
            windowLarge.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [30, 5, -3],
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
        this.add(window1, window2, window3, cooler1, board1, cubicle1);

        // Room setup
        const room = new Room({
            size: [35, 14, 25],
            position: [13, -2, -9],
            color: COLORS.WHITE,
        });

        this.portal = new PhysicsObject(door, {
            position: [30, 2, -15],
            scale: 7,
            mass: 0,
        });
        this.add(this.portal);

        const opacityConfig = room.options.opacityConfig;

        // SETTING BACK WALL TO QUOTE
        setMaterial(
            room.leftBackWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: motivation[0],
                }),
                { ...opacityConfig, normal: new Vector3(0, 0, 1) }
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
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, 1, 0),
                }
            )
        );
        this.add(room);

        this.add(new OfficeStartLights());

        await super.load();
    }
}

export default OfficeStart;
