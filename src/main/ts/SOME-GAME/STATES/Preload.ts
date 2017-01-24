import {Util} from "../GAME/Util";

export class Preload extends Phaser.State {
    preload() {
        console.log("Beginning preload...");
        this.game.load.onLoadStart.add( this.loading, this);
        this.game.load.onLoadComplete.add( this.loadComplete, this);
        Util.preload(this.game);
    }

    loading() {
        this.game.add.text(32, 32, "Loading ...", { fill: '#ffffff' });
    }

    loadComplete() {
        console.log("... finished preload");
        this.game.state.start('Menu', true, false);
    }

}
