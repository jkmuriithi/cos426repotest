import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeCorridorLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        super();

        const spotPositions = [
            [1.5, 3.5],
            [22.5, 3.5],
            [1.5, -17.5],
            [22.5, -17.5],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(
                COLORS.WHITE,
                250,
                0,
                Math.PI / 3,
                0.9,
                2
            );
            spot.position.set(pos[0], 12, pos[1]);
            spot.target.position.set(pos[0], -2, pos[1]);
            spot.castShadow = true;
            spot.shadow.mapSize.width = this.shadowMapSize;
            spot.shadow.mapSize.height = this.shadowMapSize;
            this.add(spot, spot.target);
        }

        const hemi =
            Math.random() > 0.8
                ? new HemisphereLight(COLORS.WHITE, COLORS.BLUEISH_WHITE, 0.5)
                : new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.8);
        hemi.position.set(-13, 12, -9);
        this.add(hemi);
    }
}

export default OfficeCorridorLights;
