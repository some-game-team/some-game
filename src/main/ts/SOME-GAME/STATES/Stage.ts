import {SnakePlayer} from "../CHARACTERS/SnakePlayer";

export class Stage extends Phaser.State {
    snake: SnakePlayer;
    maxItems: number = 1;
    items: Phaser.Group;

    create() {
        this.snake = new SnakePlayer(this.game);
        this.game.add.existing(this.snake);

        this.items = this.game.add.physicsGroup();
        this.createItem();

        let ks = this.game.input.keyboard.createCursorKeys();
        ks.up.onDown.add(this.snake.moveUp, this.snake);
        ks.down.onDown.add(this.snake.moveDown, this.snake);
        ks.left.onDown.add(this.snake.moveLeft, this.snake);
        ks.right.onDown.add(this.snake.moveRight, this.snake);
    }

    update() {
        this.game.physics.arcade.collide(this.snake, this.snake.tail, this.lose, null, this);
        this.game.physics.arcade.collide(this.snake, this.items, this.eat, null, this);
    }

    createItem() {
        let item = this.items.create(this.game.world.randomX, this.game.world.randomY, 'circleItem')
    }

    lose() { this.game.state.restart() }

    eat(snake, item) {
        console.log(snake.body.velocity.x, snake.body.velocity.y);
        this.hitItem(snake, item);
        this.createItem();
        this.snake.factor++;
    }

    hitItem(snake, item) {
        let velX = snake.body.velocity.x;
        let velY = snake.body.velocity.y;

        if (velX != 0) velX = velX * 2;
        else velX = this.game.rnd.realInRange(velY, velY * 4);

        if (velY != 0) velY = velY * 2;
        else velY = this.game.rnd.realInRange(velX, velX * 4);

        item.body.velocity.setTo(velX, velY);
    }

}
