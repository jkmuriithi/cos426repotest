import Level from './Level';
import TestLevelOne from './TestLevelOne';
import TestLevelTwo from './TestLevelTwo';
import OfficeStart from './OfficeStart';

type LevelCreationFunction = () => Level;

class LevelManager {
    readonly levels: LevelCreationFunction[] = [
        () => new TestLevelOne(),
        () => new TestLevelTwo(),
        () => new OfficeStart(),
    ];

    private currentIndex: number;
    current: Level;

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
            const next = this.levels[++this.currentIndex]();
            await next.load();
            this.current.dispose();
            this.current = next;
        }
    }

    async loadPrevious() {
        if (this.currentIndex === 0) return;

        const prev = this.levels[--this.currentIndex]();
        await prev.load();
        this.current.dispose();
        this.current = prev;
    }

    update(dt: number) {
        this.current.update(dt);
    }
}

export default LevelManager;
