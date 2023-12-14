import {
    Shape,
    Material,
    Body,
    Vec3,
    Quaternion as CannonQuat,
} from 'cannon-es';
import { Group, Object3D, Vector3, Quaternion } from 'three';

import {
    UP_AXIS,
    UP_AXIS_THREE,
    WALL_PHYSICS_MATERIAL,
    WORLD,
} from './globals';
import { createBox } from './collision';
import { meshesOf } from './utils';

type PhysicsObjectOptions = {
    name: string;
    scale: number;
    position: [number, number, number];
    direction: [number, number, number];
    castShadow: boolean;
    receiveShadow: boolean;
    mass: number;
    colllisionShape?: Shape;
    collisionMaterial: Material;
    cloneInputObject?: boolean;
};

export type { PhysicsObjectOptions };

/** Currently uses the input mesh's bounding box for collision. */
class PhysicsObject extends Group {
    static readonly defaultOptions: PhysicsObjectOptions = {
        name: 'physicsObject',
        scale: 1,
        position: [0, 0, 0],
        direction: [...UP_AXIS],
        castShadow: true,
        receiveShadow: true,
        mass: 1,
        colllisionShape: undefined,
        collisionMaterial: WALL_PHYSICS_MATERIAL,
        cloneInputObject: true,
    };

    /** The options that this object was configured with. */
    readonly options: PhysicsObjectOptions;
    /** The initial position of this object. */
    readonly initPosition: Vector3;
    /** The initial quaterniion of this object. */
    readonly initQuaternion: Quaternion;

    body: Body;

    constructor(input: Object3D, options?: Partial<PhysicsObjectOptions>) {
        super();

        this.options = { ...PhysicsObject.defaultOptions, ...options };
        const {
            name,
            scale,
            position,
            direction,
            castShadow,
            receiveShadow,
            mass,
            colllisionShape,
            collisionMaterial,
            cloneInputObject,
        } = this.options;

        this.name = name;

        const object = cloneInputObject ? input.clone() : input;
        this.add(object);

        this.scale.set(scale, scale, scale);
        this.translateOnAxis(new Vector3(...position), 1);
        this.applyQuaternion(
            new Quaternion().setFromUnitVectors(
                UP_AXIS_THREE,
                new Vector3(...direction).normalize()
            )
        );
        meshesOf(this).forEach((mesh) => {
            mesh.castShadow = castShadow;
            mesh.receiveShadow = receiveShadow;
        });
        this.initPosition = this.position.clone();
        this.initQuaternion = this.quaternion.clone();

        const shape = colllisionShape || createBox(object, scale);
        this.body = new Body({
            mass,
            shape,
            material: collisionMaterial,
        });
        this.body.position.copy(this.position as unknown as Vec3);
        this.body.quaternion.copy(this.quaternion as unknown as CannonQuat);
    }

    setPosition(position: Vector3) {
        this.position.copy(position);
        this.body.position.copy(position as unknown as Vec3);
    }

    setQuaternion(quaternion: Quaternion) {
        this.quaternion.copy(quaternion);
        this.body.quaternion.copy(quaternion as unknown as CannonQuat);
    }

    reset(): void {
        this.position.copy(this.initPosition);
        this.quaternion.copy(this.initQuaternion);

        this.body.position.copy(this.initPosition as unknown as Vec3);
        this.body.quaternion.copy(this.initQuaternion as unknown as CannonQuat);

        this.body.velocity.setZero();
        this.body.angularVelocity.setZero();
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }

    dispose(): void {
        WORLD.removeBody(this.body);
    }
}

export default PhysicsObject;
