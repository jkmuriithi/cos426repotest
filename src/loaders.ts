/**
 * @file Defines helpers for loading/creating objects files.
 *
 * Sometimes loaded models are broken! Use this online model viewer for a sanity
 * check: https://www.creators3d.com/online-viewer
 */
import { Group, Texture, TextureLoader } from 'three';
import { GLTFLoader, OBJLoader, MTLLoader } from 'three/examples/jsm/Addons.js';

import { PRINT_ASSETS_ON_LOAD } from './globals';

/**
 * @example
 * import MODEL_URL from "@assets/models/paperplane.glb?url";
 * const model = await createModelFromGLTF(MODEL_URL);
 * // console.log the model to find the appropriate child
 * const object = model.children[0];
 *
 * @see {@link https://discourse.threejs.org/t/parts-of-glb-object-disappear-in-certain-angles-and-zoom/21295/5}
 */
async function loadModelFromGLTF(gltfUrl: string): Promise<Group> {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(gltfUrl);

    gltf.scene.traverse((object) => (object.frustumCulled = false));
    if (PRINT_ASSETS_ON_LOAD) {
        console.log(gltf);
    }

    return gltf.scene;
}

async function loadModelFromOBJ(
    objUrl: string,
    mtlUrl?: string
): Promise<Group> {
    const loader = new OBJLoader();
    if (mtlUrl) {
        const mtl = await new MTLLoader().loadAsync(mtlUrl);
        loader.setMaterials(mtl);
    }

    const obj = await loader.loadAsync(objUrl);
    obj.traverse((object) => (object.frustumCulled = false));
    if (PRINT_ASSETS_ON_LOAD) {
        console.log(obj);
    }

    return obj;
}

async function loadTexturesFromImages(imgUrls: string[]): Promise<Texture[]> {
    const loader = new TextureLoader();

    const textures = [];
    for (const url of imgUrls) {
        const texture = await loader.loadAsync(url);
        textures.push(texture);
    }

    return textures;
}

export { loadModelFromGLTF, loadModelFromOBJ, loadTexturesFromImages };
