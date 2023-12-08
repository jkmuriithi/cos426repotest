import { Group, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

class Room extends Group {
    constructor() {
        // Call parent Group() constructor
        super();
        this.name = 'room';

        // Load object
        const geometry = new PlaneGeometry(10, 10, 1, 1);
        geometry.rotateX(-Math.PI / 2);
        geometry.translate(0, -1, 0);
        const material = new MeshBasicMaterial({ color: 0xffffff });
        this.add(new Mesh(geometry, material));
    }

    update(): void {}
}

export default Room;
