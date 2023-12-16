import {
    Mesh,
    Vector3,
    BoxGeometry,
    ColorRepresentation,
    MeshPhongMaterial,
} from 'three';

import { RENDER_ORDER_FIRST, UP_AXIS_THREE, WALL_THICKNESS } from '../globals';
import PhysicsObject, { PhysicsObjectOptions } from '../PhysicsObject';

type WallOptions = PhysicsObjectOptions & {
    size: [number, number, number];
    color: ColorRepresentation;
};

export type { WallOptions };

class Wall extends PhysicsObject {
    static readonly defaultOptions: WallOptions = {
        ...PhysicsObject.defaultOptions,
        name: 'wall',
        size: [10, WALL_THICKNESS, 10],
        color: 0xffffff,
        opacityConfig: {
            directional: true,
            lowOpacity: 0.3,
            highOpacity: 1,
            normal: UP_AXIS_THREE,
        },
        mass: 0,
        castShadow: false,
        cloneInputObject: false,
    };

    options: WallOptions;

    constructor(options?: Partial<WallOptions>) {
        const opts = { ...Wall.defaultOptions, ...options };
        const { name, size, direction, color, opacityConfig } = opts;

        // Create object
        const geometry = new BoxGeometry(...size);
        const material = new MeshPhongMaterial({ color });
        const mesh = new Mesh(geometry, material);
        mesh.name = name;

        if (opacityConfig) {
            super(mesh, {
                ...opts,
                opacityConfig: {
                    ...opacityConfig,
                    normal: new Vector3(...direction).normalize(),
                },
            });
            this.options = {
                ...opts,
                opacityConfig: {
                    ...opacityConfig,
                    normal: new Vector3(...direction).normalize(),
                },
            };
        } else {
            super(mesh, opts);
            this.options = opts;
        }

        this.renderOrder = RENDER_ORDER_FIRST;
    }
}

export default Wall;
