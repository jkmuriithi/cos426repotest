import {
    Color,
    LinearFilter,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
    Vector2
} from 'three';

// Helpers and constants
import {
    meshesOf,
    setMaterial,
    loadModelFromGLTF,
    loadTexturesFromImages,
} from '../helpers';
import {
    COLORS,
    RENDER_ORDER_LAST,
    UP_AXIS_THREE,
    WALL_THICKNESS,
} from '../globals';

// Game objects
import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import OfficeStartLights from '../lights/OfficeStartLights';

// Models
import WATER_COOLER from '@models/watercooler.glb?url';
import DOOR from '@models/door.glb?url';
import DESK from '@models/Desk.glb?url';
import CHAIR_2 from '@models/Chair Modern Cushion.glb?url';
import FIDDLELEAF from '@models/Fiddle-leaf Plant.glb?url';
import CLOCK from '@models/analog.glb?url';
import PLANE from '@models/paperplane.glb?url';
import LADY from '@models/Suit & Tie Guy.glb?url';
import PHONE from '@models/Office Phone.glb?url';
import MUG from '@models/Mug With Office Tool.glb?url';
import MONITOR from '@models/Monitor.glb?url';
import BIN from '@models/Trashcan Small.glb?url';
import KEYBOARD from '@models/Keyboard.glb?url';

// Textures
import PLAYER_PX from '@textures/player_px.jpg';
import PLAYER_NX from '@textures/player_nx.jpg';
import PLAYER_PY from '@textures/player_py.jpg';
import PLAYER_NY from '@textures/player_ny.jpg';
import PLAYER_PZ from '@textures/player_pz.jpg';
import PLAYER_NZ from '@textures/player_nz.jpg';
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';
import LOGO from '@textures/Google.png';
import WOOD from '@textures/wood.jpeg';
import SIGN from '@textures/paper.jpeg';
import GOOG_COLORS from '@textures/google_colors.jpeg';

class OfficeStart extends Level {
    initCameraPosition = new Vector3(-40, 15, 0);

    async load() {
        this.background = new Color(COLORS.BLACK);

        // Load models from files
        const cooler = await loadModelFromGLTF(WATER_COOLER, true);
        const desk = await loadModelFromGLTF(DESK);
        const chairTwo = await loadModelFromGLTF(CHAIR_2, true);
        const door = await loadModelFromGLTF(DOOR, true);
        const fiddlePlant = await loadModelFromGLTF(FIDDLELEAF);
        const clock = await loadModelFromGLTF(CLOCK);
        const plane = await loadModelFromGLTF(PLANE, true);
        const lady = await loadModelFromGLTF(LADY);
        const phone = await loadModelFromGLTF(PHONE);
        const mug = await loadModelFromGLTF(MUG);
        const monitor = await loadModelFromGLTF(MONITOR);
        const bin = await loadModelFromGLTF(BIN);
        const keyboard = await loadModelFromGLTF(KEYBOARD);

        // Load textures from files
        const google_colors = await loadTexturesFromImages([GOOG_COLORS]);
        const logoTexture = await loadTexturesFromImages([LOGO]);
        const player_textures = await loadTexturesFromImages(
            [PLAYER_PX, PLAYER_NX, PLAYER_PY, PLAYER_NY, PLAYER_PZ, PLAYER_NZ],
            NearestFilter,
            LinearFilter
        );
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);
        const wood = await loadTexturesFromImages([WOOD]);
        const sign = await loadTexturesFromImages([SIGN]);

        /************************************
         * Creating characters
         ************************************/

