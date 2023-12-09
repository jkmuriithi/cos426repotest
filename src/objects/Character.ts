import { Body, Box as CannonBox, Vec3 } from 'cannon-es';
import {
    BoxGeometry,
    ColorRepresentation,
    Group,
    Mesh,
    MeshToonMaterial,
    Quaternion,
    Vector3,
} from 'three';

class Character extends Group {
    size: [number, number, number];

    body: Body;

    constructor(
        size: [number, number, number] = [1, 1, 1],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'character'
    ) {
        // Call parent Group() constructor
        super();

        this.name = name;
        this.size = size.slice() as [number, number, number];

        // Create object
        const geometry = new BoxGeometry(...this.size);
        const material = new MeshToonMaterial({ color });
        const mesh = new Mesh(geometry, material);
        mesh.name = name;

        this.add(mesh);
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics body
        this.body = new Body({
            mass: 1,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...this.size.map((n) => n / 2))),
        });
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Character;
