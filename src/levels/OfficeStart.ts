import {
    Color,
    LinearFilter,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
} from 'three';

// Helpers and constants
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE, WALL_THICKNESS } from '../globals';
import { meshesOf, setMaterial } from '../utils';

// Game objects
import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import OfficeStartLights from '../lights/Office2Lights';

// Models
import WINDOW_LARGE from '@models/windowlarge.glb?url';
import WATER_COOLER from '@models/watercooler.glb?url';
import CUBICLE from '@models/cubicle.glb?url';
import BOARD from '@models/dryeraseboard.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR from '@models/chair.glb?url';
import CHAIR_2 from '@models/Chair-2.glb?url';
import FIDDLELEAF from '@models/Fiddle-leaf Plant.glb?url';
import CLOCK from '@models/analog.glb?url';
import PLANE from '@models/paperplane.glb?url';
import LADY from '@models/Suit & Tie Guy.glb?url';
import PHONE from '@models/Office Phone.glb?url';
import MUG from '@models/Mug With Office Tool.glb?url';
import MONITOR from '@models/Monitor.glb?url';

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

class OfficeStart extends Level {
    initCameraPosition = new Vector3(-30, 14, 0);

    async load() {
        this.background = new Color(COLORS.WHITE);

        // Load models from files
        const windowNS = await loadModelFromGLTF(WINDOW_LARGE);
        const windowEW = windowNS.clone();
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const cubicle = await loadModelFromGLTF(CUBICLE);
        const whiteboard = await loadModelFromGLTF(BOARD);
        const desk = await loadModelFromGLTF(DESK);
        const chair = await loadModelFromGLTF(CHAIR, true);
        const chairTwo = await loadModelFromGLTF(CHAIR_2, true);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF);
        const clock = await loadModelFromGLTF(CLOCK);
        const plane = await loadModelFromGLTF(PLANE, true);
        const lady = await loadModelFromGLTF(LADY);
        const phone = await loadModelFromGLTF(PHONE);
        const mug = await loadModelFromGLTF(MUG);
        const monitor = await loadModelFromGLTF(MONITOR);

        windowNS.castShadow = false;
        windowEW.castShadow = false;

        windowNS.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cooler.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        chairTwo.rotateOnAxis(UP_AXIS_THREE, Math.PI / 4);
        desk.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        cubicle.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        chair.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

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

        // Projectile config

        /************************************
         * Creating characters
         ************************************/

