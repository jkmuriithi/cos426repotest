import { Scene } from 'three';

import { createObject2D } from '../helpers';
import { CAMERA, STARTING_LEVEL } from '../globals';

import Level from './Level';
import OfficeStart from './OfficeStart';
import OfficeBoss from './OfficeBoss';
import Parkour from './Parkour';
import TestLevelOne from './TestLevelOne';
import OfficeCorridor from './OfficeCorridor';

type LevelCreationFunction = () => Level;

class LevelManager {
    readonly levels: LevelCreationFunction[] = [
        () => new OfficeStart(),
        () => new OfficeCorridor(),
        () => new Parkour(),
        () => new TestLevelOne(),
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

    private async load(index: number) {
        this.loading = true;

        const last = this.current;
        this.current = getLoadingScreen() as Level;
        last.dispose();

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
            await this.load(this.currentIndex + 1);
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;
        if (this.currentIndex === this.levels.length - 1) {
            location.reload();
            return;
        }
        await this.load(this.currentIndex - 1);
    }

    update(dt: number) {
        if (this.loading) return;

        switch (this.current.state) {
            case 'complete':
                this.loadNext();
                break;
            case 'playerDead':
                this.load(this.startingLevel);
                break;
            case 'incomplete':
                this.current.update(dt);
        }
    }
}

export default LevelManager;

const getLoadingScreen = () => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const loading = createObject2D({
        textContent: 'Loading...',
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
        textContent: 'You Win!',
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
        },
    });

    CAMERA.lookAt(ending.position);
    scene.add(ending);
    return scene;
};
