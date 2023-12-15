import {
    Color,
    LinearFilter,
    MeshPhongMaterial,
    NearestFilter,
    Vector3,
    Vector2,
} from 'three';

import Level from './Level';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS } from '../globals';
import { setMaterial } from '../utils';
import Room from '../rooms/Room';
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

import { makeDynamic } from '../opacity';

class OfficeBoss extends Level {
    initCameraPosition = new Vector3(-100, 10, 0);

    async load() {
        // Load models from files
        const plane = await loadModelFromGLTF(PLANE, true);

        // Load textures from files
        const player_textures = await loadTexturesFromImages([
            PLAYER_PX,
            PLAYER_NX,
            PLAYER_PY,
            PLAYER_NY,
            PLAYER_PZ,
            PLAYER_NZ,
        ]);
        const boss_textures = await loadTexturesFromImages([
            BOSS_PX,
            BOSS_NX,
            BOSS_PY,
            BOSS_NY,
            BOSS_PZ,
            BOSS_NZ,
        ]);
        player_textures.map((te) => (te.magFilter = NearestFilter));
        boss_textures.map((te) => (te.magFilter = NearestFilter));
        const ceil = await loadTexturesFromImages([CEILING]);
        const carp = await loadTexturesFromImages([CARPET]);
        const fink = await loadTexturesFromImages([FINKELSTEIN]);

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

        // Characters
        this.player = new Player({
            size: [1.5, 3, 1.5],
            position: [-10, 5, 0],
            color: COLORS.PLAYER,
            projectileConfig,
        });
        this.player.jumpVelocity = 7;

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

        for (let i = 0; i < 200; i += 25) {
            this.enemies.push(
                new MeleeEnemy({
                    size: [4, 8, 4],
                    position: [30, 8, -75 + i],
                    color: COLORS.RED,
                })
            );
            this.enemies.push(
                new RangedEnemy({
                    size: [8, 16, 8],
                    position: [40, 8, -70 + i],
                    color: COLORS.BLACK,
                    projectileConfig,
                })
            );
        }
        // add boss
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
            }
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
            size: [500, 120, 500],
            position: [0, 0, 0],
            color: COLORS.WHITE,
        });

        const opacityConfig = room.options.opacityConfig;

        fink[0].center = new Vector2(0.5, 0.5);
        fink[0].rotation = -Math.PI / 2;

        setMaterial(
            room.rightFrontWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: fink[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, -1, 0),
                }
            )
        );
        setMaterial(
            room.rightBackWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: fink[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, -1, 0),
                }
            )
        );
        setMaterial(
            room.leftFrontWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: fink[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, -1, 0),
                }
            )
        );
        setMaterial(
            room.leftBackWall,
            makeDynamic(
                new MeshPhongMaterial({
                    color: COLORS.WHITE,
                    map: fink[0],
                }),
                {
                    ...opacityConfig,
                    lowOpacity: 0.1,
                    normal: new Vector3(0, -1, 0),
                }
            )
        );
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
                    normal: new Vector3(1, 0, 0),
                }
            )
        );
        this.add(room);
        this.add(new OfficeBossLights());

        await super.load();
    }
}

export default OfficeBoss;
