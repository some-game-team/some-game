import {Menu} from "./STATES/Menu"
import {GameOver} from "./STATES/GameOver";
import {Preload} from "./STATES/Preload";
import {Stage} from "./STATES/Stage";

export class SnakeGame extends Phaser.Game {
    app: CHAOTIVE.FW.APP.App;

    constructor(app) {
        super(640, 360, Phaser.AUTO, "game");

        this.app = app;

        this.state.add('Preload', Preload, false);
        this.state.add('Menu', Menu, false);
        this.state.add('GameOver', GameOver, false);
        this.state.add('Stage', Stage, false);

        this.state.start('Preload');
        console.log("SnakeGame started...");
    }

}