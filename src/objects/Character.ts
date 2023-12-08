import { Body, Box as CannonBox, Vec3 } from 'cannon-es';
import {
    BoxGeometry,
    Group,
    Mesh,
    MeshToonMaterial,
    Quaternion,
    Vector3,
} from 'three';

class Character extends Group {
    body: Body;

    constructor() {
        // Call parent Group() constructor
        super();

        this.name = 'character';
        const size = [1, 3, 1];
        const position = [0, 3, 0] as const;

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = new MeshToonMaterial({ color: 0xe8beac });
        this.add(new Mesh(geometry, material));
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics
        this.body = new Body({
            mass: 10,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === ' ') {
                this.body.applyImpulse(new Vec3(0, 100, 0));
            }
        });
    }

    update(): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Character;
