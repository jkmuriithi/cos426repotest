import Level from './Level';
import TestLevelOne from './TestLevelOne';
import TestLevelTwo from './TestLevelTwo';
import OfficeStart from './OfficeStart';
import Office2 from './Office2';
import BankRobbery from './BankRobbery';
import Parkour from './Parkour';

type LevelCreationFunction = () => Level;

class LevelManager {
    readonly levels: LevelCreationFunction[] = [
        () => new TestLevelOne(),
        () => new TestLevelTwo(),
        () => new OfficeStart(),
        () => new Office2(),
        () => new BankRobbery(),
        () => new Parkour(),
    ];

    private currentIndex: number;
    private waitForNext: boolean = false;
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
            this.waitForNext = false;
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
        if (this.current.complete) {
            if (!this.waitForNext) {
                this.waitForNext = true;
                this.loadNext();
            }
        } else {
            this.current.update(dt);
        }
    }
}

export default LevelManager;
