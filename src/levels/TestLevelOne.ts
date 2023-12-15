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
import { COLORS, UP_AXIS_THREE, WALL_THICKNESS } from '../globals';

// Game Objects
import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import RangedEnemy from '../characters/RangedEnemy';
import TestLevelOneLights from '../lights/TestLevelOneLights';

// Models
import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';
import DOOR from '@models/door.glb?url';
import PLANE from '@models/paperplane.glb?url';

// Textures
import PLAYER_PX from '@textures/player_px.jpg';
import PLAYER_NX from '@textures/player_nx.jpg';
import PLAYER_PY from '@textures/player_py.jpg';
import PLAYER_NY from '@textures/player_ny.jpg';
import PLAYER_PZ from '@textures/player_pz.jpg';
import PLAYER_NZ from '@textures/player_nz.jpg';
import KOOL from '@textures/BEAM.jpg';

class TestLevelOne extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        const chucks = await loadModelFromGLTF(NUNCHUCKS);
        const saucer = await loadModelFromGLTF(SAUCER);
        const door = await loadModelFromGLTF(DOOR, true);
        const plane = await loadModelFromGLTF(PLANE, true);

        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        meshesOf(plane).forEach(
            (mesh) => ((mesh.material as Material).side = DoubleSide)
        );

        // Load textures from files
        const kool = await loadTexturesFromImages([KOOL]);
        const player_textures = await loadTexturesFromImages(
            [PLAYER_PX, PLAYER_NX, PLAYER_PY, PLAYER_NY, PLAYER_PZ, PLAYER_NZ],
            NearestFilter
        );

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

        // Player
        this.player = new Player({
            size: [1, 2, 1],
            position: [15, 6, -5],
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
        this.enemies = [
            new MeleeEnemy({
                size: [1.5, 1, 1.5],
                position: [0, 8, -5],
                color: COLORS.RED,
            }),
            new RangedEnemy({
                size: [1, 2, 1],
                position: [12, 8, -5],
                color: COLORS.BLACK,
                health: 200,
                projectileConfig,
            }),
        ];
        this.add(...this.enemies);

        // Physics objects
        this.add(
            new PhysicsObject(chucks, {
                position: [10, 8, -5],
                scale: 0.000006,
            }),
            new PhysicsObject(saucer, {
                position: [18, 8, -5],
                scale: 0.01,
            }),
            new PhysicsObject(saucer, {
                position: [2, 8, -5],
                scale: 0.01,
                mass: 0,
            })
        );

        // Room setup
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: COLORS.WHITE,
        });
        setMaterial(
            room.leftBackWall,
            new MeshPhongMaterial({
                color: COLORS.RED,
                map: kool[0],
            })
        );
        this.portal = new PhysicsObject(door, {
            position: [24, 4, -10],
            scale: 7,
            mass: 0,
        });
        this.add(this.portal);

        // Platform
        const { size, position, opacityConfig, color } = room.options;
        const platform = new Wall({
            name: 'platform',
            size: [size[0] / 4, WALL_THICKNESS, size[2] / 4],
            position: [position[0], position[1] + size[1] / 4, position[2]],
            direction: [0, 1, 0],
            color,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
            castShadow: true,
        });
        meshesOf(platform).forEach((mesh) => (mesh.castShadow = true));
        room.add(platform);

        this.add(room);
        this.add(new TestLevelOneLights());

        await super.load();
    }
}

export default TestLevelOne;
