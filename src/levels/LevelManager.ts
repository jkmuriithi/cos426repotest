import Level from './Level';
import TestLevelOne from './TestLevelOne';
import TestLevelTwo from './TestLevelTwo';

type LevelCreationFunction = () => Level;

class LevelManager {
    private currentIndex: number;

    current: Level;
    levels: LevelCreationFunction[] = [
        () => new TestLevelOne(),
        () => new TestLevelTwo(),
    ];

    constructor(start = 0) {
        console.assert(start >= 0 && start < this.levels.length);

        this.currentIndex = start;
        this.current = this.levels[this.currentIndex]();
        this.current.load();
    }

    get index() {
        return this.currentIndex;
    }

    async loadNext() {
        if (this.currentIndex === this.levels.length - 1) {
            // handle end game
        } else {
            this.current.dispose();
            this.current = this.levels[++this.currentIndex]();
            await this.current.load();
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;

        this.current.dispose();
        this.current = this.levels[--this.currentIndex]();
        await this.current.load();
    }

    update(dt: number) {
        this.current.update(dt);
    }
}

export default LevelManager;
