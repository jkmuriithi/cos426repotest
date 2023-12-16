import {
    Color,
    LinearFilter,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
    Vector2,
    Material,
    DoubleSide,
} from 'three';

import {
    loadModelFromGLTF,
    loadTexturesFromImages,
    setMaterial,
    meshesOf,
    createBox,
} from '../helpers';
import {
    COLORS,
    RENDER_ORDER_LAST,
    UP_AXIS_THREE,
    WALL_THICKNESS,
} from '../globals';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import OfficeBossLights from '../lights/OfficeBossLights';

// models
import DOOR from '@models/door.glb?url';
import PLANE from '@models/paperplane.glb?url';

// textures
import PLAYER_PX from '@textures/player_px.jpg';
import PLAYER_NX from '@textures/player_nx.jpg';
import PLAYER_PY from '@textures/player_py.jpg';
import PLAYER_NY from '@textures/player_ny.jpg';
import PLAYER_PZ from '@textures/player_pz.jpg';
import PLAYER_NZ from '@textures/player_nz.jpg';
import BOSS_PX from '@textures/boss_px.jpg';
import BOSS_NX from '@textures/boss_nx.jpg';
import BOSS_PY from '@textures/boss_py.jpg';
import BOSS_NY from '@textures/boss_ny.jpg';
import BOSS_PZ from '@textures/boss_pz.jpg';
import BOSS_NZ from '@textures/boss_nz.jpg';
import CEILING from '@textures/ceiling_panels.jpg';
import CARPET from '@textures/carpet.jpg';
import PROF from '@textures/prof.jpg';
import GOOG_COLORS from '@textures/google_colors.jpeg';
import GOLD from '@textures/gold.jpg';

class OfficeBoss extends Level {
    initCameraPosition = new Vector3(-125, 15, 0);

    async load() {
        // Load models from files
        const door = await loadModelFromGLTF(DOOR, true);
        const plane = await loadModelFromGLTF(PLANE, true);

        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);
        const doorBack = door.clone();
        doorBack.rotateOnAxis(UP_AXIS_THREE, Math.PI);

