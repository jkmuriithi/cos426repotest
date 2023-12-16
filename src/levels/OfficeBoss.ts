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
} from '../helpers';
import { COLORS, WALL_THICKNESS } from '../globals';

import Level from './Level';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import OfficeBossLights from '../lights/OfficeBossLights';

// models
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
import FINKELSTEIN from '@textures/finkelstein.jpeg';
import GOOG_COLORS from '@textures/google_colors.jpeg';

class OfficeBoss extends Level {
    initCameraPosition = new Vector3(-150, 50, 0);

    async load() {
        // Load models from files
        const plane = await loadModelFromGLTF(PLANE, true);

        // Load textures from files
        const player_textures = await loadTexturesFromImages(
            [PLAYER_PX, PLAYER_NX, PLAYER_PY, PLAYER_NY, PLAYER_PZ, PLAYER_NZ],
            NearestFilter
        );
        const boss_textures = await loadTexturesFromImages(
            [BOSS_PX, BOSS_NX, BOSS_PY, BOSS_NY, BOSS_PZ, BOSS_NZ],
            NearestFilter
        );
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);
        const fink = await loadTexturesFromImages([FINKELSTEIN]);
        const google_colors = await loadTexturesFromImages([GOOG_COLORS]);

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

        // Characters
        this.player = new Player({
            size: [1.5, 3, 1.5],
            position: [-50, 5, 0],
            color: COLORS.PLAYER,
            projectileConfig,
        });
        this.player.jumpVelocity = 10;

        let materials = player_textures.map((texture) => {
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
        const boss = new RangedEnemy({
            size: [24, 48, 24],
            position: [60, 5, 0],
            color: COLORS.BLACK,
            health: 2000,
            projectileConfig: {
                object: plane, //.rotateOnAxis(new Vector3(0, 0, 1), Math.PI / 2),
                speed: 50,
                damage: 100,
                options: {
                    scale: 3e-5,
                },
            },
        });
        materials = boss_textures.map((texture) => {
            texture.generateMipmaps = false;
            texture.minFilter = LinearFilter;
            const mat = new MeshPhongMaterial({
                color: COLORS.PLAYER,
                shininess: 100,
                map: texture,
            });
            return mat;
        });
        setMaterial(boss, materials);
        this.enemies.push(boss);
        this.add(...this.enemies);

        const room = new Room({
            size: [300, 120, 200],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        });

        fink[0].center = new Vector2(0.5, 0.5);
        fink[0].rotation = -Math.PI / 2;
        const finkMaterial = new MeshPhongMaterial({
            color: COLORS.WHITE,
            map: fink[0],
        });
        const googMaterial = new MeshPhongMaterial({
            color: COLORS.WHITE,
            map: google_colors[0],
        })

        setMaterial(room.rightFrontWall, googMaterial);
        setMaterial(room.rightBackWall, finkMaterial);
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
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        meshesOf(platformLeft1).forEach((mesh) => (mesh.castShadow = true));
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
            castShadow: true,
        });
        meshesOf(platformLeft2).forEach((mesh) => (mesh.castShadow = true));
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
        meshesOf(platformLeft3).forEach((mesh) => (mesh.castShadow = true));
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
        meshesOf(platformRight1).forEach((mesh) => (mesh.castShadow = true));
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
        meshesOf(platformRight2).forEach((mesh) => (mesh.castShadow = true));
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
        meshesOf(platformRight3).forEach((mesh) => (mesh.castShadow = true));
        room.add(platformRight3);

        await super.load();
    }
}

export default OfficeBoss;
