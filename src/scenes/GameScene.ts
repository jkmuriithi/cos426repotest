import { Body } from 'cannon-es';
import { Scene, Color, Object3D, Object3DEventMap } from 'three';

import { world } from '../app';
import Floor from '../objects/Floor';
import BasicLights from '../lights/BasicLights';
import Player from '../objects/Player';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    body?: Body;
};

class GameScene extends Scene {
    declare children: SceneChild[];

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        // Add meshes to scene
        this.add(
            new BasicLights(),
            new Player([1, 2, 1], [0, 6, 0], 0xe8beac),
            new Floor([10, 0.1, 10], [0, -1, 0], 0xe8e8e8),
            new Floor([4, 0.1, 4], [0, 1.5, 0], 0xdddddd)
        );

        for (const child of this.children) {
            child.body && world.addBody(child.body);
        }
    }

    update(dt: number): void {
        for (const child of this.children) {
            child.update && child.update(dt);
        }
    }
}

export default GameScene;
