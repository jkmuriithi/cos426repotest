import { BoxGeometry, Group, Mesh, MeshToonMaterial } from 'three';

class Character extends Group {
    constructor() {
        // Call parent Group() constructor
        super();

        this.name = 'character';

        // Load object
        const geometry = new BoxGeometry(1, 2, 1);
        geometry.translate(0, 4, 0);
        const material = new MeshToonMaterial({ color: 0xe8beac });
        this.add(new Mesh(geometry, material));
    }

    update(): void {}
}

export default Character;
