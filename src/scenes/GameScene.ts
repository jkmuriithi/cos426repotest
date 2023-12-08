import { Body } from 'cannon-es';
import { Scene, Color, Object3D, Object3DEventMap } from 'three';

import Character from '../objects/Character';
import Room from '../objects/Room';
import BasicLights from '../lights/BasicLights';
import { world } from '../globals';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: () => void;
    body?: Body;
};

class GameScene extends Scene {
    children: SceneChild[];

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        this.children = [new Room(), new Character(), new BasicLights()];

        // Add meshes to scene
        this.add(...this.children);
        for (const child of this.children) {
            child.body && world.addBody(child.body);
        }
    }

    update(): void {
        for (const obj of this.children) {
            obj.update && obj.update();
        }
    }
}

export default GameScene;
