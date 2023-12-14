import { Quaternion as CannonQuat } from 'cannon-es';
import {
    BoxGeometry,
    BufferGeometry,
    ColorRepresentation,
    Line,
    Mesh,
    MeshPhongMaterial,
    Vector3,
} from 'three';

import {
    CHARACTER_PHYSICS_MATERIAL,
    COLORS,
    DRAW_CHARACTER_DIRECTION_LINE,
    FLOAT_EPS,
    PROJECTILE_QUEUE,
    UP_AXIS_THREE,
} from '../globals';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';
import { boundingSphereOf } from '../utils';

type CharacterOptions = PhysicsObjectOptions & {
    color: ColorRepresentation;
    front: [number, number, number];
    health: number;
    size: [number, number, number];
};

export type { CharacterOptions };

class Character extends PhysicsObject {
    static readonly defaultOptions: CharacterOptions = {
        ...PhysicsObject.defaultOptions,
        name: 'character',
        color: COLORS.WHITE,
        front: [1, 0, 0],
        health: 100,
        size: [1, 1, 1],
        collisionMaterial: CHARACTER_PHYSICS_MATERIAL,
        cloneInputObject: false,
    };

    /** Limits projectile fire rate to once per frame */
    private firedProjectile: boolean = false;

    /** Unit vector pointing out of the front of the character. */
    readonly front: Vector3;
    readonly options: CharacterOptions;

    health: number;

    constructor(options: Partial<CharacterOptions>) {
        const opts = { ...Character.defaultOptions, ...options };
        const { color, front, health, size } = opts;

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = new MeshPhongMaterial({ color, shininess: 100 });
        const mesh = new Mesh(geometry, material);
        mesh.receiveShadow = true;
        mesh.castShadow = true;

        super(mesh, opts);
        this.options = opts;
        this.front = new Vector3(...front);
        this.health = health;

        // (For debugging) draw line facing forwards
        const sphere = boundingSphereOf(this);
        if (DRAW_CHARACTER_DIRECTION_LINE) {
            this.add(
                new Line(
                    new BufferGeometry().setFromPoints([
                        new Vector3(),
                        this.front.clone().setLength(sphere.radius * 1.05),
                    ])
                )
            );
        }
    }

    update(dt: number) {
        this.firedProjectile = false;
        super.update(dt);
    }

    reset() {
        super.reset();
        this.health = this.options.health;
    }

    /**
     * Takes in a normalized vector describing the direction which a character
     * should face.
     */
    turnToFace(direction: Vector3) {
        if (direction.angleTo(this.front.clone().negate()) < FLOAT_EPS) {
            // Prevent character flipping upside down when turning backwards by
            // manually rotating them horizontally
            this.quaternion.copy(this.initQuaternion);
            this.rotateOnAxis(UP_AXIS_THREE, Math.PI);
        } else {
            this.quaternion.setFromUnitVectors(this.front, direction);
        }
        this.body.quaternion.copy(this.quaternion as unknown as CannonQuat);
    }

    fireProjectile() {
        if (!this.firedProjectile) {
            PROJECTILE_QUEUE.push(this);
        }
    }

    // TODO: Do some animation
    takeDamage(damage: number) {
        this.health -= damage;
    }
}

export default Character;
