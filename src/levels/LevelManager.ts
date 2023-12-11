import Level from './Level';
import TestLevelOne from './TestLevelOne';
import TestLevelTwo from './TestLevelTwo';

type LevelCreationFunction = () => Level;

class LevelManager {
    current: Level;
    index: number;
    levels: LevelCreationFunction[] = [
        () => new TestLevelOne(),
        () => new TestLevelTwo(),
    ];

    constructor() {
        this.index = 0;
        this.current = this.levels[this.index]();
        this.current.addPhysics();
    }

    next() {
        this.current.dispose();
        if (this.index === this.levels.length) {
            // handle end game
        }
        this.current = this.levels[++this.index]();
        this.current.addPhysics();
    }

    update(dt: number) {
        this.current.update(dt);
    }
}

export default LevelManager;
