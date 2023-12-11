import { STARTING_LEVEL } from '../globals';
import Level from './Level';
import TestLevelOne from './TestLevelOne';
import TestLevelTwo from './TestLevelTwo';

type LevelCreationFunction = () => Level;

class LevelManager {
    private currentIndex: number = STARTING_LEVEL;

    current: Level;
    levels: LevelCreationFunction[] = [
        () => new TestLevelOne(),
        () => new TestLevelTwo(),
    ];

    constructor() {
        this.currentIndex = 0;
        this.current = this.levels[this.currentIndex]();
        this.current.addPhysics();
    }

    get index() {
        return this.currentIndex;
    }

    loadNext() {
        if (this.currentIndex === this.levels.length - 1) {
            // handle end game
        } else {
            this.current.dispose();
            this.current = this.levels[++this.currentIndex]();
            this.current.addPhysics();
        }
    }

    loadPrevious() {
        if (this.currentIndex === 0) return;
        this.current.dispose();
        this.current = this.levels[--this.currentIndex]();
        this.current.addPhysics();
    }

    update(dt: number) {
        this.current.update(dt);
    }
}

export default LevelManager;
