import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeFight1Lights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spotPositions = [
            [-10, 0],
            [35, 0],
            [32, 25],
            [30, -30],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(COLORS.WHITE, 150, 0, 1, 0.9, 2);
            spot.position.set(pos[0], 10, pos[1]);
            spot.target.position.set(pos[0], 0, pos[1]);
            spot.castShadow = true;
            spot.shadow.mapSize.width = this.shadowMapSize;
            spot.shadow.mapSize.height = this.shadowMapSize;
            this.add(spot, spot.target);
        }

        const hemi =
            Math.random() > 0.8
                ? new HemisphereLight(COLORS.WHITE, COLORS.BLUEISH_WHITE, 0.5)
                : new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.8);
        hemi.position.set(0, 10, 0);
        this.add(hemi);
    }
}

export default OfficeFight1Lights;
