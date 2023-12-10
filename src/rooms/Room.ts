import { ColorRepresentation, Group } from 'three';
import Wall from './Wall';
import { EPS } from '../globals';

class Room extends Group {
    constructor(
        size: [number, number, number] = [10, 10, 10],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'room',
        lowOpacity: number = 0.3
    ) {
        super();

        this.name = name;
        const floor = new Wall(
            [size[0] + EPS, EPS, size[2] + EPS],
            position,
            [0, 1, 0],
            color,
            'floor',
            0
        );
        const left_back_wall = new Wall(
            [size[0] - EPS, EPS, size[1]],
            [position[0], position[1] + size[1] / 2, position[2] - size[2] / 2],
            [0, 0, 1],
            color,
            'left_back_wall',
            lowOpacity
        );
        const right_back_wall = new Wall(
            [size[1], EPS, size[2] + EPS],
            [position[0] + size[0] / 2, position[1] + size[1] / 2, position[2]],
            [-1, 0, 0],
            color,
            'right_back_wall',
            lowOpacity
        );
        const left_front_wall = new Wall(
            left_back_wall.size,
            [position[0], position[1] + size[1] / 2, position[2] + size[2] / 2],
            [0, 0, -1],
            color,
            'left_front_wall',
            lowOpacity
        );
        const right_front_wall = new Wall(
            right_back_wall.size,
            [position[0] - size[0] / 2, position[1] + size[1] / 2, position[2]],
            [1, 0, 0],
            color,
            'right_front_wall',
            lowOpacity
        );
        const ceiling = new Wall(
            floor.size,
            [position[0], position[1] + size[1], position[2]],
            [0, -1, 0],
            color,
            'ceiling',
            lowOpacity
        );

        this.add(
            floor,
            left_back_wall,
            right_back_wall,
            left_front_wall,
            right_front_wall,
            ceiling
        );
    }
}

export default Room;
