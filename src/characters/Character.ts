import { Quaternion as CannonQuat } from 'cannon-es';
import {
    BoxGeometry,
    BufferGeometry,
    ColorRepresentation,
    Line,
    Mesh,
    MeshPhongMaterial,
    Object3D,
    Vector3,
} from 'three';
import { CSS2DObject } from 'three/examples/jsm/Addons.js';

import {
    CHARACTER_PHYSICS_MATERIAL,
    COLORS,
    DRAW_CHARACTER_DIRECTION_LINE,
    FLOAT_EPS,
    UP_AXIS_THREE,
} from '../globals';
import { boundingSphereOf, createObject2D } from '../helpers';

import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

type CharacterOptions = PhysicsObjectOptions & {
    color: ColorRepresentation;
    front: [number, number, number];
    health: number;
    hasHealthBar: boolean;
    /** Should be an HTML color. */
    healthBarColor: string;
    healthBarPosition: [number, number, number];
    size: [number, number, number];
    projectileConfig: ProjectileConfig;
};

type ProjectileConfig = {
    /** The object launched as a projectile. */
    object: Object3D;
    /** The magnitude of the impluse applied to the projectile. */
    speed: number;
    damage: number;
    /** Coefficient determining how far a projectile is from the front of a character. */
    offset?: number;
    /** Configuration params for the projectile PhysicsObject. */
    options?: Partial<Omit<PhysicsObjectOptions, 'position' | 'direction'>>;
};

export type { CharacterOptions, ProjectileConfig };

class Character extends PhysicsObject {
    static readonly defaultOptions: CharacterOptions = {
        ...PhysicsObject.defaultOptions,
        name: 'character',
        collisionMaterial: CHARACTER_PHYSICS_MATERIAL,
        cloneInputObject: false,
        color: COLORS.WHITE,
        front: [1, 0, 0],
        health: 100,
        hasHealthBar: true,
        healthBarColor: 'green',
        healthBarPosition: [0, 2, 0],
        size: [1, 1, 1],
        projectileConfig: {
            object: new Mesh(
                new BoxGeometry(0.5, 0.5, 0.5),
                new MeshPhongMaterial({ color: 0x00ff00 })
            ),
            damage: 35,
            speed: 50,
        },
    };

    private healthBar?: CSS2DObject;

    /** Unit vector pointing out of the front of the character. */
    readonly front: Vector3;
    readonly options: CharacterOptions;

    health: number;
    firedProjectile: boolean = false;

    constructor(options: Partial<CharacterOptions>) {
        const opts = { ...Character.defaultOptions, ...options };
        const {
            color,
            front,
            health,
            hasHealthBar,
            healthBarColor,
            healthBarPosition,
            size,
        } = opts;

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

        if (hasHealthBar) {
            this.healthBar = createObject2D({
                textContent: '█'.repeat(Math.floor(health / 10)),
                style: {
                    color: healthBarColor,
                    backgroundColor: healthBarColor,
                    fontFamily: 'monospace',
                    fontSize: '7px',
                },
            });
            this.healthBar.position.set(...healthBarPosition);
            this.add(this.healthBar);
        }

        if (DRAW_CHARACTER_DIRECTION_LINE) {
            const sphere = boundingSphereOf(this);
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

    dispose() {
        if (this.healthBar) this.healthBar.removeFromParent();
        super.dispose();
    }

    reset() {
        if (this.healthBar) this.add(this.healthBar);
        this.health = this.options.health;
        super.reset();
    }

    update(dt: number) {
        if (this.healthBar) {
            if (this.health > 0) {
                this.healthBar.element.textContent = '█'.repeat(
                    Math.ceil(this.health / 10)
                );
            } else {
                this.remove(this.healthBar);
            }
        }

        super.update(dt);
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
        this.firedProjectile = true;
    }

    // TODO: Do some animation
    takeDamage(damage: number) {
        this.health -= damage;
    }
}

export default Character;
