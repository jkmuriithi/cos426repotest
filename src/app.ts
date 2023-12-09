/**
 * @file Defines global game variables. Sets up the three.js Renderer, Scene,
 * Camera, and the cannon-es world. Starts the render loop and configures a
 * window resize handler.
 */

import Stats from 'stats.js';
import { WebGLRenderer, PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import GameScene from './scenes/GameScene';
import { Vec3, World } from 'cannon-es';

// Global variables
export const world = new World({
    gravity: new Vec3(0, -9.82, 0),
});

// Core ThreeJS components
export const scene = new GameScene();
export const camera = new PerspectiveCamera();
export const renderer = new WebGLRenderer({ antialias: true });

function setup() {
    // Set up camera
    camera.position.set(-9, 5, 10);
    camera.lookAt(new Vector3(0, 0, 0));

    // Set up renderer, canvas, and minor CSS adjustments
    renderer.setPixelRatio(window.devicePixelRatio);
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
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 4;
    controls.maxDistance = 16;
    controls.update();

    // Resize Handler
    const onWindowResize = () => {
        const { innerHeight, innerWidth } = window;
        renderer.setSize(innerWidth, innerHeight);
        camera.aspect = innerWidth / innerHeight;
        camera.updateProjectionMatrix();
    };
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    // Render loop
    const loop = () => {
        stats.begin();

        controls.update();
        renderer.render(scene, camera);
        world.fixedStep();
        scene.update && scene.update(world.dt);

        stats.end();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
}

setup();
