/**
 * @file General utility functions which are useful for handling CSSObject2D
 * instances.
 */
import { CSS2DObject } from 'three/examples/jsm/Addons.js';

export type Object2DConfig = {
    textContent: string;
    id?: string;
    className: string;
    style: Partial<CSSStyleDeclaration>;
};

const defaultObject2DConfig: Object2DConfig = {
    textContent: 'hello',
    className: 'text',
    style: {
        color: 'white',
        backgroundColor: 'transparent',
    },
};

export function createObject2D(config?: Partial<Object2DConfig>): CSS2DObject {
    const conf = { ...defaultObject2DConfig, ...config };
    const elem = document.createElement('div');
    elem.textContent = conf.textContent;
    elem.className = conf.className;
    if (conf.id) elem.id = conf.id;

    for (const [k, v] of Object.entries({
        ...defaultObject2DConfig.style,
        ...conf.style,
    })) {
        // @ts-ignore
        elem.style[k] = v;
    }

    const obj = new CSS2DObject(elem);

    obj.layers.set(1);
    return obj;
}
