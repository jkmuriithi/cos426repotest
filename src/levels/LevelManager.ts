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
        () => new OfficeFight2(),
        () => new OfficeCorridor(),
        () => new OfficeFight1(),
        () => new OfficeCorridor(),
        () => new OfficeBoss(),
    ];

    private currentIndex: number;
    private loading: boolean = true;
    private portalMessageShown: boolean = false;

    readonly startingLevel;
    readonly portalMessages = [
        // "can't leave yet ;)",
        'handle those guys first',
        'clear the level pls',
    ];
    readonly loadingMessage = 'loading...';
    readonly deathMessage = 'you died lol';
    readonly winMessage = 'you got hired! gg';

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
                ['welcome to roguelife', 1500],
                ['wasd or arrows to move', 1500],
                ['space to jump', 1500],
                ['enter to shoot', 1500],
                ['good luck interviewing', 2000],
                ['hehe', 350],
            ])
                .then(() => start.load())
                .then(() => (this.loading = false));
        }
    }

    private async showSlides(textDelayMs: [string, number][]) {
        const curr = this.current;
        hideGameText();
        for (const [text, ms] of textDelayMs) {
            this.current = getTextScreen(text) as Level;
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
        // Handle end game
        if (this.currentIndex === this.levels.length - 1) {
            hideGameText();
            this.current = getTextScreen(this.winMessage) as Level;
        } else {
            await this.load(
                this.currentIndex + 1,
                getTextScreen(this.loadingMessage)
            );
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;
        if (this.currentIndex === this.levels.length - 1) {
            location.reload();
            return;
        }
        await this.load(
            this.currentIndex - 1,
            getTextScreen(this.loadingMessage)
        );
    }

    resetCurrent() {
        if (!(this.current instanceof Level)) return;

        this.current.reset();
    }

    updateCurrent(dt: number) {
        if (!(this.current instanceof Level)) return;

        switch (this.current.state) {
            case 'incomplete':
                this.current.update(dt);
                break;
            case 'complete':
                this.loadNext();
                break;
            case 'playerDead':
                this.load(
                    this.startingLevel,
                    getTextScreen(this.deathMessage),
                    700
                );
                break;
            case 'touchedPortal':
                this.current.state = 'incomplete';
                if (!this.portalMessageShown) {
                    const message =
                        this.portalMessages[
                            Math.floor(
                                Math.random() * this.portalMessages.length
                            )
                        ];
                    this.showSlides([[message, 550]]);
                }
                this.portalMessageShown = true;
        }
    }
}

export default LevelManager;

/** From: https://alvarotrigo.com/blog/wait-1-second-javascript/ */
const delay = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const getTextScreen = (text: string) => {
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
