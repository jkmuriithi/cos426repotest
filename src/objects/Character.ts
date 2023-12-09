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
    Group,
    Line,
    Mesh,
    MeshToonMaterial,
    Quaternion,
    Vector3,
} from 'three';

class Character extends Group {
    readonly size: Vector3;
    readonly initPosition: Vector3;
    readonly initQuaternion: Quaternion;
    /** Unit vector pointing out of the front of the character. */
    readonly front = new Vector3(1, 0, 0);
    readonly upAxis = new Vector3(0, 1, 0);
    readonly upAxisCannon = new Vec3().copy(this.upAxis as unknown as Vec3);

    body: Body;
    facing = this.front.clone();

    constructor(
        size: [number, number, number] = [1, 1, 1],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'character'
    ) {
        // Call parent Group() constructor
        super();

        this.name = name;
        this.size = new Vector3(...size);
        this.initPosition = new Vector3(...position);

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = new MeshToonMaterial({ color });
        const mesh = new Mesh(geometry, material);
        mesh.name = name;
        this.add(mesh);

        // (For debugging) draw line facing forwards
        // TODO: remove this
        this.add(
            new Line(
                new BufferGeometry().setFromPoints([new Vector3(), this.front])
            )
        );
        this.translateOnAxis(new Vector3(...position), 1);
        this.initQuaternion = this.quaternion.clone();

        // Add physics body
        this.body = new Body({
            mass: 1,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
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
        this.quaternion.setFromUnitVectors(this.facing, direction);
        this.body.quaternion.setFromVectors(
            new Vec3().copy(this.facing as unknown as Vec3),
            new Vec3().copy(direction as unknown as Vec3)
        );
    }

    reset(): void {
        this.position.copy(this.initPosition);
        this.body.position.copy(this.initPosition as unknown as Vec3);
        this.quaternion.copy(this.initQuaternion);
        this.body.quaternion.copy(this.initQuaternion as unknown as CannonQuat);
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Character;
