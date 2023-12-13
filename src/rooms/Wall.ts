import {
    Mesh,
    Vector3,
    BoxGeometry,
    ColorRepresentation,
    MeshLambertMaterial,
} from 'three';

import { WALL_THICKNESS } from '../globals';
import { makeDynamic, DynamicOpacityConfig } from '../opacity';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

type WallOptions = PhysicsObjectOptions & {
    size: [number, number, number];
    color: ColorRepresentation;
    opacityConfig: DynamicOpacityConfig;
};

export type { WallOptions };

class Wall extends PhysicsObject {
    static readonly defaultOptions: WallOptions = {
        ...PhysicsObject.defaultOptions,
        name: 'wall',
        size: [10, WALL_THICKNESS, 10],
        color: 0xffffff,
        opacityConfig: {
            detection: 'directional',
            lowOpacity: 0.3,
            highOpacity: 1,
        },
        mass: 0,
        cloneInputObject: false,
    };

    readonly options: WallOptions;

    constructor(options?: Partial<WallOptions>) {
        const opts = { ...Wall.defaultOptions, ...options };
        const { name, size, direction, color, opacityConfig } = opts;

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

        super(mesh, opts);
        this.options = opts;
    }
}

export default Wall;
