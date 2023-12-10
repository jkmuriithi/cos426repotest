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
import { EPS, world_material, DynamicOpacityMaterial } from '../globals';

class Wall extends Group {
    readonly size: [number, number, number];

    body: Body;

    constructor(
        size: [number, number, number] = [10, EPS, 10],
        position: [number, number, number] = [0, 0, 0],
        direction: [number, number, number] = [0, 1, 0],
        dynamic_opacity: number = 0.3,
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

        const mesh = new Mesh(
            geometry,
            material
        ) as unknown as DynamicOpacityMaterial;
        mesh.name = name;
        mesh.applyQuaternion(
            new Quaternion().setFromUnitVectors(
                new Vector3(0, 1, 0),
                new Vector3(...direction).normalize()
            )
        );
        mesh.normal = new Vector3(...direction);

        this.add(mesh);
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics body
        this.body = new Body({
            mass: 0,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
            material: world_material,
        });
        this.body.quaternion.setFromVectors(
            new Vec3(0, 1, 0),
            new Vec3(...direction)
        );
    }

    update(_: number): void {
        this.position.copy(this.body.position as unknown as Vector3);
        this.quaternion.copy(this.body.quaternion as unknown as Quaternion);
    }
}

export default Wall;
