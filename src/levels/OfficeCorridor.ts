import {
    Color,
    DoubleSide,
    GridHelper,
    LinearFilter,
    Material,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
} from 'three';

import {
    createBox,
    loadModelFromGLTF,
    loadTexturesFromImages,
    meshesOf,
    setMaterial,
} from '../helpers';
import { COLORS, DEBUG_FLAGS, UP_AXIS_THREE } from '../globals';

// Game Objects
import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Player from '../characters/Player';
import OfficeCorridorLights from '../lights/OfficeCorridorLights';

// Models
import WINDOW_LARGE from '@models/windowlarge.glb?url';
import WATER_COOLER from '@models/watercooler.glb?url';
import CUBICLE from '@models/cubicle.glb?url';
import COPIER from '@models/copier.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR from '@models/chair.glb?url';
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
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';
import GOOG_COLORS from '@textures/google_colors.jpeg';

class OfficeCorridor extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        const possiblePositions = [
            new Vector3(-9, 9, 28),
            new Vector3(-10, 20, 10),
            new Vector3(10, 20, 10),
            new Vector3(-25, 10, -7.5),
            new Vector3(3.5, 18, -39),
        ];
        this.initCameraPosition =
            possiblePositions[
                Math.floor(Math.random() * possiblePositions.length)
            ];

        // Load models from files
        const window = await loadModelFromGLTF(WINDOW_LARGE);
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const printer = await loadModelFromGLTF(COPIER);
        const desk = await loadModelFromGLTF(DESK);
        const chair = await loadModelFromGLTF(CHAIR, true);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF);
        const clock = await loadModelFromGLTF(CLOCK);
        const plane = await loadModelFromGLTF(PLANE, true);
        meshesOf(plane).forEach(
            (mesh) => ((mesh.material as Material).side = DoubleSide)
        );

        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        const windowRight = window.clone();
        windowRight.rotateOnAxis(UP_AXIS_THREE, Math.PI);

        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        const doorBack = door.clone();
        doorBack.rotateOnAxis(UP_AXIS_THREE, Math.PI);

        const chairLeft = chair.clone();
        chairLeft.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 4);

        // Load textures from files
        const google_colors = await loadTexturesFromImages([GOOG_COLORS]);
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
            position: [-8.5, 6, -7.5],
            color: COLORS.PLAYER,
            hasHealthBar: false,
            projectileConfig: {
                object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
                speed: 50,
                damage: 35,
                distanceFromSender: 1.1,
                options: {
                    scale: 2e-6,
                    colllisionShape: createBox(plane, 2.1e-6),
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

        // Grid
        if (DEBUG_FLAGS.SHOW_GRIDS) {
            const grid = new GridHelper(1000, 500);
            grid.position.set(0, -1, 0);
            this.add(grid);
        }

        // Opacity configs
        const frontWallOpacity = {
            directional: true,
            characterIntersection: true,
            lowOpacity: 0.6,
            highOpacity: 1,
            normal: new Vector3(-1, 0, 0),
        };
        const backWallOpacity = {
            directional: true,
            characterIntersection: true,
            lowOpacity: 0.35,
            highOpacity: 1,
            normal: new Vector3(1, 0, 0),
        };
        const rightWallOpacity = {
            directional: true,
            characterIntersection: true,
            lowOpacity: 0.35,
            highOpacity: 1,
            normal: new Vector3(0, 0, -1).normalize(),
        };
        const leftWallOpacity = {
            directional: true,
            characterIntersection: true,
            lowOpacity: 0.35,
            highOpacity: 1,
            normal: new Vector3(0, 0, 1).normalize(),
        };

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
                map: google_colors[0],
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
                color: COLORS.GRAY,
                map: carp[0],
            })
        );
        this.add(room);

        // Portal setup
        this.portal = new PhysicsObject(door, {
            position: [37, 2.9, -2],
            scale: 10,
            mass: 0,
            opacityConfig: frontWallOpacity,
        });
        this.add(this.portal);
        this.add(
            new PhysicsObject(doorBack, {
                position: [-11, 2.9, -8],
                scale: 10,
                mass: 0,
                opacityConfig: backWallOpacity,
            })
        );

        this.add(new OfficeCorridorLights());

        /************************************
         * Creating objects for the office
         ************************************/

        // Whiteboard
        this.add(
            new PhysicsObject(whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [37, 5, -13],
                scale: 8,
                mass: 0,
                opacityConfig: frontWallOpacity,
            })
        );

        // Clock
        this.add(
            new PhysicsObject(clock.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [37, 10, -2],
                scale: 0.1,
                mass: 0,
                opacityConfig: frontWallOpacity,
            })
        );

        // Cubicles
        this.add(
            new PhysicsObject(
                cooler.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
                {
                    position: [1.5, 1, 2],
                    scale: 1.5,
                    mass: 1,
                    opacityConfig: rightWallOpacity,
                }
            )
        );
        this.add(
            new PhysicsObject(cubicle, {
                position: [9, 1, 0],
                scale: 3,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(cubicle, {
                position: [15, 1, 0],
                scale: 3,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(cubicle, {
                position: [21, 1, 0],
                scale: 3,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(cubicle, {
                position: [27, 1, 0],
                scale: 3,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );

        // Printer/copier
        this.add(
            new PhysicsObject(
                printer.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
                {
                    position: [-8, 1.5, 1],
                    scale: 3,
                    mass: 2,
                    opacityConfig: rightWallOpacity,
                }
            )
        );

        // Desks
        this.add(
            new PhysicsObject(desk, {
                position: [2, 1.5, -18],
                scale: 4,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(desk, {
                position: [10, 1.5, -18],
                scale: 4,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(desk, {
                position: [18, 1.5, -18],
                scale: 4,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );

        // Chairs
        this.add(
            new PhysicsObject(chair, {
                position: [8, 1, 0],
                scale: 0.1,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(chair, {
                position: [14, 1, 0],
                scale: 0.1,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(chair, {
                position: [20, 1, 0],
                scale: 0.1,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(chair, {
                position: [26, 1, 0],
                scale: 0.1,
                mass: 0,
                opacityConfig: rightWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(chairLeft, {
                position: [32, 0.25, -17.5],
                scale: 0.1,
                mass: 1,
                opacityConfig: leftWallOpacity,
            })
        );

        // Plants
        this.add(
            new PhysicsObject(fiddlePlant, {
                position: [-7, 2.8, -18.5],
                scale: 1,
                mass: 1,
                opacityConfig: leftWallOpacity,
            })
        );

        // Windows
        this.add(
            new PhysicsObject(window, {
                position: [-4, 5, -21],
                scale: 3,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );
        this.add(
            new PhysicsObject(window, {
                position: [26, 5, -21],
                scale: 3,
                mass: 0,
                opacityConfig: leftWallOpacity,
            })
        );

        await super.load();
    }
}

export default OfficeCorridor;
