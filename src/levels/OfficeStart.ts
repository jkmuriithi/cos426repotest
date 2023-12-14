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
import COPIER from '@models/copier.glb?url'
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR from '@models/chair.glb?url';
import CHAIR_2 from '@models/Chair-2.glb?url';
import FIDDLELEAF from '@models/Fiddle-leaf Plant.glb?url';
import CLOCK from '@models/analog.glb?url';

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
        const windowNS = await loadModelFromGLTF(WINDOW_LARGE);
        const windowEW = await loadModelFromGLTF(WINDOW_LARGE);
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const printer = await loadModelFromGLTF(COPIER);
        const desk = await loadModelFromGLTF(DESK);
        const chair = await loadModelFromGLTF(CHAIR);
        const chairTwo = await loadModelFromGLTF(CHAIR_2);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF); 
        const clock = await loadModelFromGLTF(CLOCK);

        windowNS.castShadow = false;
        windowEW.castShadow = false;

        // makeObjectDynamic(windowSmall, {
        //     detection: 'directional',
        //     lowOpacity: 0.2,
        //     highOpacity: 1,
        //     normal: new Vector3(0, 0, 1),
        // });

        windowNS.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        // door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI/4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI/2)

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

    /* Coords: 
        SE - (0,0,3)
        SW - (0,0,-21)
        NE - (30,0,3)
        NW - (30,0,21)*/

        /**** CREATING DECOR ****/
        // water cooler
        // TODO: FIGURE OUT WHY THE WATER JUG DISAPPEARS SOMETIMES :(
        const cooler1 = new PhysicsObject(cooler.rotateOnAxis(UP_AXIS_THREE, -Math.PI /2), {
            position: [4.5, 1, 2],
            scale: 1.5,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        // whiteboard
        const board1 = new PhysicsObject(whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
            position: [30, 5, -9],
            scale: 8,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        // clock
        const clock1 = new PhysicsObject(clock.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
            position: [30, 10, -9],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        // cubicle(s)
        const cubicle1 = new PhysicsObject(cubicle, {
            position: [9, 1, 0],
            scale: 3,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: (new Vector3(0, 0, -1)).normalize(),
            },
        });
        const cubicle2 = new PhysicsObject(cubicle, {
            position: [15, 1, 0],
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
        const cubicle3 = new PhysicsObject(cubicle, {
            position: [21, 1, 0],
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
        const cubicle4 = new PhysicsObject(cubicle, {
            position: [27, 1, 0],
            scale: 3,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: (new Vector3(0, 0, -1)).normalize(),
            },
        });


        // Printer
        const printer1 = new PhysicsObject(printer.rotateOnAxis(UP_AXIS_THREE, -Math.PI/2), {
            position: [-1, 1.5, 2],
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

        // Desk
        const desk1 = new PhysicsObject(desk, {
            position: [2, 1.5, -18],
            scale: 4,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });

        const desk2 = new PhysicsObject(desk, {
            position: [10, 1.5, -18],
            scale: 4,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });

        const desk3 = new PhysicsObject(desk, {
            position: [18, 1.5, -18],
            scale: 4,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });

        // Chairs
        const chair1 = new PhysicsObject(chair, {
            position: [8, 1, 0],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });
        const chair2 = new PhysicsObject(chair, {
            position: [14, 1, 0],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });
        const chair3 = new PhysicsObject(chair, {
            position: [20, 1, 0],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });
        const chair4 = new PhysicsObject(chair, {
            position: [26, 1, 0],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });
        // TODO: Wanna make it interactive (?) by making mass not equal to 0
        // but it keeps falling out the floor lmao
        const chair5 = new PhysicsObject(chairTwo, {
            position: [51, 0, 6],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        // Plants
        const plant1 = new PhysicsObject(fiddlePlant, {
            position: [29, 2, -19.5],
            scale: 1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                detection: 'directional',
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });



        

        
        /****  WINDOWS ****/
        // window 1
        const window1 = new PhysicsObject(windowEW, {
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
        const window2 = new PhysicsObject(windowEW, {
            position: [15, 7, 3],
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
        // const window3 = new PhysicsObject(
        //     windowNS,
        //     {
        //         position: [30, 5, -3],
        //         scale: 3,
        //         castShadow: false,
        //         mass: 0,
        //     }
        // );

        // makeObjectDynamic(window3, {
        //     detection: 'directional',
        //     lowOpacity: 0.2,
        //     highOpacity: 1,
        //     normal: new Vector3(-1, 0, 0),
        // });

        // window 4
        const window4 = new PhysicsObject(
            windowNS,
            {
                position: [-4, 5, -7],
                scale: 3,
                castShadow: false,
                mass: 0,
            }
        );

        makeObjectDynamic(window4, {
            detection: 'directional',
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(1, 0, 0),
        });

    
    /************************************
    * Setting up the room
    ************************************/

        /**** ADDING OBJECTS ****/
        this.add(clock1, window1, window4, cooler1, board1, cubicle1, cubicle2, cubicle3, cubicle4, printer1, chair1, chair2, chair3, chair4, chair5, plant1, desk1, desk2, desk3);

        /**** ROOM SETUP ****/
        const room = new Room({
            size: [35, 14, 25],
            position: [13, -2, -9],
            color: COLORS.WHITE,
        });

        this.portal = new PhysicsObject(door, {
            position: [23, 1, -21],
            scale: 6,
            mass: 0,
        });
        this.add(this.portal);

        const opacityConfig = room.options.opacityConfig;
        
        /**** WALL DESIGNS ****/
        // Back wall quote
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

        // Ceiling panels
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

        // Carpet on floor
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
