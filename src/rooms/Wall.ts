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

import {
    WALL_THICKNESS,
    WALL_PHYSICS_MATERIAL,
    makeDynamic,
    DynamicOpacityConfig,
    WORLD,
} from '../globals';

type WallOptions = {
    name: string;
    size: [number, number, number];
    position: [number, number, number];
    direction: [number, number, number];
    color: ColorRepresentation;
    opacityConfig: DynamicOpacityConfig;
};

export type { WallOptions };

class Wall extends Group {
    static readonly defaultOptions: WallOptions = {
        name: 'wall',
        size: [10, WALL_THICKNESS, 10],
        position: [0, 0, 0],
        direction: [0, 1, 0],
        color: 0xffffff,
        opacityConfig: {
            detection: 'directional',
            lowOpacity: 0.3,
            highOpacity: 1,
        },
    };

    /** The options this wall was configured with */
    readonly options: WallOptions;

    body: Body;

    constructor(options: Partial<WallOptions>) {
        // Call parent Group() constructor
        super();

        this.options = { ...Wall.defaultOptions, ...options };
        const { name, size, position, direction, color, opacityConfig } =
            this.options;

        this.name = name;

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = makeDynamic(
            new MeshLambertMaterial({
                color,
            }),
            { ...opacityConfig, normal: new Vector3(...direction).normalize() }
        );

        const mesh = new Mesh(geometry, material);
        mesh.name = name;
        mesh.receiveShadow = true;
        mesh.castShadow = true;
        mesh.applyQuaternion(
            new Quaternion().setFromUnitVectors(
                new Vector3(0, 1, 0),
                new Vector3(...direction).normalize()
            )
        );

        this.add(mesh);
        this.translateOnAxis(new Vector3(...position), 1);

        // Add physics body
        this.body = new Body({
            mass: 0,
            position: new Vec3(...position),
            shape: new CannonBox(new Vec3(...size.map((n) => n / 2))),
            material: WALL_PHYSICS_MATERIAL,
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

    dispose(): void {
        WORLD.removeBody(this.body);
    }
}

export default Wall;
