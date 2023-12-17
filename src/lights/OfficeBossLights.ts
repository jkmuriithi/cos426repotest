import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeBossLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spotPositions = [
            [-40, -15],
            [20, -30],
            [-40, 15],
            [20, 30],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(COLORS.WHITE, 1000, 0, 0.5, 0.8, 2);
            spot.position.set(pos[0], 50, pos[1]);
            spot.target.position.set(pos[0], 0, pos[1]);
            spot.castShadow = true;
            spot.shadow.mapSize.width = this.shadowMapSize;
            spot.shadow.mapSize.height = this.shadowMapSize;
            this.add(spot, spot.target);
        }
        const bossSpot = new SpotLight(COLORS.WHITE, 7000, 0, 0.7, 0.9, 2);
        bossSpot.position.set(0, 100, 0);
        bossSpot.target.position.set(20, 0, 0);
        bossSpot.castShadow = true;
        bossSpot.shadow.mapSize.width = this.shadowMapSize / 2;
        bossSpot.shadow.mapSize.height = this.shadowMapSize / 2;
        this.add(bossSpot, bossSpot.target);

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.4);
        hemi.position.set(0, 120, 0);
        this.add(hemi);
    }
}

export default OfficeBossLights;
