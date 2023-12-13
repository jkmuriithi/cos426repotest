import {
    Body,
    Box as CannonBox,
    Vec3,
    Quaternion as CannonQuat,
} from 'cannon-es';
import {
    BoxGeometry,
    BufferGeometry,
    ColorRepresentation,
    CubeTextureLoader,
    Group,
    Line,
    Mesh,
    MeshPhongMaterial,
    Quaternion,
    TextureLoader,
    Vector3,
} from 'three';
import { CHARACTER_PHYSICS_MATERIAL, COLORS, WORLD } from '../globals';

type CharacterOptions = {
    name: string;
    size: [number, number, number];
    position: [number, number, number];
    color: ColorRepresentation;
    front: [number, number, number];
};

export type { CharacterOptions };

class Character extends Group {
    static readonly defaultOptions: CharacterOptions = {
        name: 'character',
        size: [1, 1, 1],
        position: [0, 0, 0],
        color: COLORS.WHITE,
        front: [1, 0, 0],
    };

    /** Unit vector pointing out of the front of the character. */
    readonly front;
    readonly initPosition: Vector3;
    readonly initQuaternion: Quaternion;
    readonly options: CharacterOptions;
    readonly size: Vector3;

    body: Body;

    constructor(options: Partial<CharacterOptions>) {
        // Call parent Group() constructor
        super();

        this.options = { ...Character.defaultOptions, ...options };
        const { name, size, position, color, front } = this.options;

        this.name = name;
        this.size = new Vector3(...size);
        this.initPosition = new Vector3(...position);
        this.front = new Vector3(...front);

        // Create object
        const geometry = new BoxGeometry(...size);
        // placeholder textures
        const textureFilenames = [
            'BEAM.jpg',
            'BEAM.jpg',
            'BEAM.jpg',
            'BEAM.jpg',
            'BEAM.jpg',
            'BEAM.jpg',
        ];
        const loader = new TextureLoader();
        loader.setPath('src/assets/textures/');
        const materials = textureFilenames.map((textureFilename) => {
            const mat = new MeshPhongMaterial({
                color, // default color
                shininess: 100,
                map: loader.load(textureFilename),
            });
            return mat;
        });
        const mesh = new Mesh(geometry, materials);
        mesh.name = name;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        this.add(mesh);

        // (For debugging) draw line facing forwards
        // TODO: remove this
        this.add(
            new Line(
                new BufferGeometry().setFromPoints([new Vector3(), this.front])
            )
        );
        this.translateOnAxis(this.initPosition, 1);
        this.initQuaternion = this.quaternion.clone();

        // Add physics body
        this.body = new Body({
            mass: 1,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
            material: CHARACTER_PHYSICS_MATERIAL,
        });
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

    reset(): void {
        this.position.copy(this.initPosition);
        this.body.position.copy(this.initPosition as unknown as Vec3);
        this.quaternion.copy(this.initQuaternion);
        this.body.quaternion.copy(this.initQuaternion as unknown as CannonQuat);

        this.body.velocity.setZero();
        this.body.angularVelocity.setZero();
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }

    dispose() {
        WORLD.removeBody(this.body);
    }
}

export default Character;
