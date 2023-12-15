import { Group, SpotLight, HemisphereLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class ParkourLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spot1 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        spot1.position.set(0, 100, -5);
        spot1.target.position.set(10, 0, -5);
        spot1.castShadow = true;
        spot1.shadow.mapSize.width = this.shadowMapSize;
        spot1.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot1, spot1.target);

        const spot2 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        spot2.position.set(20, 50, -5);
        spot2.target.position.set(10, 0, -5);
        spot2.castShadow = true;
        spot2.shadow.mapSize.width = this.shadowMapSize;
        spot2.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot2, spot2.target);

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.GRAY, 0.1);
        hemi.position.set(10, 20, -5);
        this.add(hemi);
    }
}

export default ParkourLights;