        // Load textures from files
        const player_textures = await loadTexturesFromImages(
            [PLAYER_PX, PLAYER_NX, PLAYER_PY, PLAYER_NY, PLAYER_PZ, PLAYER_NZ],
            NearestFilter,
            LinearFilter
        );
        const boss_textures = await loadTexturesFromImages(
            [BOSS_PX, BOSS_NX, BOSS_PY, BOSS_NY, BOSS_PZ, BOSS_NZ],
            NearestFilter,
            LinearFilter
        );
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);
        const prof = await loadTexturesFromImages([PROF]);
        const google_colors = await loadTexturesFromImages([GOOG_COLORS]);
        const gold = await loadTexturesFromImages([GOLD]);

        prof[0].center = new Vector2(0.5, 0.5);
        prof[0].rotation = -Math.PI / 2;
        const profMaterial = new MeshPhongMaterial({
            color: COLORS.WHITE,
            map: prof[0],
        });
        const googMaterial = new MeshPhongMaterial({
            color: COLORS.WHITE,
            map: google_colors[0],
        });

        this.background = new Color(COLORS.BLACK);

        // Projectile config
        meshesOf(plane).forEach(
            (mesh) => ((mesh.material as Material).side = DoubleSide)
        );
        const projectileConfig = {
            object: plane.rotateOnAxis(new Vector3(0, 0, 1), -Math.PI / 2),
            speed: 50,
            damage: 35,
            distanceFromSender: 1.2,
            options: {
                scale: 2e-6,
                colllisionShape: createBox(plane, 2.1e-6),
            },
        };

        // Characters
        this.player = new Player({
            size: [1, 2, 1].map((i) => i * 3.5) as [number, number, number],
            position: [-70, 5, 0],
            healthBarPosition: [0, 4, 0],
            color: COLORS.PLAYER,
            projectileConfig,
        });
        this.player.moveVelocity = 14;
        this.player.jumpVelocity = 10;

        let materials = player_textures.map(
            (texture) =>
                new MeshPhongMaterial({
                    color: COLORS.PLAYER,
                    shininess: 100,
                    map: texture,
                })
        );
        setMaterial(this.player, materials);
        this.add(this.player);

        // Enemies
        this.enemies = [
            new RangedEnemy({
                size: [4, 8, 4],
                position: [20, 25, -30],
                color: COLORS.RED,
                health: 200,
                projectileConfig,
            }),
            new RangedEnemy({
                size: [4, 8, 4],
                position: [20, 25, 30],
                color: COLORS.RED,
                health: 200,
                projectileConfig,
            }),
            new MeleeEnemy({
                size: [4, 8, 4],
                position: [0, 5, -10],
                color: COLORS.BLACK,
                health: 300,
            }),
            new MeleeEnemy({
                size: [4, 8, 4],
                position: [0, 5, 10],
                color: COLORS.BLACK,
                health: 300,
            }),
        ];
        this.add(...this.enemies);

        // Boss
        const bossPlane = plane.clone();
        setMaterial(
            bossPlane,
            new MeshPhongMaterial({
                color: 'wheat',
                side: DoubleSide,
                map: gold[0],
                shininess: 100,
                specular: COLORS.WHITE,
            })
        );
        const boss = new RangedEnemy({
            size: [24, 48, 24],
            position: [20, 50, 0],
            color: COLORS.BLACK,
            health: 1000,
            healthBarPosition: [0, 25, 0],
            projectileConfig: {
                object: bossPlane,
                speed: 50,
                damage: 99,
                distanceFromSender: 25,
                options: {
                    scale: 1.5e-5,
                    colllisionShape: createBox(plane, 1.55e-5),
                },
            },
        });
        boss.moveVelocity = 4;
        materials = boss_textures.map(
            (texture) =>
                new MeshPhongMaterial({
                    color: COLORS.PLAYER,
                    shininess: 100,
                    map: texture,
                })
        );
        setMaterial(boss, materials);
        this.enemies.push(boss);
        this.add(...this.enemies);

        // Room setup
        const room = new Room({
            size: [170, 120, 200],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        });
        this.portal = new PhysicsObject(door, {
            position: [84, 10, 0],
            scale: 20,
            mass: 0,
            opacityConfig: {
                directional: true,
                lowOpacity: 0.6,
                highOpacity: 1,
                normal: new Vector3(-1, 0, 0),
            },
        });
        this.add(this.portal);
        this.add(
            new PhysicsObject(doorBack, {
                position: [-84, 10, 0],
                scale: 18,
                mass: 0,
                opacityConfig: {
                    directional: true,
                    lowOpacity: 0.2,
                    highOpacity: 1,
                    normal: new Vector3(1, 0, 0),
                },
            })
        );

        setMaterial(room.rightFrontWall, googMaterial);
        setMaterial(room.rightBackWall, profMaterial);
        setMaterial(room.leftFrontWall, googMaterial);
        setMaterial(room.leftBackWall, googMaterial);
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
        this.add(new OfficeBossLights());

        // Platform
        const opacityConfig = room.options.opacityConfig;
        const platformLeft1 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [-40, 10, -15],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                directional: false,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
        });
        // Avoid with render order being reset after intersection
        platformLeft1.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformLeft1);

        const platformLeft2 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [-20, 20, -30],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
        });
        platformLeft2.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformLeft2);

        const platformLeft3 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [20, 20, -30],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        platformLeft3.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformLeft3);

        const platformRight1 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [-40, 10, 15],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        platformRight1.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformRight1);

        const platformRight2 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [-20, 20, 30],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        platformRight2.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformRight2);

        const platformRight3 = new Wall({
            name: 'platform',
            size: [10, WALL_THICKNESS, 10],
            position: [20, 20, 30],
            direction: [0, 1, 0],
            color: COLORS.WHITE,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        platformRight3.renderOrder = RENDER_ORDER_LAST - 1;
        room.add(platformRight3);

        await super.load();
    }
}

export default OfficeBoss;
