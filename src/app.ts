/**
 * @file Configures ThreeJS components, starts the render loop, and adds general
 * event handlers.
 *
 * Sources:
 * @see {@link https://github.com/pmndrs/cannon-es/issues/126}
 * @see {@link https://gafferongames.com/post/fix_your_timestep/}
 * @see {@link https://stackoverflow.com/questions/16424500/what-would-be-realistic-values-for-gravity-mass-and-contact-material-in-canno}
 *
 * TODO: Implement proper dispose methods on all classes with geometry,
 * materials, textures, and lights (make sure to remove Cannon bodies and event
 * listeners)
 * TODO: Create Level class and implement game levels as subclasses
 * TODO: Implement level loading/disposal in GameScene
 * TODO: Enemies (ranged and melee)
 * TODO: Projectiles
 * TODO: Wall and Character texturing
 * @see {@link https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects}
 */
import Stats from 'stats.js';
import { PCFSoftShadowMap } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import {
    CAMERA,
    RENDERER,
    WORLD,
    ORBIT_CONTROLS_ENABLED,
    HOTKEYS_ENABLED,
    STARTING_LEVEL,
    WALL_PHYSICS_MATERIAL,
    CHARACTER_PHYSICS_MATERIAL,
} from './globals';
import { ContactMaterial, GSSolver } from 'cannon-es';
import LevelManager from './levels/LevelManager';

function setup() {
    // Set up camera
    CAMERA.zoom = 0.3;
    CAMERA.fov = 20;

    // Set up renderer, canvas, and minor CSS adjustments
    RENDERER.setPixelRatio(window.devicePixelRatio);
    RENDERER.shadowMap.enabled = true;
    RENDERER.shadowMap.type = PCFSoftShadowMap;

    const canvas = RENDERER.domElement;
    canvas.style.display = 'block'; // Removes padding below canvas
    document.body.style.margin = '0'; // Removes margin around page
    document.body.style.overflow = 'hidden'; // Fix scrolling
    document.body.appendChild(canvas);

    // Set up physics sim
    (WORLD.solver as GSSolver).iterations += 5;
    (WORLD.solver as GSSolver).tolerance = 0;
    WORLD.addContactMaterial(
        new ContactMaterial(WALL_PHYSICS_MATERIAL, CHARACTER_PHYSICS_MATERIAL, {
            friction: 0,
            restitution: 0,
            frictionEquationRelaxation: 1,
            contactEquationRelaxation: 1,
            frictionEquationStiffness: 1e9,
            contactEquationStiffness: 1e9,
        })
    );

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
        controls = new OrbitControls(CAMERA, canvas);
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
        RENDERER.setSize(innerWidth, innerHeight);
        CAMERA.aspect = innerWidth / innerHeight;
        CAMERA.updateProjectionMatrix();
    };
    onWindowResize();
    window.addEventListener('resize', onWindowResize, false);

    const levelManager = new LevelManager(STARTING_LEVEL);
    if (HOTKEYS_ENABLED) {
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'KeyC':
                    console.log(CAMERA);
                    break;
                case 'KeyR':
                    levelManager.current.reset();
                    break;
                case 'KeyN':
                    levelManager.loadNext();
                    break;
                case 'KeyP':
                    levelManager.loadPrevious();
                    break;
            }
        });
    }

    // Render loop using a "semi-fixed" physics time step
    const timeStep = 1 / 60;
    let lastCallTime: number | undefined = undefined;
    const loop = () => {
        stats.begin();

        const time = performance.now() / 1000;
        if (!lastCallTime) {
            WORLD.step(timeStep);
        } else {
            const dt = time - lastCallTime;
            WORLD.step(timeStep, dt);
            levelManager.update(dt);
        }
        lastCallTime = time;
        controls && controls.update();
        RENDERER.render(levelManager.current, CAMERA);

        stats.end();
        window.requestAnimationFrame(loop);
    };
    window.requestAnimationFrame(loop);
}

setup();
