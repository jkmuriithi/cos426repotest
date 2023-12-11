import { Body } from 'cannon-es';
import {
    Scene,
    Object3D,
    Object3DEventMap,
    Vector3,
    Mesh,
    Raycaster,
} from 'three';

import {
    DynamicOpacityMaterial,
    ORBIT_CONTROLS_ENABLED,
    CAMERA,
    INIT_CAMERA_POSITION,
    WORLD,
} from '../globals';
import Player from '../characters/Player';

type LevelChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    dispose?: () => void;
    body?: Body;
};

class Level extends Scene {
    private raycaster: Raycaster = new Raycaster();
    private prevTransparent: DynamicOpacityMaterial[] = [];

    // Change the type of the superclass Object3D.children property
    declare children: LevelChild[];
    player: Player | null = null;

    constructor() {
        // Call parent Scene() constructor
        super();
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

    addPhysics() {
        const dfs = [...this.children];
        const seen = new Set();
        while (dfs.length > 0) {
            const child = dfs.pop() as LevelChild;
            if (seen.has(child)) continue;

            seen.add(child);
            child.body && WORLD.addBody(child.body);
            dfs.push(...(child.children as LevelChild[]));
        }
    }

    dispose() {
        const dfs = [...this.children];
        const seen = new Set();
        while (dfs.length > 0) {
            const child = dfs.pop() as LevelChild;
            if (seen.has(child)) continue;

            seen.add(child);
            if (child.dispose) {
                child.dispose();
            } else {
                dfs.push(...(child.children as LevelChild[]));
            }
        }
    }

    private moveCameraWithPlayer() {
        if (!this.player) return;

        const cameraDisplacement = new Vector3().subVectors(
            this.player.position,
            this.player.initPosition
        );
        cameraDisplacement.y = 0;

        CAMERA.position.addVectors(INIT_CAMERA_POSITION, cameraDisplacement);
        CAMERA.lookAt(
            this.player.position
                .clone()
                .add(new Vector3(0, -this.player.position.y, 0))
        );
    }

    /** Make objects between the camera and the player transparent */
    private handleMaterialTransparency() {
        if (!this.player) return;

        const cameraDir = this.player.position
            .clone()
            .sub(CAMERA.position)
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
        this.raycaster.set(CAMERA.position, cameraDir);
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

export default Level;
