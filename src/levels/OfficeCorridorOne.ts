import {
    Color,
    LinearFilter,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
} from 'three';

import {
    loadModelFromGLTF,
    loadTexturesFromImages,
    setMaterial,
} from '../helpers';
import { COLORS, UP_AXIS_THREE } from '../globals';

// Game Objects
import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import OfficeStartLights from '../lights/Office2Lights';

// Models
import WINDOW_LARGE from '@models/windowlarge.glb?url';
import WATER_COOLER from '@models/watercooler.glb?url';
import CUBICLE from '@models/cubicle.glb?url';
import COPIER from '@models/copier.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR from '@models/chair.glb?url';
import CHAIR_2 from '@models/Chair-2.glb?url';
import FIDDLELEAF from '@models/Fiddle-leaf Plant.glb?url';
import CLOCK from '@models/analog.glb?url';
import PLANE from '@models/paperplane.glb?url';

// Textures
import PLAYER_PX from '@textures/player_px.jpg';
import PLAYER_NX from '@textures/player_nx.jpg';
import PLAYER_PY from '@textures/player_py.jpg';
import PLAYER_NY from '@textures/player_ny.jpg';
import PLAYER_PZ from '@textures/player_pz.jpg';
import PLAYER_NZ from '@textures/player_nz.jpg';
import QUOTE from '@textures/motivation.jpg';
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';

class OfficeCorridorOne extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        const windowBack = await loadModelFromGLTF(WINDOW_LARGE);
        const windowLeft = windowBack.clone();
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const printer = await loadModelFromGLTF(COPIER);
        const desk = await loadModelFromGLTF(DESK);
        const chair = await loadModelFromGLTF(CHAIR);
        const chairTwo = await loadModelFromGLTF(CHAIR_2, true);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF);
        const clock = await loadModelFromGLTF(CLOCK);
        const plane = await loadModelFromGLTF(PLANE);

        windowBack.castShadow = false;
        windowLeft.castShadow = false;

        windowBack.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI / 4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const motivation = await loadTexturesFromImages([QUOTE]);
        const player_textures = await loadTexturesFromImages(
            [PLAYER_PX, PLAYER_NX, PLAYER_PY, PLAYER_NY, PLAYER_PZ, PLAYER_NZ],
            NearestFilter,
            LinearFilter
        );
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);

        this.background = new Color(COLORS.BLACK);

        // Player
        this.player = new Player({
            size: [1, 2, 1].map((i) => i * 1.8) as [number, number, number],
            position: [10, 6, -5],
            color: COLORS.PLAYER,
            hasHealthBar: false,
            projectileConfig: {
                object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
                speed: 50,
                damage: 35,
                options: {
                    scale: 2e-6,
                },
            },
        });
        this.player.jumpVelocity = 7;

        const materials = player_textures.map(
            (texture) =>
                new MeshPhongMaterial({
                    color: COLORS.PLAYER,
                    shininess: 100,
                    map: texture,
                })
        );
        setMaterial(this.player, materials);
        this.add(this.player);

        // Room setup
        const room = new Room({
            size: [50, 14, 25],
            position: [13, -2, -9],
            color: COLORS.WHITE,
        });
        setMaterial(
            room.leftBackWall,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: motivation[0],
            })
        );
        setMaterial(
            room.ceiling,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: ceil[0],
            })
        );
        setMaterial(
            room.floor,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: carp[0],
            })
        );
        this.add(room);

        // Portal setup
        this.portal = new PhysicsObject(door, {
            position: [25, 2.9, -21],
            scale: 10,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, 1),
            },
        });
        room.add(this.portal);

        room.add(new OfficeStartLights());

        /************************************
         * Creating objects for the office
         ************************************/
        const frontWallOpacity = {
            directional: true,
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(-1, 0, 0),
        };
        const backWallOpacity = {
            directional: true,
            lowOpacity: 0.2,
            highOpacity: 1,
            normal: new Vector3(1, 0, 0),
        };
        const rightWallOpacity = {
            directional: true,
            lowOpacity: 0.5,
            highOpacity: 1,
            normal: new Vector3(0, 0, -1).normalize(),
        };
        const leftWallOpacity = {
            directional: true,
            lowOpacity: 0.5,
            highOpacity: 1,
            normal: new Vector3(0, 0, 1).normalize(),
        };

        // whiteboard
        room.add(
            new PhysicsObject(whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [30, 5, -9],
                scale: 8,
                castShadow: false,
                mass: 0,
                opacityConfig: frontWallOpacity,
            })
        );

        // clock
        room.add(
            new PhysicsObject(clock.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [30, 10, -9],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: frontWallOpacity,
            })
        );

        // cubicles
        room.add(
            new PhysicsObject(
                cooler.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
                {
                    position: [4.5, 1, 2],
                    scale: 1.5,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: rightWallOpacity,
                }
            )
        );
        room.add(
            new PhysicsObject(cubicle, {
                position: [9, 1, 0],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(cubicle, {
                position: [15, 1, 0],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(cubicle, {
                position: [21, 1, 0],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(cubicle, {
                position: [27, 1, 0],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );

        // Printer/copier
        room.add(
            new PhysicsObject(
                printer.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
                {
                    position: [-1, 1.5, 2],
                    scale: 3,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: rightWallOpacity,
                }
            )
        );

        // Desks
        room.add(
            new PhysicsObject(desk, {
                position: [2, 1.5, -18],
                scale: 4,
                castShadow: false,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(desk, {
                position: [10, 1.5, -18],
                scale: 4,
                castShadow: false,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(desk, {
                position: [18, 1.5, -18],
                scale: 4,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    ...leftWallOpacity,
                    characterIntersection: true,
                },
            })
        );

        // Chairs
        room.add(
            new PhysicsObject(chair, {
                position: [8, 1, 0],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(chair, {
                position: [14, 1, 0],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(chair, {
                position: [20, 1, 0],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(chair, {
                position: [26, 1, 0],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(chairTwo, {
                position: [25, 0, -10],
                scale: 0.1,
                castShadow: false,
                mass: 1,
                opacityConfig: frontWallOpacity,
            })
        );

        // Plants
        room.add(
            new PhysicsObject(fiddlePlant, {
                position: [29, 2, -19.5],
                scale: 1,
                castShadow: false,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );

        /****  WINDOWS ****/
        // window 1
        room.add(
            new PhysicsObject(windowLeft, {
                position: [-4, 5, -21],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        room.add(
            new PhysicsObject(windowBack, {
                position: [-11, 5, -9],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: backWallOpacity,
            })
        );

        await super.load();
    }
}

export default OfficeCorridorOne;
