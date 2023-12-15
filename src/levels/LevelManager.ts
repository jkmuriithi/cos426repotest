import Level from './Level';
import OfficeStart from './OfficeStart';
import Office2 from './Office2';
import OfficeBoss from './OfficeBoss';
import Parkour from './Parkour';
import { Scene } from 'three';
import { createObject2D } from '../utils';
import { CAMERA, STARTING_LEVEL } from '../globals';

type LevelCreationFunction = () => Level;

const getLoadingScreen = () => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const loading = createObject2D({
        textContent: 'Loading...',
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
            position: 'absolute',
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
            position: 'absolute',
        },
    });

    CAMERA.lookAt(ending.position);
    scene.add(ending);
    return scene;
};

class LevelManager {
    readonly levels: LevelCreationFunction[] = [
        () => new OfficeStart(),
        () => new Office2(),
        () => new Parkour(),
        () => new OfficeBoss(),
    ];

    private currentIndex: number;

    readonly startingLevel;
    loading: boolean = false;
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
        this.currentIndex = index;
        const next = this.levels[this.currentIndex]();
        await next.load();
        // Remove loading text
        this.current.children[0].removeFromParent();
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
