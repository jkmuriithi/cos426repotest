import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeFight2Lights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spotPositions = [
            [30.5, 8.5],
            [30.5, -26.5],
            [-4.5, 8.5],
            [-4.5, -26.5],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(COLORS.WHITE, 300, 0, 0.8, 0.9, 2);
            spot.position.set(pos[0], 18, pos[1]);
            spot.target.position.set(pos[0], -2, pos[1]);
            spot.castShadow = true;
            // Try to mitigate performance dip
            spot.shadow.mapSize.width = this.shadowMapSize / 2;
            spot.shadow.mapSize.height = this.shadowMapSize / 2;
            this.add(spot, spot.target);
        }

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.55);
        hemi.position.set(13, 18, -9);
        this.add(hemi);
    }
}

export default OfficeFight2Lights;
