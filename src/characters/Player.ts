import { Body, ContactEquation, Vec3 } from 'cannon-es';
import { ColorRepresentation, Vector3 } from 'three';

import Character from './Character';
import { FLOAT_EPS, ICE_SKATER_MODE } from '../globals';

// JS keycode reference: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values
const forwardsKeys = new Set(['KeyW', 'ArrowUp']);
const backwardsKeys = new Set(['KeyS', 'ArrowDown']);
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
    private contactNormal = new Vec3();
    private moveForwards = false;
    private moveBackwards = false;
    private moveLeft = false;
    private moveRight = false;

    private forwards: Vector3;
    private backwards: Vector3;
    private left: Vector3;
    private right: Vector3;

    maxJumps = 2;
    controlsDisabled = false;
    jumpsLeft = 0;
    jumpVelocity = 5;
    moveVelocity = 10;
    inputDirection = new Vector3();

    constructor(
        size: [number, number, number] = [1, 1, 1],
        position: [number, number, number] = [0, 0, 0],
        color: ColorRepresentation = 0xffffff,
        name: string = 'player'
    ) {
        super(size, position, color, name);

        this.forwards = this.front.clone();
        this.backwards = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, Math.PI);
        this.left = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, Math.PI / 2);
        this.right = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, -Math.PI / 2);

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
            if (this.contactNormal.dot(this.upAxisCannon) > 0.5) {
                this.jumpsLeft = this.maxJumps;
            }
        });

        this.connectEventListeners();
    }

    // Must be a closure so that "this" is handled properly
    private onKeyDown = (event: KeyboardEvent): void => {
        if (event.repeat) return;
        const { code } = event;

        this.moveForwards = this.moveForwards || forwardsKeys.has(code);
        this.moveBackwards = this.moveBackwards || backwardsKeys.has(code);
        this.moveLeft = this.moveLeft || leftKeys.has(code);
        this.moveRight = this.moveRight || rightKeys.has(code);

        if (this.jumpsLeft > 0 && jumpKeys.has(code)) {
            this.body.velocity.y += this.jumpVelocity;
            --this.jumpsLeft;
        }
    };

    private onKeyUp = (event: KeyboardEvent): void => {
        const { code } = event;

        this.moveForwards = this.moveForwards && !forwardsKeys.has(code);
        this.moveBackwards = this.moveBackwards && !backwardsKeys.has(code);
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

    /**
     * Set the direction that the player moves when going forwards. Other
     * controls directions are set accordingly. The given direction vector
     * should be normalized.
     */
    setForwardsDirection(direction: Vector3) {
        this.forwards = direction.clone();
        this.backwards = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, Math.PI);
        this.left = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, Math.PI / 2);
        this.right = this.forwards
            .clone()
            .applyAxisAngle(this.upAxis, -Math.PI / 2);
    }

    update(dt: number): void {
        if (this.controlsDisabled) {
            super.update(dt);
            return;
        }

        this.inputDirection.set(0, 0, 0);
        if (this.moveForwards) {
            this.inputDirection.add(this.forwards);
        }
        if (this.moveBackwards) {
            this.inputDirection.add(this.backwards);
        }
        if (this.moveLeft) {
            this.inputDirection.add(this.left);
        }
        if (this.moveRight) {
            this.inputDirection.add(this.right);
        }

        // Make player turn towards input direction
        this.inputDirection.normalize();
        if (this.inputDirection.length() > FLOAT_EPS) {
            this.turnToFace(this.inputDirection);
            // Remove all character spin
            this.body.angularVelocity.setZero();
        }

        this.inputDirection.multiplyScalar(this.moveVelocity);
        if (ICE_SKATER_MODE) {
            this.body.velocity.x += this.inputDirection.x / 10;
            this.body.velocity.z += this.inputDirection.z / 10;
        } else {
            this.body.velocity.x = this.inputDirection.x;
            this.body.velocity.z = this.inputDirection.z;
        }

        super.update(dt);
    }
}

export default Player;
