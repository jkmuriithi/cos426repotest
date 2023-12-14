import {
    Mesh,
    Vector3,
    BoxGeometry,
    ColorRepresentation,
    MeshLambertMaterial,
} from 'three';

import { UP_AXIS_THREE, WALL_THICKNESS } from '../globals';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';
import { DynamicOpacityConfig } from '../opacity';

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
            normal: UP_AXIS_THREE,
        },
        mass: 0,
        castShadow: false,
        cloneInputObject: false,
    };

    readonly options: WallOptions;

    constructor(options?: Partial<WallOptions>) {
        const opts = { ...Wall.defaultOptions, ...options };
        const { name, size, direction, color } = opts;

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = new MeshLambertMaterial({ color });
        const mesh = new Mesh(geometry, material);
        mesh.name = name;

        super(mesh, {
            ...opts,
            opacityConfig: {
                ...opts.opacityConfig,
                normal: new Vector3(...direction),
            },
        });
        this.options = opts;
    }
}

export default Wall;
