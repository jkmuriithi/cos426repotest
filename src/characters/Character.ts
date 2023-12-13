import { Vec3 } from 'cannon-es';
import {
    BoxGeometry,
    BufferGeometry,
    ColorRepresentation,
    Line,
    Mesh,
    MeshPhongMaterial,
    TextureLoader,
    Vector3,
} from 'three';

import {
    CHARACTER_PHYSICS_MATERIAL,
    COLORS,
    DRAW_CHARACTER_DIRECTION_LINE,
} from '../globals';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

type CharacterOptions = PhysicsObjectOptions & {
    size: [number, number, number];
    color: ColorRepresentation;
    front: [number, number, number];
    textureFilenames?: string[];
};

export type { CharacterOptions };

class Character extends PhysicsObject {
    static readonly defaultOptions: CharacterOptions = {
        ...PhysicsObject.defaultOptions,
        name: 'character',
        size: [1, 1, 1],
        color: COLORS.WHITE,
        front: [1, 0, 0],
        textureFilenames: undefined,
        collisionMaterial: CHARACTER_PHYSICS_MATERIAL,
        cloneInputObject: false,
    };

    /** Unit vector pointing out of the front of the character. */
    readonly front: Vector3;
    readonly options: CharacterOptions;

    constructor(options: Partial<CharacterOptions>) {
        const opts = { ...Character.defaultOptions, ...options };
        const { size, color, front, textureFilenames } = opts;

        // Create object
        const geometry = new BoxGeometry(...size);
        let mesh;
        if (textureFilenames) {
            const loader = new TextureLoader();
            loader.setPath('src/assets/textures/');
            const materials = textureFilenames.map((filename) => {
                const mat = new MeshPhongMaterial({
                    color,
                    shininess: 100,
                    map: loader.load(filename),
                });
                return mat;
            });
            mesh = new Mesh(geometry, materials);
        } else {
            const material = new MeshPhongMaterial({ color, shininess: 100 });
            mesh = new Mesh(geometry, material);
        }
        mesh.receiveShadow = true;
        mesh.castShadow = true;

        super(mesh, opts);
        this.options = opts;
        this.front = new Vector3(...front);

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
}

export default Character;
