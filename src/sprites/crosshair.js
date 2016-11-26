import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({game, x, y, asset, player}) {
        super(game, x, y, asset);
        this.game = game;
        this.anchor.setTo(0.5);
        this.player = player;
        this.inputEnabled = true;
        this.events.onInputDown.add(this.fire, this.player);
    }

    update () {
        this.x = this.game.input.x;
        this.y = this.game.input.y;
    }

    fire () {
        this.animations.stop();
        this.animations.play('shoot');
    }
}
