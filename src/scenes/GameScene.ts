import { Body } from 'cannon-es';
import { Scene, Color, Object3D, Object3DEventMap } from 'three';

import { world } from '../app';
import Room from '../objects/Room';
import BasicLights from '../lights/BasicLights';
import Player from '../objects/Player';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    body?: Body;
};

class GameScene extends Scene {
    children: SceneChild[];

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        this.children = [
            new Room(),
            new Player([1, 2, 1], [0, 5, 0], 0xe8beac),
            new BasicLights(),
        ];

        // Add meshes to scene
        this.add(...this.children);
        for (const child of this.children) {
            child.body && world.addBody(child.body);
        }
    }

    update(dt: number): void {
        for (const obj of this.children) {
            obj.update && obj.update(dt);
        }
    }
}

export default GameScene;
