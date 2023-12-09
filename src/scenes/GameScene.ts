import { Body } from 'cannon-es';
import {
    Scene,
    Material,
    Color,
    Object3D,
    Object3DEventMap,
    Raycaster,
    Mesh,
} from 'three';

import { camera, world } from '../globals';
import Floor from '../objects/Floor';
import BasicLights from '../lights/BasicLights';
import Player from '../objects/Player';

type SceneChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    body?: Body;
};

class GameScene extends Scene {
    readonly transparentOpacity = 0.35;

    // Change the type of the superclass Object3D.children property
    declare children: SceneChild[];

    private raycaster: Raycaster = new Raycaster();
    private prevTransparent: Material[] = [];

    player: Player;

    constructor() {
        // Call parent Scene() constructor
        super();

        // Set background to a nice color
        this.background = new Color(0x7ec0ee);

        // Add meshes to scene
        this.player = new Player([1, 2, 1], [0, 6, 0], 0xe8beac);
        this.add(
            this.player,
            new BasicLights(),
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

        // Make objects between the camera and the player transparent
        // TODO: Intersect player bounding box instead of player position
        const cameraPos = camera.position;
        const toPlayer = this.player.position
            .clone()
            .sub(cameraPos)
            .normalize();

        this.raycaster.set(cameraPos, toPlayer);
        const intersections = this.raycaster.intersectObjects(this.children);

        // Note: intersections will only contain meshes
        // @see - {@link https://discourse.threejs.org/t/raycast-intersect-group/14038}
        const seen = new Set<Material>();
        for (const intersection of intersections) {
            const { object } = intersection as unknown as { object: Mesh };
            if (!object.isMesh) continue;
            if (object.name === this.player.name) break;

            const material = object.material as Material;
            if (material && material.transparent) {
                seen.add(material);
                material.opacity = this.transparentOpacity;
            }
        }

        for (const material of this.prevTransparent) {
            if (!seen.has(material)) {
                material.opacity = 1;
            }
        }

        this.prevTransparent = [...seen.values()];
    }
}

export default GameScene;
