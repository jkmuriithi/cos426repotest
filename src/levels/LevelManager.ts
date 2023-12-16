import { Scene } from 'three';

import { createObject2D } from '../helpers';
import { CAMERA, STARTING_LEVEL } from '../globals';

import Level from './Level';
import OfficeStart from './OfficeStart';
import OfficeBoss from './OfficeBoss';
import OfficeCorridor from './OfficeCorridor';
import OfficeFight1 from './OfficeFight1';
import OfficeFight2 from './OfficeFight2';

type LevelCreationFunction = () => Level;

class LevelManager {
    readonly levels: LevelCreationFunction[] = [
        () => new OfficeStart(),
        () => new OfficeCorridor(),
        () => new OfficeFight2(),
        () => new OfficeCorridor(),
        () => new OfficeFight1(),
        () => new OfficeCorridor(),
        () => new OfficeBoss(),
    ];

    private currentIndex: number;
    private loading: boolean = false;

    readonly startingLevel;

    current: Level;

    constructor(startingLevel = STARTING_LEVEL) {
        console.assert(
            startingLevel >= 0 && startingLevel < this.levels.length
        );

        this.startingLevel = startingLevel;
        this.currentIndex = startingLevel;
        this.current = this.levels[this.currentIndex]();
        this.current.load();
    }

    get index() {
        return this.currentIndex;
    }

    private async load(index: number, loadingScene: Scene, delayMs = 0) {
        this.loading = true;

        const last = this.current;
        this.current = loadingScene as Level;
        last.dispose();

        if (delayMs !== 0) await delay(delayMs);
        const next = this.levels[index]();
        await next.load();

        this.current.children[0].removeFromParent();
        this.currentIndex = index;
        this.current = next;

        this.loading = false;
    }

    async loadNext() {
        if (this.currentIndex === this.levels.length - 1) {
            this.loading = true;
            this.current.dispose();
            this.current = getEndScreen() as Level;
        } else {
            await this.load(this.currentIndex + 1, getLoadingScreen());
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;
        if (this.currentIndex === this.levels.length - 1) {
            location.reload();
            return;
        }
        await this.load(this.currentIndex - 1, getLoadingScreen());
    }

    update(dt: number) {
        if (this.loading) return;

        switch (this.current.state) {
            case 'complete':
                this.loadNext();
                break;
            case 'playerDead':
                this.load(this.startingLevel, getDeadScreen(), 700);
                break;
            case 'incomplete':
                this.current.update(dt);
        }
    }
}

export default LevelManager;

/**
 * From: https://alvarotrigo.com/blog/wait-1-second-javascript/
 */
const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const getLoadingScreen = () => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const loading = createObject2D({
        textContent: 'loading...',
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
        },
    });

    CAMERA.lookAt(loading.position);
    scene.add(loading);
    return scene;
};

const getDeadScreen = () => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const loading = createObject2D({
        textContent: 'you died lol',
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
        },
    });

    CAMERA.lookAt(loading.position);
    scene.add(loading);
    return scene;
};

const getEndScreen = () => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const ending = createObject2D({
        textContent: 'you got hired! gg',
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
        },
    });

    CAMERA.lookAt(ending.position);
    scene.add(ending);
    return scene;
};
