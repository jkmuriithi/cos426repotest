import { Body } from 'cannon-es';
import { Scene, Color, Object3D, Object3DEventMap, Vector3, Mesh } from 'three';

import {
    DynamicOpacityMaterial,
    ORBIT_CONTROLS_ENABLED,
    camera,
    initCameraPosition,
    world,
} from '../globals';
import BasicLights from '../lights/BasicLights';
import Player from '../characters/Player';
import Room from '../rooms/Room';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    body?: Body;
    normal?: Vector3;
};

class GameScene extends Scene {
    readonly transparentOpacity = 0.3;

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
        this.add(
            this.player,
            new BasicLights(),
            new Room([30, 10, 20], [10, 0, -5], 0xffffff)
        );

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

        // Make objects between the camera and the player transparent
        const cameraDir = this.player.position
            .clone()
            .sub(camera.position)
            .normalize();

        const dfs = [...this.children];
        const visited = new Set<Object3D>();
        const currTransparent = new Set<DynamicOpacityMaterial>();
        while (dfs.length > 0) {
            const child = dfs.pop() as Mesh;
            if (visited.has(child)) continue;

            visited.add(child);
            dfs.push(...child.children);
            if (
                child.isMesh &&
                (child.material as DynamicOpacityMaterial).hasDynamicOpacity
            ) {
                const material = child.material as DynamicOpacityMaterial;
                const normal = material.normal;

                if (material.transparent && cameraDir.dot(normal) > 0) {
                    material.opacity = material.lowOpacity;
                    currTransparent.add(material);
                }
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
