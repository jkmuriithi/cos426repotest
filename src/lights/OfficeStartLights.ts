import { Group, SpotLight, HemisphereLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeStartLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        // for (let i = 0; i < 3; i++) {
        //     const spot1 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        //     spot1.position.set(-20, 20, -10 + i*10);
        //     spot1.target.position.set(-1, 10, 10);
        //     spot1.castShadow = true;
        //     spot1.shadow.mapSize.width = this.shadowMapSize;
        //     spot1.shadow.mapSize.height = this.shadowMapSize;
        //     this.add(spot1, spot1.target);
        // }

        // for (let i = 0; i < 3; i++) {
        //     const spot2 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        //     spot2.position.set(-20, 20, -10 + i*10);
        //     spot2.target.position.set(-10, 10, 10);
        //     spot2.castShadow = true;
        //     spot2.shadow.mapSize.width = this.shadowMapSize;
        //     spot2.shadow.mapSize.height = this.shadowMapSize;
        //     this.add(spot2, spot2.target);
        // }

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 1);
        hemi.position.set(-10, 10, 0);
        this.add(hemi);

        // const window2 = new DirectionalLight(COLORS.WHITE, 1);
        // window2.position.set(7.5, 9, -14);
        // window2.castShadow = true;
        // window2.shadow.mapSize.width = this.shadowMapSize;
        // window2.shadow.mapSize.height = this.shadowMapSize;
        // this.add(window2);

        // const window3 = new DirectionalLight(COLORS.WHITE, 1);
        // window3.position.set(12.5, 9, -14);
        // window3.castShadow = true;
        // window3.shadow.mapSize.width = this.shadowMapSize;
        // window3.shadow.mapSize.height = this.shadowMapSize;
        // this.add(window3);
    }
}

export default OfficeStartLights;
