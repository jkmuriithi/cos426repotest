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
import MeleeEnemy from '../characters/MeleeEnemy';
import OfficeFight1Lights from '../lights/OfficeFight1Lights';

// Models
import WATER_COOLER from '@models/watercooler.glb?url';
import CUBICLE from '@models/cubicle.glb?url';
import COPIER from '@models/copier.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
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
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';
import GOOG_COLORS from '@textures/google_colors.jpeg';

class OfficeFight1 extends Level {
    initCameraPosition = new Vector3(-55, 18, 0);

    async load() {
        if (DEBUG_FLAGS.SHOW_GRIDS) {
            this.add(new GridHelper(100, 100, 0x0000ff, 0x808080));
        }
        // Load assets
        const [
            cooler,
            cubicle,
            whiteboard,
            printer,
            desk,
            chairTwo,
            door,
            fiddlePlant,
            clock,
            plane,
            google_colors,
            player_textures,
            ceil,
            carp,
        ] = await Promise.all([
            loadModelFromGLTF(WATER_COOLER, true),
            loadModelFromGLTF(CUBICLE),
            loadModelFromGLTF(BOARD),
            loadModelFromGLTF(COPIER),
            loadModelFromGLTF(DESK),
            loadModelFromGLTF(CHAIR_2, true),
            loadModelFromGLTF(DOOR, true),
            loadModelFromGLTF(FIDDLELEAF),
            loadModelFromGLTF(CLOCK),
            loadModelFromGLTF(PLANE, true),
            loadTexturesFromImages([GOOG_COLORS]),
            loadTexturesFromImages(
                [
                    PLAYER_PX,
                    PLAYER_NX,
                    PLAYER_PY,
                    PLAYER_NY,
                    PLAYER_PZ,
                    PLAYER_NZ,
                ],
                NearestFilter
            ),
            loadTexturesFromImages([CEILING]),
            loadTexturesFromImages([CARPET]),
        ]);

        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        const doorBack = door.clone();
        doorBack.rotateOnAxis(UP_AXIS_THREE, Math.PI);

        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI / 4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        this.background = new Color(COLORS.BLACK);

        // Projectile config
        meshesOf(plane).forEach(
            (mesh) => ((mesh.material as Material).side = DoubleSide)
        );
        const projectileConfig = {
            object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
            speed: 50,
            damage: 35,
            options: {
                scale: 2e-6,
                colllisionShape: createBox(plane, 2.1e-6),
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
            lowOpacity: 0.2,
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

        // Whiteboard
        const board1 = new PhysicsObject(
            whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [37, 5, 32],
                scale: 8,
                mass: 0,
                opacityConfig: frontWallOpacity,
            }
        );

        // Clock
        const clock1 = new PhysicsObject(
            clock.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [37, 7.5, 0],
                scale: 0.15,
                mass: 0,
                opacityConfig: frontWallOpacity,
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
                mass: 0,
                opacityConfig: rightWallOpacity,
            });
            cubicleRightObjects.push(cubicleRight);
        }

        for (let i = 0; i < 7; i++) {
            const positionX = -16.6 + i * 6; // Adjust the starting X position and interval as needed
            const cubicleLeft = new PhysicsObject(
                cubicle.rotateOnAxis(new Vector3(0, 1, 0), Math.PI),
                {
                    position: [positionX, 3, -34.5],
                    scale: 3,
                    mass: 0,
                    opacityConfig: leftWallOpacity,
                }
            );
            cubicleLeftObjects.push(cubicleLeft);
            cubicle.rotateOnAxis(new Vector3(0, 1, 0), Math.PI);
        }

        // Printer/copier
        const printer1 = new PhysicsObject(
            printer.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [30, 2, -30],
                scale: 3.4,
                mass: 1,
                opacityConfig: frontWallOpacity,
            }
        );

        // Desks
        const deskRightObjects = [];
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const deskRight = new PhysicsObject(desk, {
                position: [positionX, 4, 12],
                scale: 4,
                mass: 0,
                opacityConfig: {
                    highOpacity: 1,
                    lowOpacity: 0.5,
                    normal: new Vector3(0, 0, -1),
                    characterIntersection: true,
                },
            });
            deskRightObjects.push(deskRight);
        }

        const deskLeftObjects = [];
        for (let i = 0; i < 5; i++) {
            const positionX = -15 + i * 10;
            const deskLeft = new PhysicsObject(desk, {
                position: [positionX, 4, -12],
                scale: 4,
                mass: 0,
                opacityConfig: {
                    highOpacity: 1,
                    lowOpacity: 0.5,
                    normal: new Vector3(0, 0, 1),
                    characterIntersection: true,
                },
            });
            deskLeftObjects.push(deskLeft);
        }

        // Plants
        const plant1 = new PhysicsObject(fiddlePlant, {
            position: [31, 4, -10],
            scale: 1,
            mass: 1,
        });
        const plant2 = new PhysicsObject(fiddlePlant, {
            position: [35, 4, -10],
            scale: 1,
            mass: 1,
        });

        /************************************
         * Setting up the room
         ************************************/

        /**** ADDING OBJECTS ****/
        this.add(
            clock1,
            board1,
            ...cubicleRightObjects,
            ...cubicleLeftObjects,
            ...deskRightObjects,
            ...deskLeftObjects,
            printer1,
            plant1,
            plant2
        );

        this.add(
            new PhysicsObject(doorBack, {
                position: [-37, 4, 0],
                scale: 8,
                mass: 0,
                opacityConfig: backWallOpacity,
            })
        );

        this.portal = new PhysicsObject(door, {
            position: [37.2, 4, 23],
            scale: 8,
            mass: 0,
            opacityConfig: frontWallOpacity,
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
                map: google_colors[0],
            })
        );
        setMaterial(
            room.leftFrontWall,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: google_colors[0],
            })
        );
        setMaterial(
            room.rightBackWall,
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
                color: COLORS.WHITE,
                map: carp[0],
            })
        );
        this.add(room);

        this.add(new OfficeFight1Lights());

        await super.load();
    }
}

export default OfficeFight1;
