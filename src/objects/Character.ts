import { BODY_TYPES, Body, Box as CannonBox, Vec3 } from 'cannon-es';
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
    size: [number, number, number] = [1, 3, 1];
    canJump: boolean = false;

    constructor() {
        // Call parent Group() constructor
        super();

        this.name = 'character';
        const position = [0, 3, 0] as const;

        // Create object
        const geometry = new BoxGeometry(...this.size);
        const material = new MeshToonMaterial({ color: 0xe8beac });
        this.add(new Mesh(geometry, material));
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics
        this.body = new Body({
            mass: 1,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...this.size.map((n) => n / 2))),
        });

        // Jumping controls
        this.body.addEventListener('collide', (e: { body: Body }) => {
            // console.log(e);
            if (
                e.body.type === BODY_TYPES.STATIC &&
                e.body.position.y < this.body.position.y
            ) {
                this.canJump = true;
            }
        });

        window.addEventListener('keydown', (e) => {
            if (this.canJump && e.key === ' ') {
                this.body.velocity.y += 10;
                this.canJump = false;
            }
        });
    }

    update(): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Character;
