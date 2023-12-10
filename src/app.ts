/**
 * @file Configures ThreeJS components, starts the render loop, and adds general
 * event handlers.
 * Sources:
 * @see {@link https://github.com/pmndrs/cannon-es/issues/126}
 * @see {@link https://gafferongames.com/post/fix_your_timestep/}
 */
import Stats from 'stats.js';
import { Vector3, PCFSoftShadowMap, TextureLoader } from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import {
    camera,
    renderer,
    world,
    initCameraPosition,
    ORBIT_CONTROLS_ENABLED,
} from './globals';
import GameScene from './scenes/GameScene';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function setup() {
    // Set up camera
    camera.position.copy(initCameraPosition);
    camera.zoom = 0.3;
    camera.fov = 20;
    camera.lookAt(new Vector3(0, 0, 0));

    // Set up renderer, canvas, and minor CSS adjustments
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;

    const canvas = renderer.domElement;
    canvas.style.display = 'block'; // Removes padding below canvas
    document.body.style.margin = '0'; // Removes margin around page
    document.body.style.overflow = 'hidden'; // Fix scrolling
    document.body.appendChild(canvas);

    // Set up FPS meter
    const stats = new Stats();
    stats.showPanel(0);
    stats.dom.style.top = '';
    stats.dom.style.left = '';
    stats.dom.style.bottom = '0px';
    stats.dom.style.right = '0px';
    document.body.appendChild(stats.dom);

    // Set up manual controls
    let controls: OrbitControls | undefined;
    if (ORBIT_CONTROLS_ENABLED) {
        controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;
        controls.enablePan = true;
        controls.enableZoom = true;
        controls.enableRotate = true;
        controls.minDistance = 2;
        controls.maxDistance = 100;
        controls.update();
    }

    // Resize Handler
    const onWindowResize = () => {
        const { innerHeight, innerWidth } = window;
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    };
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    const scene = new GameScene();
    // Debugging helpers
    // Print camera position with 'c'
    // TODO: remove this
    window.addEventListener(
        'keydown',
        (e) => e.code === 'KeyC' && console.log(camera)
    );
    // Reset character position with 'r'
    window.addEventListener(
        'keydown',
        (e) => e.code === 'KeyR' && scene.player.reset()
    );

    // Render loop using a "semi-fixed" physics time step
    const timeStep = 1 / 60;
    let lastCallTime: number | undefined = undefined;
    const loop = () => {
        stats.begin();

        const time = performance.now() / 1000;
        if (!lastCallTime) {
            world.step(timeStep);
        } else {
            const dt = time - lastCallTime;
            world.step(timeStep, dt);
            scene.update && scene.update(dt);
        }
        lastCallTime = time;
        controls && controls.update();
        renderer.render(scene, camera);

        stats.end();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
}

setup();
