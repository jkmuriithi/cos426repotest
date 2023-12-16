import { Group, HemisphereLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class OfficeStartLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        const hemi = new HemisphereLight(COLORS.WHITE, COLORS.WHITE, 1);
        hemi.position.set(-10, 10, 0);
        this.add(hemi);
        
    }
}

export default OfficeStartLights;
