import {
    Color,
    GridHelper,
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
import MeleeEnemy from '../characters/MeleeEnemy';
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

class OfficeFight2 extends Level {
    initCameraPosition = new Vector3(-50, 20, 0);

    async load() {
        // Load models from files
        this.add (new GridHelper(100, 100, 0x0000ff, 0x808080));
        const windowNS = await loadModelFromGLTF(WINDOW_LARGE);
        const windowEW = windowNS.clone();
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
        const plane = await loadModelFromGLTF(PLANE, true);

        windowNS.castShadow = false;
        windowEW.castShadow = false;

        windowNS.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI / 4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const motivation = await loadTexturesFromImages([QUOTE]);
        const player_textures = await loadTexturesFromImages([
            PLAYER_PX,
            PLAYER_NX,
            PLAYER_PY,
            PLAYER_NY,
            PLAYER_PZ,
            PLAYER_NZ,
        ]);
        player_textures.map((te) => (te.magFilter = NearestFilter));
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);

        this.background = new Color(COLORS.BLACK);

        // Projectile config
        const projectileConfig = {
            object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
            speed: 50,
            damage: 35,
            options: {
                scale: 2e-6,
            },
        };

        /************************************
         * Creating characters
         ************************************/

        /**** CREATING PLAYER ****/
        this.player = new Player({
            size: [1.5, 3, 1.5],
            position: [-32, 2, 0],
            color: COLORS.PLAYER,
            projectileConfig,
        });
        this.player.jumpVelocity = 7;

        const materials = player_textures.map((texture) => {
            texture.generateMipmaps = false;
            texture.minFilter = LinearFilter;
            const mat = new MeshPhongMaterial({
                color: COLORS.PLAYER,
                shininess: 100,
                map: texture,
            });
            return mat;
        });
        setMaterial(this.player, materials);
        this.add(this.player);

        // Enemies
        // Right side
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const enemy = new MeleeEnemy({
                size: [1.5, 3, 1.5],
                position: [positionX, 2, 30],
                color: COLORS.BLACK,
                health: 200,
            });
            this.enemies.push(enemy);
        }

        // Left side
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const enemy = new MeleeEnemy({
                size: [1.5, 3, 1.5],
                position: [positionX, 2, -30],
                color: COLORS.BLACK,
                health: 200,
            });
            this.enemies.push(enemy);
        }

        this.add(...this.enemies);

        /************************************
         * Creating objects for the office
         ************************************/

        // Whiteboard
        const board1 = new PhysicsObject(
            whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [37, 5, 30],
                scale: 8,
                castShadow: false,
                mass: 0,
            }
        );

        // Clock
        const clock1 = new PhysicsObject(
            clock.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [37, 7.5, 0],
                scale: 0.15,
                castShadow: false,
                mass: 0,
            }
        );

        // Cubicles
        const cubicleRightObjects = [];
        const cubicleLeftObjects = [];

        for (let i = 0; i < 7; i++) {
            const positionX = -15 + i * 6; // Adjust the starting X position and interval as needed
            const cubicleRight = new PhysicsObject(cubicle, {
                position: [positionX, 3, 34.5],
                scale: 3,
                castShadow: false,
                mass: 0,
            });
            cubicleRightObjects.push(cubicleRight);
        }

        for (let i = 0; i < 7; i++) {
            const positionX = -16.6 + i * 6; // Adjust the starting X position and interval as needed
            const cubicleLeft = new PhysicsObject(cubicle.rotateOnAxis(new Vector3(0, 1, 0), Math.PI), {
                position: [positionX, 3, -34.5],
                scale: 3,
                castShadow: false,
                mass: 0,
            });
            cubicleLeftObjects.push(cubicleLeft);
            cubicle.rotateOnAxis(new Vector3(0, 1, 0), Math.PI);
        }

        // Printer/copier
        const printer1 = new PhysicsObject(
            printer.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [30, 3, -30],
                scale: 5,
                castShadow: false,
                mass: 0,
            }
        );

        // Desks
        const deskRightObjects = [];
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const deskRight = new PhysicsObject(desk, {
                position: [positionX, 4, 12],
                scale: 4,
                castShadow: false,
                mass: 0,
            });
            deskRightObjects.push(deskRight);
        }

        const deskLeftObjects = [];
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const deskLeft = new PhysicsObject(desk, {
                position: [positionX, 4, -12],
                scale: 4,
                castShadow: false,
                mass: 0,
            });
            deskLeftObjects.push(deskLeft);
        }

        // Plants
        const plant1 = new PhysicsObject(fiddlePlant, {
            position: [31, 4, -10],
            scale: 1,
            castShadow: false,
            mass: 0,
        });
        const plant2 = new PhysicsObject(fiddlePlant, {
            position: [35, 4, -10],
            scale: 1,
            castShadow: false,
            mass: 0,
        });

        /************************************
         * Setting up the room
         ************************************/

        /**** ADDING OBJECTS ****/
        this.add(
            clock1,
            board1,
            cubicleRightObjects[0],
            cubicleRightObjects[1],
            cubicleRightObjects[2],
            cubicleRightObjects[3],
            cubicleRightObjects[4],
            cubicleRightObjects[5],
            cubicleRightObjects[6],
            cubicleRightObjects[7],
            cubicleLeftObjects[0],
            cubicleLeftObjects[1],
            cubicleLeftObjects[2],
            cubicleLeftObjects[3],
            cubicleLeftObjects[4],
            cubicleLeftObjects[5],
            cubicleLeftObjects[6],
            cubicleLeftObjects[7],
            deskRightObjects[0],
            deskRightObjects[1],
            deskRightObjects[2],
            deskRightObjects[3],
            deskRightObjects[4],
            deskRightObjects[5],
            deskLeftObjects[0],
            deskLeftObjects[1],
            deskLeftObjects[2],
            deskLeftObjects[3],
            deskLeftObjects[4],
            deskLeftObjects[5],
            printer1,
            plant1,
            plant2
        );

        this.portal = new PhysicsObject(door, {
            position: [30, 4, 37],
            scale: 8,
            mass: 0,
        });
        this.add(this.portal);

        /**** ROOM SETUP ****/
        const room = new Room({
            size: [75, 10, 75],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        });

        /**** WALL DESIGNS ****/
        // Back wall quote
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

        this.add(new OfficeStartLights());

        await super.load();
    }
}

export default OfficeFight2;