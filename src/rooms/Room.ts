import { ColorRepresentation, Group } from 'three';

import { WALL_THICKNESS, UP_AXIS_THREE } from '../globals';
import { COLORS } from '../globals';
import { DynamicOpacityConfig } from '../opacity';
import Wall, { WallOptions } from './Wall';

type RoomOptions = {
    name: string;
    size: [number, number, number];
    position: [number, number, number];
    color: ColorRepresentation;
    opacityConfig: DynamicOpacityConfig;
};

export type { RoomOptions };

class Room extends Group {
    static readonly defaultOptions: RoomOptions = {
        name: 'room',
        size: [10, 10, 10],
        position: [0, 0, 0],
        color: COLORS.WHITE,
        opacityConfig: {
            directional: true,
            lowOpacity: 0,
            highOpacity: 1,
            normal: UP_AXIS_THREE,
        },
    };

    /** The options this room was configured with */
    readonly options: RoomOptions;

    floor: Wall;
    leftBackWall: Wall;
    rightBackWall: Wall;
    leftFrontWall: Wall;
    rightFrontWall: Wall;
    ceiling: Wall;

    constructor(options?: Partial<RoomOptions>) {
        super();

        this.options = { ...Room.defaultOptions, ...options };
        const { name, position, size, color, opacityConfig } = this.options;

        this.name = name;
        this.floor = new Wall({
            name: 'floor',
            size: [
                size[0] + WALL_THICKNESS,
                WALL_THICKNESS,
                size[2] + WALL_THICKNESS,
            ],
            position,
            direction: [0, 1, 0],
            color,
            opacityConfig,
        });

        this.leftBackWall = new Wall({
            name: 'leftBackWall',
            size: [size[0] - WALL_THICKNESS, WALL_THICKNESS, size[1]],
            position: [
                position[0],
                position[1] + size[1] / 2,
                position[2] - size[2] / 2,
            ],
            direction: [0, 0, 1],
            color,
            opacityConfig,
        });

        this.rightBackWall = new Wall({
            name: 'rightBackWall',
            size: [size[1], WALL_THICKNESS, size[2] + WALL_THICKNESS],
            position: [
                position[0] + size[0] / 2,
                position[1] + size[1] / 2,
                position[2],
            ],
            direction: [-1, 0, 0],
            color,
            opacityConfig,
        });

        this.leftFrontWall = new Wall({
            name: 'leftFrontWall',
            size: (this.leftBackWall.options as WallOptions).size.slice() as [
                number,
                number,
                number,
            ],
            position: [
                position[0],
                position[1] + size[1] / 2,
                position[2] + size[2] / 2,
            ],
            direction: [0, 0, -1],
            color,
            opacityConfig,
        });

        this.rightFrontWall = new Wall({
            name: 'rightFrontWall',
            size: (this.rightBackWall.options as WallOptions).size.slice() as [
                number,
                number,
                number,
            ],
            position: [
                position[0] - size[0] / 2,
                position[1] + size[1] / 2,
                position[2],
            ],
            direction: [1, 0, 0],
            color,
            opacityConfig,
        });

        this.ceiling = new Wall({
            name: 'ceiling',
            size: (this.floor.options as WallOptions).size.slice() as [
                number,
                number,
                number,
            ],
            position: [position[0], position[1] + size[1], position[2]],
            direction: [0, -1, 0],
            color,
            opacityConfig,
        });

        this.add(
            this.floor,
            this.leftBackWall,
            this.rightBackWall,
            this.leftFrontWall,
            this.rightFrontWall,
            this.ceiling
        );
    }
}

export default Room;
