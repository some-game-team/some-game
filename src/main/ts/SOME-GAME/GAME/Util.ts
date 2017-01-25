/**
 * Created by leo on 05-01-2017.
 */

export class Util {

    static preload(game) {
        let images = game.app.config.images;
        for (let k in images) game.load.image(k, game.app.urlPrefix + images[k]);
    }

}

