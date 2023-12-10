import {
    Group,
    SpotLight,
    // AmbientLight,
    HemisphereLight,
    // DirectionalLight,
} from 'three';

class BasicLights extends Group {
    shadowMapSize = 2048;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spot1 = new SpotLight(0xffffff, 100, 0, Math.PI / 4, 1, 2);
        spot1.position.set(0, 10, -5);
        spot1.target.position.set(10, 0, -5);
        spot1.castShadow = true;
        spot1.shadow.mapSize.width = this.shadowMapSize;
        spot1.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot1, spot1.target);

        const spot2 = new SpotLight(0xffffff, 100, 0, Math.PI / 4, 1, 2);
        spot2.position.set(20, 10, -5);
        spot2.target.position.set(10, 0, -5);
        spot2.castShadow = true;
        spot2.shadow.mapSize.width = this.shadowMapSize;
        spot2.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot2, spot2.target);

        const hemi = new HemisphereLight(0xffffff, 0x080808, 0.8);
        hemi.position.set(10, 20, -5);
        this.add(hemi);
    }
}

export default BasicLights;
