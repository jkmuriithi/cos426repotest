import { Body, Box as CannonBox, Vec3 } from 'cannon-es';
import {
    Group,
    Mesh,
    MeshBasicMaterial,
    Vector3,
    Quaternion,
    BoxGeometry,
} from 'three';

class Room extends Group {
    body: Body;
    constructor() {
        // Call parent Group() constructor
        super();
        this.name = 'room';
        const size = [10, 0.1, 10];
        const position = [0, -1, 0] as const;

        // Load object
        const geometry = new BoxGeometry(...size);
        const material = new MeshBasicMaterial({ color: 0xe8e8e8 });
        this.add(new Mesh(geometry, material));
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics
        this.body = new Body({
            mass: 0,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
        });
        console.log(this.position);
        console.log(this.body.position);
    }

    update(): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Room;
