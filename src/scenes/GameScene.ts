import { Body } from 'cannon-es';
import {
    Scene,
    Color,
    Object3D,
    Object3DEventMap,
    Vector3,
    Mesh,
    Raycaster,
} from 'three';

import {
    DynamicOpacityMaterial,
    ORBIT_CONTROLS_ENABLED,
    WALL_THICKNESS,
    camera,
    initCameraPosition,
    world,
} from '../globals';
import BasicLights from '../lights/BasicLights';
import Player from '../characters/Player';
import Room from '../rooms/Room';
import Wall from '../rooms/Wall';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    body?: Body;
    normal?: Vector3;
};

class GameScene extends Scene {
    readonly transparentOpacity = 0.3;

    private raycaster: Raycaster = new Raycaster();
    private prevTransparent: DynamicOpacityMaterial[] = [];

    // Change the type of the superclass Object3D.children property
    declare children: SceneChild[];
    player: Player;

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x000000);

        // Add meshes to scene
        this.player = new Player([1, 2, 1], [10, 2, -5], 0xe8beac);
        const room = new Room({
            size: [30, 10, 20],
            position: [10, 0, -5],
            color: 0xffffff,
        });

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
                detection: 'playerIntersection',
            },
        });

        this.add(this.player, room, platform, new BasicLights());

        // DFS through all children
        const descendants = [...this.children];
        const seen = new Set();
        while (descendants.length > 0) {
            const child = descendants.pop() as SceneChild;
            if (seen.has(child)) continue;

            seen.add(child);
            child.body && world.addBody(child.body);
            descendants.push(...(child.children as SceneChild[]));
        }
    }

    update(dt: number): void {
        for (const child of this.children) {
            child.update && child.update(dt);
        }

        if (!ORBIT_CONTROLS_ENABLED) {
            this.moveCameraWithPlayer();
        }

        this.handleMaterialTransparency();
    }

    private moveCameraWithPlayer() {
        const cameraDisplacement = new Vector3().subVectors(
            this.player.position,
            this.player.initPosition
        );
        cameraDisplacement.y = 0;

        camera.position.addVectors(initCameraPosition, cameraDisplacement);
        camera.lookAt(
            this.player.position
                .clone()
                .add(new Vector3(0, -this.player.position.y, 0))
        );
    }

    /** Make objects between the camera and the player transparent */
    private handleMaterialTransparency() {
        const cameraDir = this.player.position
            .clone()
            .sub(camera.position)
            .normalize();

        // Method 1: Checking normal direction
        const dfs = [...this.children];
        const visited = new Set<Object3D>();
        const currTransparent = new Set<DynamicOpacityMaterial>();
        while (dfs.length > 0) {
            const child = dfs.pop() as Mesh;
            if (visited.has(child)) continue;

            visited.add(child);
            dfs.push(...child.children);
            if (child.isMesh) {
                const material = child.material as DynamicOpacityMaterial;
                if (
                    material.hasDynamicOpacity &&
                    material.detection === 'directional'
                ) {
                    const normal = material.normal as Vector3;
                    if (material.transparent && cameraDir.dot(normal) > 0) {
                        currTransparent.add(material);
                        material.opacity = material.lowOpacity;
                    }
                }
            }
        }

        // Method 2: Checking player intersection
        this.raycaster.set(camera.position, cameraDir);
        const intersections = this.raycaster.intersectObjects(this.children);
        // Note: intersections will only contain meshes
        // @see - {@link https://discourse.threejs.org/t/raycast-intersect-group/14038}
        for (const intersection of intersections) {
            const { object } = intersection as unknown as { object: Mesh };
            if (object.id === this.player.children[0].id) break;
            if (!object.isMesh) continue;

            const material = object.material as DynamicOpacityMaterial;
            if (
                material.hasDynamicOpacity &&
                material.detection === 'playerIntersection'
            ) {
                currTransparent.add(material);
                material.opacity = material.lowOpacity;
            }
        }

        for (const material of this.prevTransparent) {
            if (!currTransparent.has(material)) {
                material.opacity = material.highOpacity;
            }
        }

        this.prevTransparent = [...currTransparent.values()];
    }
}

export default GameScene;
