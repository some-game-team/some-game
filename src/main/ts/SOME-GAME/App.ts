import {SnakeGame} from "./SnakeGame";

export class App extends CHAOTIVE.FW.APP.App {
    game: SnakeGame;

    constructor(configType = "main") {
        super(configType, () => this.start());

        console.log("App started: " + configType);
    }

    start() {
        this.game = new SnakeGame(this);
    }

    static sampleFunction(a: number) {
        return a + 1;
    }
}