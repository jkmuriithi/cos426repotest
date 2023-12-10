import { Body } from 'cannon-es';
import {
    Scene,
    Material,
    Color,
    Object3D,
    Object3DEventMap,
    Vector3,
} from 'three';

import { DynamicOpacityMaterial, camera, world } from '../globals';
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

    private prevTransparent: Material[] = [];

    // Change the type of the superclass Object3D.children property
    declare children: SceneChild[];
    player: Player;

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        // Add meshes to scene
        this.player = new Player([1, 2, 1], [0, 2, 0], 0xe8beac);
        this.add(
            this.player,
            new BasicLights(),
            new Room([15, 10, 5], [0, 0, 0], 0xffffff)
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

        // Make objects between the camera and the player transparent
        const cameraDir = this.player.position
            .clone()
            .sub(camera.position)
            .normalize();

        const dfs = [...this.children];
        const visited = new Set<Object3D>();
        const currTransparent = new Set<Material>();
        while (dfs.length > 0) {
            const child = dfs.pop() as DynamicOpacityMaterial;
            if (visited.has(child)) continue;

            visited.add(child);
            dfs.push(...child.children);
            if (child.isMesh && child.normal && child.material) {
                const normal = child.normal;
                const material = child.material as Material;

                if (material.transparent && cameraDir.dot(normal) > 0) {
                    material.opacity =
                        child.name === 'ceiling' ? 0 : this.transparentOpacity;
                    currTransparent.add(material);
                }
            }
        }

        for (const material of this.prevTransparent) {
            if (!currTransparent.has(material)) {
                material.opacity = 1;
            }
        }

        this.prevTransparent = [...currTransparent.values()];
    }
}

export default GameScene;
