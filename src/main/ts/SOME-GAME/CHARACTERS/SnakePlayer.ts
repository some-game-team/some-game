import {Snake} from "./Snake";

export class SnakePlayer extends Snake {
    factor = 3;
    cloneSpeed = 1000 / this.factor;
    tailDuration = 1000 * this.factor * 2;
    velocity: number;
    tail: Phaser.Group;
    movingDirection: string;

    constructor (game) {
        super(game, game.width / 2, game.height / 2);
        this.body.immovable = true;
        this.velocity = this.width * this.factor;
        this.tail = this.game.add.group();
        this.requestTailNode();
    }

    faceUp() { this.face("up") }
    faceDown() { this.face("down") }
    faceLeft() { this.face("left") }
    faceRight() { this.face("right") }

    face(movingDirection) {
        this.movingDirection = movingDirection;
        this.stop();
        switch (movingDirection) {
            case "up":      this.angle = 0;     this.body.velocity.y = -this.velocity; break;
            case "down":    this.angle = 180;   this.body.velocity.y = this.velocity; break;
            case "left":    this.angle = 270;   this.body.velocity.x = -this.velocity; break;
            case "right":   this.angle = 90;    this.body.velocity.x = this.velocity; break;
        }
        console.log(this.body.velocity.x, this.body.velocity.y);
    }

    stop() {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
    }

    requestTailNode() {
        if (this.movingDirection == null) console.log("cannot createTailNode, not moving");
        else this.game.time.events.add(this.cloneSpeed, this.createTailNode, this);
        this.game.time.events.add(this.cloneSpeed, this.requestTailNode, this);
    }

    createTailNode() {
        let tailNode = new Snake(this.game, this.position.x, this.position.y, this.movingDirection);
        this.game.add.existing(tailNode);
        this.game.time.events.add(this.cloneSpeed * 2, this.addNodeToTail, this, tailNode);
        this.game.time.events.add(this.tailDuration, this.removeTailNode, this, tailNode);
    }

    removeTailNode(tailNode) { tailNode.destroy() }

    addNodeToTail(tailNode) {
        tailNode.tint = 0xFF3333;
        this.tail.add(tailNode);
    }

}
