import { Color, LinearFilter, MeshPhongMaterial, NearestFilter, Vector3 } from 'three';

import Level from './Level';
import PhysicsObject from '../PhysicsObject';
import { loadModelFromGLTF, loadTexturesFromImages } from '../loaders';
import { COLORS, UP_AXIS_THREE, WALL_THICKNESS } from '../globals';
import { meshesOf, setMaterial } from '../utils';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';
import Player from '../characters/Player';
import MeleeEnemy from '../characters/MeleeEnemy';
import ParkourLights from '../lights/ParkourLights';

import NUNCHUCKS from '@models/nunchucks.glb?url';
import SAUCER from '@models/flyingsaucer.glb?url';
import DOOR from '@models/door.glb?url';
import PLANE from '@models/paperplane.glb?url';

import PLAYER_PX from '@textures/player_px.jpg';
import PLAYER_NX from '@textures/player_nx.jpg';
import PLAYER_PY from '@textures/player_py.jpg';
import PLAYER_NY from '@textures/player_ny.jpg';
import PLAYER_PZ from '@textures/player_pz.jpg';
import PLAYER_NZ from '@textures/player_nz.jpg';
import KOOL_AID_MAN from '@textures/BEAM.jpg';

class Parkour extends Level {
    initCameraPosition = new Vector3(-10, 10, 10);

    async load() {
        // Load models from files
        const chucks = await loadModelFromGLTF(NUNCHUCKS);
        const saucer = await loadModelFromGLTF(SAUCER);
        const door = await loadModelFromGLTF(DOOR, true);
        const plane = await loadModelFromGLTF(PLANE, true);
        door.rotateOnAxis(UP_AXIS_THREE, Math.PI / 2);

        // Load textures from files
        const kool = await loadTexturesFromImages([KOOL_AID_MAN]);
        const player_textures = await loadTexturesFromImages([
            PLAYER_PX,
            PLAYER_NX,
            PLAYER_PY,
            PLAYER_NY,
            PLAYER_PZ,
            PLAYER_NZ,
        ]);
        player_textures.map((te) => (te.magFilter = NearestFilter));

        this.background = new Color(COLORS.BLACK);

        // Characters
        this.player = new Player({
            size: [1, 2, 1],
            position: [2, 10, -5],
            color: COLORS.PLAYER,
            projectileConfig: {
                object: plane,
                speed: 1000,
                damage: 1,
                offset: 0.5,
            }
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

        this.enemies = [
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [2, 4, -5],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [4, 4, -3],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [6, 4, -1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [0, 4, 1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [2, 4, 1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [4, 2, -1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [6, 2, -3],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [0, 2, -5],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [1, 2, -5],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [3, 2, -3],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [5, 2, -1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [7, 1, 1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [1, 1, 1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [3, 1, -1],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [5, 1, -3],
                color: COLORS.RED,
            }),
            new MeleeEnemy({
                size: [1, 1, 1],
                position: [7, 1, -5],
                color: COLORS.RED,
            }),
        ];
        for (const enemy of this.enemies) {
            enemy.moveVelocity = 20;
        }
        this.add(...this.enemies);

        // Physics objects
        // Projectiles
        this.add(
            new PhysicsObject(chucks, {
                position: [10, 8, -5],
                scale: 0.000006,
            }),
            new PhysicsObject(saucer, {
                position: [12, 4, -5],
                scale: 0.01,
                mass: 0,
            }),
            new PhysicsObject(saucer, {
                position: [18, 8, -5],
                scale: 0.008,
                mass: 0,
            }),
            new PhysicsObject(saucer, {
                position: [2, 6, -5],
                scale: 0.01,
                mass: 0,
            }),
            new PhysicsObject(saucer, {
                position: [8, 10, -8],
                scale: 0.005,
                mass: 0,
            }),
            new PhysicsObject(saucer, {
                position: [15, 16, -2],
                scale: 0.005,
                mass: 0,
            }),
            new Wall({
                size: [2,  WALL_THICKNESS, 2],
                position: [22, 22, -5],
                direction: [0, 0, 1],
                color: COLORS.WHITE,
            }),
            new Wall({
                size: [2, WALL_THICKNESS, 2],
                position: [12, 28, 5],
                direction: [0, 0, 1],
                color: COLORS.WHITE,
            }),
            new Wall({
                size: [1, WALL_THICKNESS, 1],
                position: [7, 36, 0],
                direction: [0, 1, 0],
                color: COLORS.WHITE,
            }),
            new Wall({
                size: [1, WALL_THICKNESS, 1],
                position: [17, 44, 0],
                direction: [0, 1, 0],
                color: COLORS.WHITE,
            }),
        );

        // Room setup
        const room = new Room({
            size: [30, 110, 20],
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
            position: [25, 4, -10],
            scale: 7,
            mass: 0,
        });
        this.add(this.portal);

        // Add platform in the middle of the room
        const { size, position, opacityConfig, color } = room.options;
        const platform = new Wall({
            name: 'platform',
            size: [size[0] / 4, WALL_THICKNESS, size[2] / 4],
            position: [position[0], position[1] + size[1] / 4, position[2]],
            direction: [0, -1, 0],
            color,
            opacityConfig: {
                ...opacityConfig,
                characterIntersection: true,
                lowOpacity: 0.4,
            },
        });
        meshesOf(platform).forEach((mesh) => (mesh.castShadow = true));
        room.add(platform);

        this.add(room);
        this.add(new ParkourLights());

        await super.load();
    }
}

export default Parkour;
