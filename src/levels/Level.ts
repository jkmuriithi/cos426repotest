import { Body, Vec3 } from 'cannon-es';
import {
    Scene,
    Object3D,
    Object3DEventMap,
    Vector3,
    Mesh,
    Raycaster,
    BoxGeometry,
    MeshPhongMaterial,
} from 'three';

import {
    ORBIT_CONTROLS_ENABLED,
    CAMERA,
    INIT_CAMERA_POSITION,
    WORLD,
    PROJECTILE_QUEUE,
} from '../globals';
import { dfsTraverse, dfsFind } from '../utils';
import { DynamicOpacityMaterial } from '../opacity';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

import type Player from '../characters/Player';
import type Enemy from '../characters/Enemy';
import type Character from '../characters/Character';

type LevelChild = Object3D<Object3DEventMap> & {
    update?: (dt: number) => void;
    dispose?: () => void;
    reset?: () => void;
    body?: Body;
};

type ProjectileConfig = {
    /** The object launched as a projectile. */
    object: Object3D;
    /** The magnitude of the impluse applied to the projectile. */
    speed: number;
    /** Configuration params for the projectile PhysicsObject. */
    options?: Partial<Omit<PhysicsObjectOptions, 'position' | 'direction'>>;
};

class Level extends Scene {
    private raycaster: Raycaster = new Raycaster();
    private prevTransparent: DynamicOpacityMaterial[] = [];
    private createdProjectiles: PhysicsObject[] = [];

    // Change the type of the superclass Object3D.children property
    declare children: LevelChild[];
    initCameraPosition = INIT_CAMERA_POSITION;
    projectileConfig: ProjectileConfig = {
        object: new Mesh(
            new BoxGeometry(0.5, 0.5, 0.5),
            new MeshPhongMaterial({ color: 0x00ff00 })
        ),
        speed: 30,
    };
    player?: Player;
    enemies: Enemy[] = [];

    /**
     * Subclasses should override this method to add objects to the level,
     * and then call "await super.load()".
     */
    async load() {
        // Adjust camera
        CAMERA.position.copy(this.initCameraPosition);
        this.player && CAMERA.lookAt(this.player.position);

        // Add physics objects to sim
        dfsTraverse(this, (child: Object3D | PhysicsObject) => {
            if (child instanceof PhysicsObject) {
                WORLD.addBody(child.body);
            }
        });
    }

    update(dt: number): void {
        for (const child of this.children) {
            child.update && child.update(dt);
        }

        if (this.player) {
            for (const enemy of this.enemies) {
                enemy.setPlayerPosition(this.player.position);
            }
        }

        if (!ORBIT_CONTROLS_ENABLED) {
            this.moveCameraWithPlayer();
        }

        this.handleMaterialTransparency();
        this.handleProjectiles();
    }

    reset() {
        while (this.createdProjectiles.length > 0) {
            const proj = this.createdProjectiles.pop() as PhysicsObject;
            this.remove(proj);
        }

        dfsTraverse(this, (child: Object3D | PhysicsObject) => {
            if (child instanceof PhysicsObject) {
                child.reset();
            }
        });
    }

    dispose() {
        dfsTraverse(this, (child) => {
            const c = child as LevelChild;
            c.dispose && c.dispose();
        });
    }

    private moveCameraWithPlayer() {
        if (!this.player) return;

        const cameraDisplacement = new Vector3().subVectors(
            this.player.position,
            this.player.initPosition
        );
        cameraDisplacement.y = 0;

        CAMERA.position.addVectors(this.initCameraPosition, cameraDisplacement);
        CAMERA.lookAt(
            this.player.position
                .clone()
                .add(new Vector3(0, -this.player.position.y, 0))
        );
    }

    /** Make objects between the camera and the player transparent */
    // FIXME: Doesn't handle dynamic materials if a mesh uses an array of
    // different materials
    private handleMaterialTransparency() {
        if (!this.player) return;

        const cameraDir = this.player.position
            .clone()
            .sub(CAMERA.position)
            .normalize();
        const playerDistSq = cameraDir.lengthSq();
        const currTransparent = new Set<DynamicOpacityMaterial>();

        // Method 1: Checking normal direction
        const meshes = dfsFind(this, (c) => (c as Mesh).isMesh) as Mesh[];
        meshes.forEach((mesh) => {
            const material = mesh.material as DynamicOpacityMaterial;
            if (
                material.hasDynamicOpacity &&
                material.detection === 'directional'
            ) {
                const dist = mesh.position
                    .clone()
                    .projectOnVector(cameraDir)
                    .lengthSq();
                if (dist <= playerDistSq) {
                    const normal = material.normal as Vector3;
                    if (material.transparent && cameraDir.dot(normal) > 0) {
                        currTransparent.add(material);
                        material.opacity = material.lowOpacity;
                    }
                }
            }
        });

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

    // TODO: Limit to one projectile per frome?
    private handleProjectiles() {
        // Create projectiles in the order they were fired
        PROJECTILE_QUEUE.reverse();
        while (PROJECTILE_QUEUE.length > 0) {
            const sender = PROJECTILE_QUEUE.pop() as Character;
            const dir = sender.front
                .clone()
                .applyQuaternion(sender.quaternion)
                .normalize();

            const proj = new PhysicsObject(this.projectileConfig.object, {
                ...this.projectileConfig.options,
                position: sender.position.clone().add(dir).toArray(),
                direction: dir.clone().toArray(),
            });

            this.add(proj);
            WORLD.addBody(proj.body);
            this.createdProjectiles.push(proj);

            proj.body.applyImpulse(
                new Vec3().copy(
                    dir.multiplyScalar(
                        this.projectileConfig.speed
                    ) as unknown as Vec3
                )
            );
        }
    }
}

export default Level;
