import { Body, ContactEquation, Vec3 } from 'cannon-es';
import { ColorRepresentation, Vector3 } from 'three';

import Character from './Character';

// JS keycode reference: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
const upKeys = new Set(['KeyW', 'ArrowUp']);
const downKeys = new Set(['KeyS', 'ArrowDown']);
const leftKeys = new Set(['KeyA', 'ArrowLeft']);
const rightKeys = new Set(['KeyD', 'ArrowRight']);
const jumpKeys = new Set(['Space']);

// Can't find a type for this in cannon
type CollideEvent = {
    body: Body;
    contact: ContactEquation;
};

/**
 * A user-controlled Character. Code adapted from the cannon-es pointer lock
 * controls example.
 * @see {@link https://github.com/pmndrs/cannon-es/blob/master/examples/js/PointerLockControlsCannon.js}
 */
class Player extends Character {
    readonly maxJumps = 2;

    private moveUp = false;
    private moveDown = false;
    private moveLeft = false;
    private moveRight = false;
    private contactNormal = new Vec3();

    controlsDisabled = false;
    jumpsLeft = 0;
    jumpVelocity = 5;
    moveVelocity = 6;
    inputDirection = new Vector3();

    constructor(
        size: [number, number, number] = [1, 1, 1],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'player'
    ) {
        super(size, position, color, name);

        // Re-enable jumping after collision with some object underneath
        this.body.addEventListener('collide', (e: CollideEvent) => {
            const { contact } = e;

            this.contactNormal.setZero();
            if (contact.bi.id === this.body.id) {
                contact.ni.negate(this.contactNormal);
            } else {
                this.contactNormal.copy(contact.ni);
            }

            // If collision normal faces somewhat upwards...
            if (this.contactNormal.dot(this.upAxis) > 0.5) {
                this.jumpsLeft = this.maxJumps;
            }
        });

        this.connectEventListeners();
    }

    // Must be a closure so that "this" is handled properly
    private onKeyDown = (event: KeyboardEvent): void => {
        if (event.repeat) return;
        const { code } = event;

        this.moveUp = this.moveUp || upKeys.has(code);
        this.moveDown = this.moveDown || downKeys.has(code);
        this.moveLeft = this.moveLeft || leftKeys.has(code);
        this.moveRight = this.moveRight || rightKeys.has(code);

        if (this.jumpsLeft > 0 && jumpKeys.has(code)) {
            this.body.velocity.y += this.jumpVelocity;
            --this.jumpsLeft;
        }
    };

    private onKeyUp = (event: KeyboardEvent): void => {
        const { code } = event;

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

        // Forwards axis is x, rightwards axis is z
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

        // Make player turn towards input direction
        this.inputDirection.normalize();
        if (this.inputDirection.length() > 0) {
            this.turnToFace(this.inputDirection);
        }

        // TODO: Maybe instead of changing position, we make Character use a
        // low-friction material and change velocity?
        this.inputDirection.multiplyScalar(this.moveVelocity * dt);
        this.body.position.x += this.inputDirection.x;
        this.body.position.z += this.inputDirection.z;

        super.update(dt);
    }
}

export default Player;