        /**** CREATING PLAYER ****/
        this.player = new Player({
            size: [1.5, 3, 1.5],
            position: [-18, 6, 0],
            color: COLORS.PLAYER,
            projectileConfig: {
                object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
                speed: 50,
                damage: 35,
                distanceFromSender: 1.1,
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

        /************************************
         * Creating objects for the office
         ************************************/

        // clock
        this.add(
            new PhysicsObject(clock.clone().rotateOnAxis(UP_AXIS_THREE, Math.PI), {
                position: [-0.5, 8, 0],
                scale: 0.08,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            })
        );

        const backWallOpacity = {
            directional: true,
            lowOpacity: 0.5,
            highOpacity: 1,
            normal: new Vector3(0, 0, -1).normalize(),
        };
        const cooler1 = new PhysicsObject(cooler.clone().rotateOnAxis(UP_AXIS_THREE, Math.PI), {
            position: [-1, 3, 12],
            scale: 1.5,
            mass: 0,
            opacityConfig: backWallOpacity,
        });

        const trashbin = new PhysicsObject(
            bin.clone().rotateOnAxis(UP_AXIS_THREE, -Math.PI / 2),
            {
                position: [-1, 1, 13.5],
                scale: 2,
                mass: 0,
                opacityConfig: backWallOpacity,
            }
        );

        // Plants
        const plant1 = new PhysicsObject(fiddlePlant, {
            position: [-1, 5, 6],
            scale: 1,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        const plant2 = new PhysicsObject(fiddlePlant, {
            position: [-1, 5, -6],
            scale: 1,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.2,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });

        for (let i = 0; i < 7; i++) {
            this.add(
                new PhysicsObject(chairTwo, {
                    position: [-14 + i * 2, 1.5, 20],
                    scale: 6,
                    mass: 0,
                    opacityConfig: backWallOpacity,
                })
            );
        }

        // Desks
        for (let i = 0; i < 3; i++) {
            this.add(
                new PhysicsObject(desk.clone().rotateOnAxis(UP_AXIS_THREE, Math.PI / 2), {
                    position: [i * 6 + 6, 3, -20],
                    scale: 3,
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
                    position: [i * 6 + 6, 3, 20],
                    scale: 3,
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
        // Front Desk
        const receptionBottom = new Wall({
            name: 'receptionBottom',
            size: [3, 4, 10],
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
            size: [0.5, 4, 11],
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
            phone.clone().rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-6, 4, 4],
                scale: 0.4,
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
            monitor.clone().rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-6, 5, -3],
                scale: 0.04,
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
            mug.clone().rotateOnAxis(UP_AXIS_THREE, (Math.PI * 3) / 4),
            {
                position: [-6, 4.2, 3.5],
                scale: 8,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(-1, 0, 0),
                },
            }
        );

        const keyboard1 = new PhysicsObject(
            keyboard.clone().rotateOnAxis(UP_AXIS_THREE, (-Math.PI * 3) / 4),
            {
                position: [-4.7, 3.5, -1],
                scale: 0.007,
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
            lady.clone().rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [-2, 3, 0],
                scale: 6,
                mass: 0,
            }
        );

        /************************************
         * Setting up the room
         ************************************/

        /**** ADDING OBJECTS ****/
        this.add(
            cooler1,
            plant1,
            plant2,
            receptionBottom,
            receptionTop,
            phone1,
            monitor1,
            mug1,
            keyboard1,
            receptionist,
            trashbin
        );

        this.portal = new PhysicsObject(
            door.clone().rotateOnAxis(UP_AXIS_THREE, Math.PI / 2),
            {
                position: [-0.5, 4, -18],
                scale: 8,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(0, 0, 1),
                },
            }
        );
        this.add(this.portal);

        /**** ROOM SETUP ****/
        const room = new Room({
            size: [40, 20, 45],
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

        // Add platforms in the middle of the room
        const { position } = room.options;
        const platform = new Wall({
            name: 'platform',
            size: [20, WALL_THICKNESS, 30],
            position: [position[0], 10, position[2]],
            direction: [1, 0, 0],
            color: COLORS.WHITE,
            opacityConfig: undefined,
        });
        setMaterial(
            platform,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: wood[0],
            })
        );
        meshesOf(platform).forEach((mesh) => (mesh.castShadow = true));
        room.add(platform);

        const leftClearWall = new Wall({
            name: 'leftClearWall',
            size: [20, WALL_THICKNESS, 8],
            position: [position[0], 10, position[2] - 19],
            direction: [-1, 0, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.3,
                highOpacity: 0.6,
                normal: new Vector3(-1, 0, 0),
            },
        });
        leftClearWall.renderOrder = RENDER_ORDER_LAST;
        meshesOf(leftClearWall).forEach((mesh) => (mesh.castShadow = true));
        room.add(leftClearWall);

        const rightClearWall = new Wall({
            name: 'rightClearWall',
            size: [20, WALL_THICKNESS, 8],
            position: [position[0], 10, position[2] + 19],
            direction: [-1, 0, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.3,
                highOpacity: 0.6,
                normal: new Vector3(-1, 0, 0),
            },
        });
        rightClearWall.renderOrder = RENDER_ORDER_LAST;
        meshesOf(rightClearWall).forEach((mesh) => (mesh.castShadow = true));
        room.add(rightClearWall);

        const logo = new Wall({
            name: 'logo',
            size: [7, 0.5, 7],
            position: [-0.5, 13, 0],
            direction: [-1, 0, 0],
            opacityConfig: {
                directional: true,
                lowOpacity: 0.9,
                highOpacity: 0.9,
                normal: new Vector3(-1, 0, 0),
            },
        });
        logoTexture[0].center = new Vector2(0.5, 0.5);
        logoTexture[0].rotation = -Math.PI / 2;
        setMaterial(
            logo,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: logoTexture[0],
            })
        );
        meshesOf(logo).forEach((mesh) => (mesh.castShadow = true));
        room.add(logo);

        const paper = new Wall({
            name: 'paper',
            size: [3, 0.1, 3],
            position: [-0.5, 7, -12],
            direction: [-1, 0, 0],
            opacityConfig: {
                directional: true,
                lowOpacity: 0.9,
                highOpacity: 0.9,
                normal: new Vector3(-1, 0, 0),
            },
        });
        sign[0].center = new Vector2(0.5, 0.5);
        sign[0].rotation = -Math.PI / 2;
        setMaterial(
            paper,
            new MeshPhongMaterial({
                color: COLORS.WHITE,
                map: sign[0],
            })
        );
        meshesOf(paper).forEach((mesh) => (mesh.castShadow = true));
        room.add(paper);

        this.add(room);
        this.add(new OfficeStartLights());

        await super.load();
    }
}

export default OfficeStart;
