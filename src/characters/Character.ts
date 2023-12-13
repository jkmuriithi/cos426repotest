import { Vec3 } from 'cannon-es';
import {
    BoxGeometry,
    BufferGeometry,
    ColorRepresentation,
    Line,
    Material,
    Mesh,
    MeshPhongMaterial,
    Vector3,
} from 'three';

import {
    CHARACTER_PHYSICS_MATERIAL,
    COLORS,
    DRAW_CHARACTER_DIRECTION_LINE,
    PROJECTILE_QUEUE,
} from '../globals';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

type CharacterOptions = PhysicsObjectOptions & {
    color: ColorRepresentation;
    front: [number, number, number];
    health: number;
    material?: Material | Material[];
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

    /** Unit vector pointing out of the front of the character. */
    readonly front: Vector3;
    readonly options: CharacterOptions;

    health: number;

    constructor(options: Partial<CharacterOptions>) {
        const opts = { ...Character.defaultOptions, ...options };
        const { color, front, health, material, size } = opts;

        // Create object
        const geometry = new BoxGeometry(...size);
        let mesh;
        if (material) {
            mesh = new Mesh(geometry, material);
        } else {
            const mat = new MeshPhongMaterial({ color, shininess: 100 });
            mesh = new Mesh(geometry, mat);
        }
        mesh.receiveShadow = true;
        mesh.castShadow = true;

        super(mesh, opts);
        this.options = opts;
        this.front = new Vector3(...front);
        this.health = health;

        // (For debugging) draw line facing forwards
        if (DRAW_CHARACTER_DIRECTION_LINE) {
            this.add(
                new Line(
                    new BufferGeometry().setFromPoints([
                        new Vector3(),
                        this.front,
                    ])
                )
            );
        }
    }

    /**
     * Takes in a normalized vector describing the direction which a character
     * should face.
     */
    turnToFace(direction: Vector3) {
        this.quaternion.setFromUnitVectors(this.front, direction);
        this.body.quaternion.setFromVectors(
            new Vec3().copy(this.front as unknown as Vec3),
            new Vec3().copy(direction as unknown as Vec3)
        );
    }

    fireProjectile() {
        PROJECTILE_QUEUE.push(this);
    }
}

export default Character;
