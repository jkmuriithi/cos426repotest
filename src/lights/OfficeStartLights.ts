import { Group, SpotLight, HemisphereLight, DirectionalLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeStartLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const spot1 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        spot1.position.set(0, 10, -5);
        spot1.target.position.set(10, 0, -5);
        spot1.castShadow = true;
        spot1.shadow.mapSize.width = this.shadowMapSize;
        spot1.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot1, spot1.target);

        const spot2 = new SpotLight(COLORS.WHITE, 100, 0, Math.PI / 4, 1, 2);
        spot2.position.set(20, 10, -5);
        spot2.target.position.set(10, 0, -5);
        spot2.castShadow = true;
        spot2.shadow.mapSize.width = this.shadowMapSize;
        spot2.shadow.mapSize.height = this.shadowMapSize;
        this.add(spot2, spot2.target);

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.GRAY, 0.1);
        hemi.position.set(10, 20, -5);
        this.add(hemi);

        const window1 = new DirectionalLight(COLORS.WHITE, 1);
        window1.position.set(17, 5, -21);
        window1.target.position.set(12.5, 7, 4);
        window1.castShadow = true;
        window1.shadow.mapSize.width = this.shadowMapSize;
        window1.shadow.mapSize.height = this.shadowMapSize;
        this.add(window1);

        const window2 = new DirectionalLight(COLORS.WHITE, 1);
        window2.position.set(12.5, 7, 2);
        window2.target.position.set(12.5, 7, -14);
        window2.castShadow = true;
        window2.shadow.mapSize.width = this.shadowMapSize;
        window2.shadow.mapSize.height = this.shadowMapSize;
        this.add(window2);

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
