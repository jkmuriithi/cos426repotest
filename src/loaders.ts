/**
 * @file Defines helpers for loading/creating objects files.
 *
 * Sometimes loaded models are broken! Use this online model viewer for a sanity
 * check: https://www.creators3d.com/online-viewer
 */
import {
    Box3,
    Group,
    Texture,
    TextureLoader,
    Vector3,
} from 'three';
import { GLTFLoader, OBJLoader, MTLLoader } from 'three/examples/jsm/Addons.js';

import { PRINT_ASSETS_ON_LOAD } from './globals';
import { geometriesOf } from './utils';

/**
 * @example
 * import MODEL_URL from "@assets/models/paperplane.glb?url";
 * const model = await createModelFromGLTF(MODEL_URL);
 * // console.log the model to find the appropriate child
 * const object = model.children[0];
 *
 * @see {@link https://discourse.threejs.org/t/parts-of-glb-object-disappear-in-certain-angles-and-zoom/21295/5}
 */
async function loadModelFromGLTF(
    gltfUrl: string,
    centerGeometry: boolean = false
): Promise<Group> {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(gltfUrl);
    if (PRINT_ASSETS_ON_LOAD) {
        console.log(gltf);
    }

    gltf.scene.traverse((object) => (object.frustumCulled = false));

    if (centerGeometry) {
        const box = new Box3().setFromObject(gltf.scene, true);
        const center = box.getCenter(new Vector3());
        const adjustment = gltf.scene.position.clone().sub(center).toArray();
        geometriesOf(gltf.scene).forEach((geo) => geo.translate(...adjustment));
    }

    const box = new Box3().setFromObject(gltf.scene, true);
    const center = box.getCenter(new Vector3());
    const adjustment = gltf.scene.position.clone().sub(center);
    gltf.scene.position.add(adjustment);

    return gltf.scene;
}

async function loadModelFromOBJ(
    objUrl: string,
    mtlUrl?: string,
    centerGeometry: boolean = false
): Promise<Group> {
    const loader = new OBJLoader();
    if (mtlUrl) {
        const mtl = await new MTLLoader().loadAsync(mtlUrl);
        loader.setMaterials(mtl);
    }

    const obj = await loader.loadAsync(objUrl);
    if (PRINT_ASSETS_ON_LOAD) {
        console.log(obj);
    }

    obj.traverse((object) => (object.frustumCulled = false));

    if (centerGeometry) {
        const box = new Box3().setFromObject(obj, true);
        const center = box.getCenter(new Vector3());
        const adjustment = obj.position.clone().sub(center).toArray();
        geometriesOf(obj).forEach((geo) => geo.translate(...adjustment));
    }

    const box = new Box3().setFromObject(obj, true);
    const center = box.getCenter(new Vector3());
    const adjustment = obj.position.clone().sub(center);
    obj.position.add(adjustment);

    return obj;
}

async function loadTexturesFromImages(imgUrls: string[]): Promise<Texture[]> {
    const loader = new TextureLoader();

    const textures = [];
    for (const url of imgUrls) {
        const texture = await loader.loadAsync(url);
        if (PRINT_ASSETS_ON_LOAD) {
            console.log(texture);
        }
        textures.push(texture);
    }

    return textures;
}

export { loadModelFromGLTF, loadModelFromOBJ, loadTexturesFromImages };
