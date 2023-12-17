import { Scene } from 'three';

import { createObject2D, hideGameText, showGameText } from '../helpers';
import { CAMERA, DEBUG_FLAGS, STARTING_LEVEL } from '../globals';

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
        () => new OfficeFight1(),
        () => new OfficeCorridor(),
        () => new OfficeFight2(),
        () => new OfficeCorridor(),
        () => new OfficeBoss(),
    ];

    private readonly portalMessages = [
        "can't leave yet ;)",
        'clear enemies pls',
    ];
    private readonly deathMessages = [
        'you died :/',
        'rip',
        'maybe try microsoft?',
        'tough market ig',
        'ngl that was bad',
        'aw man',
    ];
    private readonly loadingMessage = 'loading...';
    private readonly winMessage = 'you got hired! gg';

    private startingLevel;
    private currentIndex: number;
    private lastStartTime: number = performance.now();
    private loading: boolean = true;
    private portalMessageShown: boolean = false;

    current: Scene | Level;

    constructor(startingLevel = STARTING_LEVEL) {
        console.assert(
            startingLevel >= 0 && startingLevel < this.levels.length
        );

        this.startingLevel = startingLevel;
        this.currentIndex = startingLevel;

        const start = this.levels[startingLevel]();
        this.current = start;
        if (DEBUG_FLAGS.HIDE_INTRO) {
            start.load().then(() => (this.loading = false));
        } else {
            this.showSlides([
                ['welcome to roguelife', 2000],
                ['wasd to move', 1500],
                ['space to jump', 1500],
                ['enter to shoot', 1500],
                ['good luck interviewing', 1500],
                ['hehe', 350],
            ])
                .then(() => start.load())
                .then(() => (this.loading = false));
        }
    }

    /**
     * Takes in an array of text strings and the time they should be shown
     * onscreen for. If the given delay for a string is 0, this function will
     * return without cleaning up the scene (good for showing text "forever").
     */
    private async showSlides(textDelayMs: [string, number][]) {
        const curr = this.current;
        hideGameText();

        for (const [text, ms] of textDelayMs) {
            this.current = getTextScene(text) as Level;
            if (ms === 0) return;

            await delay(ms);
            this.current.children[0].removeFromParent();
        }

        this.current = curr;
        showGameText();
    }

    private async load(index: number, loadingScene: Scene, delayMs = 0) {
        if (this.loading) return;

        this.loading = true;

        const last = this.current as Level;
        this.current = loadingScene;
        last.dispose();

        if (delayMs !== 0) await delay(delayMs);
        const next = this.levels[index]();
        await next.load();

        this.current.children[0].removeFromParent();
        this.currentIndex = index;
        this.current = next;
        this.portalMessageShown = false;

        this.loading = false;
    }

    async loadNext() {
        if (!this.loading && this.currentIndex === this.levels.length - 1) {
            // Prevent further load() calls from running
            this.loading = true;

            const clearTime = (performance.now() - this.lastStartTime) / 1000;
            const timeMsg = `time: ${String(clearTime).slice(0, 7)} secs`;
            this.showSlides([
                [this.winMessage, 1500],
                [timeMsg, 0],
            ]);
        } else {
            await this.load(
                this.currentIndex + 1,
                getTextScene(this.loadingMessage)
            );
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;

        await this.load(
            this.currentIndex - 1,
            getTextScene(this.loadingMessage)
        );
    }

    resetCurrent() {
        if (this.loading || !(this.current instanceof Level)) return;

        this.current.reset();
    }

    updateCurrent(dt: number) {
        if (this.loading || !(this.current instanceof Level)) return;

        switch (this.current.state) {
            case 'incomplete':
                this.current.update(dt);
                break;
            case 'touchedPortal':
                this.current.state = 'incomplete';
                if (!this.portalMessageShown) {
                    this.showSlides([[chooseRandom(this.portalMessages), 550]]);
                }
                this.portalMessageShown = true;
                break;
            case 'complete':
                this.loadNext();
                break;
            case 'playerDead':
                this.lastStartTime = performance.now();
                this.load(
                    this.startingLevel,
                    getTextScene(chooseRandom(this.deathMessages)),
                    1000
                );
                break;
        }
    }
}

export default LevelManager;

function chooseRandom<T>(arr: T[]) {
    return arr[Math.floor(Math.random() * arr.length)];
}
/** From: https://alvarotrigo.com/blog/wait-1-second-javascript/ */
const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const getTextScene = (text: string): Scene => {
    CAMERA.position.set(10, 10, 10);
    const scene = new Scene();
    scene.layers.enableAll();

    const item = createObject2D({
        textContent: text,
        style: {
            fontFamily: 'monospace',
            fontSize: '4em',
        },
    });

    CAMERA.lookAt(item.position);
    scene.add(item);
    return scene;
};
