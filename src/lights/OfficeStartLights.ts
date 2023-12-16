import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeStartLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spotPositions = [
            [10, 11.25],
            [-10, 11.25],
            [10, -11.25],
            [-10, -11.25],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(
                COLORS.WHITE,
                500,
                0,
                Math.PI / 3,
                0.9,
                2
            );
            spot.position.set(pos[0], 20, pos[1]);
            spot.target.position.set(pos[0], 0, pos[1]);
            spot.castShadow = true;
            spot.shadow.mapSize.width = this.shadowMapSize;
            spot.shadow.mapSize.height = this.shadowMapSize;
            this.add(spot, spot.target);
        }

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.8);
        hemi.position.set(-10, 10, 0);
        this.add(hemi);
    }
}

export default OfficeStartLights;
