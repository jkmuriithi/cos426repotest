import {
    Color,
    DoubleSide,
    LinearFilter,
    Material,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
} from 'three';
import {
    loadModelFromGLTF,
    loadTexturesFromImages,
    meshesOf,
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
import COPIER from '@models/copier.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR_2 from '@models/Chair-2.glb?url';
import FIDDLELEAF from '@models/Fiddle-leaf Plant.glb?url';
import CLOCK from '@models/analog.glb?url';
import PLANE from '@models/paperplane.glb?url';
import CUBICLE from '@models/cubicle.glb?url';

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

import RangedEnemy, { RangedEnemyOptions } from '../characters/RangedEnemy';

class OfficeFight1 extends Level {
    initCameraPosition = new Vector3(-41, 5, -7.5);
    async load() {
        // Load models from files
        const windowNS = await loadModelFromGLTF(WINDOW_LARGE);
        const windowEW = windowNS.clone();
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const printer = await loadModelFromGLTF(COPIER);
        const desk = await loadModelFromGLTF(DESK);
        const chairTwo = await loadModelFromGLTF(CHAIR_2, true);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF);
        const clock = await loadModelFromGLTF(CLOCK);
        const plane = await loadModelFromGLTF(PLANE, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);

        windowNS.castShadow = false;
        windowEW.castShadow = false;

        cubicle.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        door.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2);
        windowNS.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI / 4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const google_colors = await loadTexturesFromImages([GOOG_COLORS]);
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
        meshesOf(plane).forEach(
            (mesh) => ((mesh.material as Material).side = DoubleSide)
        );
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
            size: [2, 4, 2],
            position: [-15, 0.5, -7.5],
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
        setMaterial(this.player, materials, false);
        this.add(this.player);

        /************************************
         * Creating objects for the office
         ************************************/

        // whiteboard
        const board1 = new PhysicsObject(
            whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [47, 6, -9],
                scale: 12,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }
        );

        // clock
        const clock1 = new PhysicsObject(
            clock.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [47, 13, -9],
                scale: 0.1,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }
        );

        this.portal = new PhysicsObject(door, {
            position: [45.5, 3, -29],
            scale: 10,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, 1),
            },
        });

        /************************************
         * Setting up the room
         ************************************/

        /**** ADDING OBJECTS ****/
        this.add(
            clock1,
            new PhysicsObject(fiddlePlant, {
                position: [42, 3, -34],
                scale: 1,
                castShadow: false,
                mass: 1,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }),
            new PhysicsObject(fiddlePlant, {
                position: [42, 3, -24],
                scale: 1,
                castShadow: false,
                mass: 1,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }),
            new PhysicsObject(windowEW, {
                position: [36, 8, -43],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, 1),
                },
            }),
            new PhysicsObject(windowEW, {
                position: [21, 8, -43],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, 1),
                },
            }),
            new PhysicsObject(windowEW, {
                position: [6, 8, -43],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, 1),
                },
            }),
            new PhysicsObject(windowEW, {
                position: [-9, 8, -43],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, 1),
                },
            }),
            new PhysicsObject(windowNS, {
                position: [-21, 8, -31],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(windowNS, {
                position: [-21, 8, -16],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(windowNS, {
                position: [-21, 8, -1],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(windowNS, {
                position: [-21, 8, 14],
                scale: 5,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            board1,
            new PhysicsObject(printer, {
                position: [43, 2, 23],
                scale: 3.4,
                castShadow: false,
                mass: 3,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, -1),
                },
            }),
            new PhysicsObject(
                printer.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
                {
                    position: [42, 2, 17],
                    scale: 3,
                    castShadow: false,
                    mass: 1,
                    opacityConfig: {
                        characterIntersection: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(0, 0, -1),
                    },
                }
            ),
            new PhysicsObject(printer, {
                position: [42, 2, 11],
                scale: 3,
                castShadow: false,
                mass: 1,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, -1),
                },
            }),
            new PhysicsObject(printer, {
                position: [42, 2, 5],
                scale: 3,
                castShadow: false,
                mass: 1,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, -1),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, 21.5],
                scale: 3.05,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, 15],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, 8.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, 2],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, -38.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, -32],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, -25.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [9, 1, -19],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),

            new PhysicsObject(cubicle, {
                position: [-10, 1, 21.5],
                scale: 3.05,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 15],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 8.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 2],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -38.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -32],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -25.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -19],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),

            new PhysicsObject(cubicle, {
                position: [-10, 1, 21.5],
                scale: 3.05,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 15],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 8.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, 2],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -38.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [-10, 1, -32],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -25.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -19],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, 21.5],
                scale: 3.05,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, 15],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, 8.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, 2],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -38.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -32],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -25.5],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(cubicle, {
                position: [28, 1, -19],
                scale: 3,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    characterIntersection: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            }),
            new PhysicsObject(chairTwo, {
                position: [19, 1, -15],
                scale: 0.15,
                castShadow: false,
                mass: 1,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }),
            new PhysicsObject(
                chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI * 0.4),
                {
                    position: [9, 1, -4],
                    scale: 0.15,
                    castShadow: false,
                    mass: 1,
                    opacityConfig: {
                        directional: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(-1, 0, 0),
                    },
                }
            ),
            new PhysicsObject(
                chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI * 0.31),
                {
                    position: [28, 1, -6],
                    scale: 0.15,
                    castShadow: false,
                    mass: 1,
                    opacityConfig: {
                        directional: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(-1, 0, 0),
                    },
                }
            ),
            new PhysicsObject(door, {
                position: [-21, 3, -7],
                scale: 9,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0.5),
                },
            }),
            this.portal
        );

        const rangedOpts: RangedEnemyOptions = {
            ...RangedEnemy.defaultOptions,
            size: [2, 4, 2],
            color: COLORS.RED,
            projectileConfig,
        };
        this.enemies = [
            new RangedEnemy({
                ...rangedOpts,
                position: [-1, 1, -23],
                fireRate: 2,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [-1, 1, 11],
                fireRate: 2,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [19, 1, -29],
                fireRate: 1,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [19, 1, 15],
                fireRate: 1,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [37, 1, -18],
                fireRate: 1,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [37, 1, -7],
                fireRate: 0.5,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [42, 1, -3],
                fireRate: 0.5,
            }),
            new RangedEnemy({
                ...rangedOpts,
                position: [36, 1, 9],
                fireRate: 1,
            }),
        ];
        this.add(...this.enemies);

        /**** ROOM SETUP ****/
        const room = new Room({
            size: [70, 20, 70],
            position: [13, -2, -9],
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

export default OfficeFight1;
