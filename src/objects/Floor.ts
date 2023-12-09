import { Body, Box as CannonBox, Vec3 } from 'cannon-es';
import {
    Group,
    Mesh,
    Vector3,
    Quaternion,
    BoxGeometry,
    ColorRepresentation,
    MeshLambertMaterial,
} from 'three';

class Floor extends Group {
    readonly size: [number, number, number];

    body: Body;

    constructor(
        size: [number, number, number] = [10, 0.1, 10],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'floor'
    ) {
        // Call parent Group() constructor
        super();
        this.size = size.slice() as [number, number, number];
        this.name = name;

        // Create object
        const geometry = new BoxGeometry(...size);

        const material = new MeshLambertMaterial({ color });
        material.transparent = true;
        material.opacity = 1;

        const mesh = new Mesh(geometry, material);
        mesh.name = name;

        this.add(mesh);
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics body
        this.body = new Body({
            mass: 0,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
        });
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Floor;
