export class Snake extends Phaser.Sprite {

    constructor (game, x, y, movingDirection?) {
        super(game, x, y, 'snakeHead');
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.game.physics.arcade.enable(this);

        switch (movingDirection) {
            case "up":      this.angle = 0; break;
            case "down":    this.angle = 180; break;
            case "left":    this.angle = 270; break;
            case "right":   this.angle = 90; break;
        }
    }
}