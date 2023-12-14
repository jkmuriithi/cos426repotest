import { Group, DirectionalLight, HemisphereLight } from 'three';

import { COLORS, SHADOW_MAP_SIZE } from '../globals';

class BankRobberyLights extends Group {
    shadowMapSize = SHADOW_MAP_SIZE;

    constructor() {
        // Invoke parent Group() constructor
        super();

        // Directional light to simulate the sun
        const sunLight = new DirectionalLight(COLORS.WHITE, 1);
        sunLight.position.set(0, 50, -30); // Position can be adjusted for desired angle and distance
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = this.shadowMapSize;
        sunLight.shadow.mapSize.height = this.shadowMapSize;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 500;
        this.add(sunLight);

        // Hemisphere light for ambient sky light
        const skyColor = 0x87ceeb; // A light blue color, representing the sky
        const groundColor = 0x808080; // A neutral gray, representing the ground
        const skyLight = new HemisphereLight(skyColor, groundColor, 0.6);
        skyLight.position.set(0, 50, 0);
        this.add(skyLight);
    }
}

export default BankRobberyLights;
