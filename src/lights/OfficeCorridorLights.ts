import { Group, HemisphereLight, SpotLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeCorridorLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        super();

        const spot1 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 3, 0.9, 2);
        spot1.position.set(1.5, 12, 3.5);
        spot1.target.position.set(1.5, -2, 3.5);
        spot1.castShadow = true;
        spot1.shadow.mapSize.width = this.shadowMapSize;
        spot1.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot1, spot1.target);

        const spot2 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 3, 0.9, 2);
        spot2.position.set(25.5, 12, 3.5);
        spot2.target.position.set(25.5, -2, 3.5);
        spot2.castShadow = true;
        spot2.shadow.mapSize.width = this.shadowMapSize;
        spot2.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot2, spot2.target);

        const spot3 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 3, 0.9, 2);
        spot3.position.set(1.5, 12, -17.5);
        spot3.target.position.set(1.5, -2, -17.5);
        spot3.castShadow = true;
        spot3.shadow.mapSize.width = this.shadowMapSize;
        spot3.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot3, spot3.target);

        const spot4 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 3, 0.9, 2);
        spot4.position.set(25.5, 12, -17.5);
        spot4.target.position.set(25.5, -2, -17.5);
        spot4.castShadow = true;
        spot4.shadow.mapSize.width = this.shadowMapSize;
        spot4.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot4, spot4.target);

        const spotPositions = [
            [1.5, 3.5],
            [25.5, 3.5],
            [1.5, -17.5],
            [25.5, -17.5],
        ];

        for (const pos of spotPositions) {
            const spot = new SpotLight(
                COLORS.WHITE,
                150,
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
                : new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 0.85);
        hemi.position.set(-13, 12, -9);
        this.add(hemi);
    }
}

export default OfficeCorridorLights;
