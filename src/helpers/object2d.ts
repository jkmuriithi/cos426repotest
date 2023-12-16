/**
 * @file General utility functions which are useful for handling CSSObject2D
 * instances. Each CSSObject2d in the game should be tied to a div with the
 * class "game-text".
 */
import { CSS2DObject } from 'three/examples/jsm/Addons.js';

export type Object2DConfig = {
    textContent: string;
    id?: string;
    className?: string;
    style: Partial<CSSStyleDeclaration>;
};

const defaultObject2DConfig: Object2DConfig = {
    textContent: 'hello',
    className: '',
    style: {
        color: 'white',
        backgroundColor: 'transparent',
    },
};

export function createObject2D(config?: Partial<Object2DConfig>): CSS2DObject {
    const conf = { ...defaultObject2DConfig, ...config };
    const elem = document.createElement('div');
    elem.textContent = conf.textContent;
    elem.className = conf.className + ' game-text';
    if (conf.id) elem.id = conf.id;

    for (const [k, v] of Object.entries({
        ...defaultObject2DConfig.style,
        ...conf.style,
    })) {
        // @ts-ignore
        elem.style[k] = v;
    }

    const obj = new CSS2DObject(elem);

    obj.layers.set(2);
    return obj;
}

export function hideGameText() {
    document
        .querySelectorAll('.game-text')
        .forEach((el) => ((el as HTMLDivElement).hidden = true));
}

export function showGameText() {
    document
        .querySelectorAll('.game-text')
        .forEach((el) => ((el as HTMLDivElement).hidden = false));
}
