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
    body: Body;
    size: [number, number, number];

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
        this.add(new Mesh(geometry, material));
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics
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