        /**** CREATING PLAYER ****/
        this.player = new Player({
            size: [1.5, 3, 1.5],
            position: [-10, 6, 0],
            color: COLORS.PLAYER,
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

        /************************************
         * Creating objects for the office
         ************************************/

        // whiteboard
        const board1 = new PhysicsObject(
            whiteboard.rotateOnAxis(UP_AXIS_THREE, Math.PI),
            {
                position: [30, 5, -9],
                scale: 8,
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
        this.add(
            new PhysicsObject(clock.rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [-0.5, 8, 0],
                scale: 0.08,
                castShadow: false,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            })
        );

        // cubicles
        const backWallOpacity = {
            directional: true,
            lowOpacity: 0.5,
            highOpacity: 1,
            normal: new Vector3(0, 0, -1).normalize(),
        };
        const cooler1 = new PhysicsObject(
            cooler.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
            {
                position: [4.5, 1, 2],
                scale: 1.5,
                castShadow: false,
                mass: 0,
                opacityConfig: backWallOpacity,
            }
        );

        for (let i = 0; i < 7; i++) {
            this.add(
                new PhysicsObject(cubicle, {
                    position: [16, 1, -19 + i * 6],
                    scale: 3,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: backWallOpacity,
                }),
                new PhysicsObject(chair, {
                    position: [14, 1, -19 + i * 6],
                    scale: 0.1,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: {
                        directional: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(0, 0, -1),
                    },
                })
            );
        }
        // }
        // const cubicle1 = new PhysicsObject(cubicle, {
        //     position: [9, 1, 0],
        //     scale: 3,
        //     castShadow: false,
        //     mass: 0,
        //     opacityConfig: backWallOpacity,
        // });
        // const cubicle2 = new PhysicsObject(cubicle, {
        //     position: [15, 1, 0],
        //     scale: 3,
        //     castShadow: false,
        //     mass: 0,
        //     opacityConfig: backWallOpacity,
        // });
        // const cubicle3 = new PhysicsObject(cubicle, {
        //     position: [21, 1, 0],
        //     scale: 3,
        //     castShadow: false,
        //     mass: 0,
        //     opacityConfig: backWallOpacity,
        // });
        // const cubicle4 = new PhysicsObject(cubicle, {
        //     position: [27, 1, 0],
        //     scale: 3,
        //     castShadow: false,
        //     mass: 0,
        //     opacityConfig: backWallOpacity,
        // });

        // Printer/copier
        // const printer1 = new PhysicsObject(
        //     printer.rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
        //     {
        //         position: [-1, 1.5, 2],
        //         scale: 3,
        //         castShadow: false,
        //         mass: 0,
        //         opacityConfig: backWallOpacity,
        //     }
        // );

        // Desks
        for (let i = 0; i < 3; i++) {
            this.add(
                new PhysicsObject(desk, {
                    position: [i * 6 + 6, 3, -27],
                    scale: 3,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: {
                        directional: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(0, 0, 1),
                    },
                })
            );
            this.add(
                new PhysicsObject(desk, {
                    position: [i * 6 + 6, 3, 27],
                    scale: 3,
                    castShadow: false,
                    mass: 0,
                    opacityConfig: {
                        directional: true,
                        lowOpacity: 0.2,
                        highOpacity: 1,
                        normal: new Vector3(0, 0, 1),
                    },
                })
            );
        }

        // Chairs
        const chair1 = new PhysicsObject(chair, {
            position: [8, 1, 0],
            scale: 0.1,
            castShadow: false,
            mass: 0,
            opacityConfig: {
                directional: true,
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
                directional: true,
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
                directional: true,
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
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, -1),
            },
        });
        // TODO: Wanna make it interactive (?) by making mass not equal to 0
        // but it keeps falling out the floor lmao
        const chair5 = new PhysicsObject(chairTwo, {
            position: [25, 0, -10],
            scale: 0.1,
            castShadow: false,
            mass: 1,
            opacityConfig: {
                directional: true,
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
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        // Front Desk
        const receptionBottom = new Wall({
            name: 'receptionBottom',
            size: [3, 4, 7],
            position: [-5, 1.5, 0],
            direction: [-1, 0, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        const receptionTop = new Wall({
            name: 'receptionTop',
            size: [0.5, 4, 8],
            position: [-5, 3.2, 0],
            direction: [-1, 0, 0],
            color: COLORS.GRAY,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        const phone1 = new PhysicsObject(
            phone.rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-5, 4, 2],
                scale: 0.4,
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

        const monitor1 = new PhysicsObject(
            monitor.rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-6, 5, -3],
                scale: 0.04,
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

        const mug1 = new PhysicsObject(
            mug.rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-4, 4, 2],
                scale: 8,
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

        // Front Desk Lady
        const receptionist = new PhysicsObject(
            lady.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [-2, 3, 0],
                scale: 6,
                castShadow: false,
                mass: 0,
            }
        );

        /****  WINDOWS ****/
        // this.add(
        //     new PhysicsObject(windowEW, {
        //         position: [17, 5, -21],
        //         scale: 3,
        //         castShadow: false,
        //         mass: 0,
        //         opacityConfig: {
        //             directional: true,
        //             lowOpacity: 0.2,
        //             highOpacity: 1,
        //             normal: new Vector3(0, 0, 1),
        //         },
        //     })
        // );
        // this.add(
        //     new PhysicsObject(windowNS, {
        //         position: [-4, 5, -7],
        //         scale: 3,
        //         castShadow: false,
        //         mass: 0,
        //         opacityConfig: {
        //             directional: true,
        //             lowOpacity: 0.2,
        //             highOpacity: 1,
        //             normal: new Vector3(1, 0, 0),
        //         },
        //     })
        // );

        /************************************
         * Setting up the room
         ************************************/

        /**** ADDING OBJECTS ****/
        this.add(
            cooler1,
            board1,
            chair1,
            chair2,
            chair3,
            chair4,
            chair5,
            plant1,
            receptionBottom,
            receptionTop,
            phone1,
            monitor1,
            mug1,
            receptionist
        );

        this.portal = new PhysicsObject(door, {
            position: [25, 1.5, -21],
            scale: 10,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(0, 0, 1),
            },
        });
        this.add(this.portal);

        /**** ROOM SETUP ****/
        const room = new Room({
            size: [40, 20, 60],
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

        // Add platform in the middle of the room
        const { size, position } = room.options;
        const platform = new Wall({
            name: 'platform',
            size: [15, WALL_THICKNESS, 30],
            position: [position[0], position[1] + size[1] / 4, position[2]],
            direction: [-1, 0, 0],
            color: COLORS.GOLD,
            opacityConfig: undefined,
        });
        meshesOf(platform).forEach((mesh) => (mesh.castShadow = true));
        room.add(platform);

        this.add(room);

        this.add(new OfficeStartLights());

        await super.load();
    }
}

export default OfficeStart;
