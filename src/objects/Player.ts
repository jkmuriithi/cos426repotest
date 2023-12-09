import { BODY_TYPES, Body } from 'cannon-es';
import { ColorRepresentation, Vector3 } from 'three';

import Character from './Character';

// JS keycode reference: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
const upKeys = new Set(['KeyW', 'ArrowUp']);
const downKeys = new Set(['KeyS', 'ArrowDown']);
const leftKeys = new Set(['KeyA', 'ArrowLeft']);
const rightKeys = new Set(['KeyD', 'ArrowRight']);
const jumpKeys = new Set(['Space']);

/**
 * A user-controlled Character. Code adapted from the cannon-es pointer lock
 * controls example.
 * @see {@link https://github.com/pmndrs/cannon-es/blob/master/examples/js/PointerLockControlsCannon.js}
 */
class Player extends Character {
    controlsDisabled = false;

    canJump = false; // Question: Should this be true or false initially?
    moveUp = false;
    moveDown = false;
    moveLeft = false;
    moveRight = false;

    jumpVelocity = 5;
    moveVelocity = 4;

    inputDirection = new Vector3(0, 0, 0);

    constructor(
        size: [number, number, number] = [1, 1, 1],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'player'
    ) {
        super(size, position, color, name);

        // Re-enable jumping after floor collision
        this.body.addEventListener('collide', (e: { body: Body }) => {
            // TODO: Check collision normal direction instead of y positions
            if (
                e.body.type === BODY_TYPES.STATIC &&
                e.body.position.y < this.body.position.y
            ) {
                console.log(e);
                this.canJump = true;
            }
        });

        this.connectEventListeners();
    }

    // Must be a closure so that "this" is handled properly
    private onKeyDown = (event: KeyboardEvent): void => {
        const { code } = event;
        // console.log(`key down: ${code}`);

        this.moveUp = this.moveUp || upKeys.has(code);
        this.moveDown = this.moveDown || downKeys.has(code);
        this.moveLeft = this.moveLeft || leftKeys.has(code);
        this.moveRight = this.moveRight || rightKeys.has(code);

        if (this.canJump && jumpKeys.has(code)) {
            this.body.velocity.y += this.jumpVelocity;
            this.canJump = false;
        }
    };

    private onKeyUp = (event: KeyboardEvent): void => {
        const { code } = event;
        // console.log(`key up: ${code}`);

        this.moveUp = this.moveUp && !upKeys.has(code);
        this.moveDown = this.moveDown && !downKeys.has(code);
        this.moveLeft = this.moveLeft && !leftKeys.has(code);
        this.moveRight = this.moveRight && !rightKeys.has(code);
    };

    connectEventListeners(): void {
        window.addEventListener('keydown', this.onKeyDown);
        window.addEventListener('keyup', this.onKeyUp);
    }

    disconnectEventListeners(): void {
        window.removeEventListener('keydown', this.onKeyDown);
        window.removeEventListener('keyup', this.onKeyUp);
    }

    update(dt: number): void {
        if (this.controlsDisabled) {
            super.update(dt);
            return;
        }

        this.inputDirection.set(0, 0, 0);

        if (this.moveUp) {
            this.inputDirection.x += 1;
        }
        if (this.moveDown) {
            this.inputDirection.x -= 1;
        }
        if (this.moveLeft) {
            this.inputDirection.z -= 1;
        }
        if (this.moveRight) {
            this.inputDirection.z += 1;
        }

        // TODO: Make player (or maybe Character) turn towards direction
        this.inputDirection
            // .applyQuaternion(this.quaternion)
            .normalize()
            .multiplyScalar(this.moveVelocity * dt);

        // TODO: Instead of changing position, make Character use a low-friction
        // material
        this.body.position.x += this.inputDirection.x;
        this.body.position.z += this.inputDirection.z;

        super.update(dt);
    }
}

export default Player;
