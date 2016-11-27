import Phaser from 'phaser'
import Bullet from './bullet';

export default class extends Phaser.Sprite {
    constructor ({game, x, y, asset, player}) {
        super(game, x, y, asset);
        this.game = game;
        this.anchor.setTo(0.5);
        this.player = player;
        this.inputEnabled = true;
        this.events.onInputUp.add(function() {
            this.player.animations.play('idle');
        }, this);
        this.bullets = this.game.add.group(undefined, 'Bullets', false, true, Phaser.Physics.ARCADE);
        this.nextFire = 0;
        this.bulletSpeed = 1200;
        this.fireRate = 250;
        for (var i = 0; i < 64; i++) {
            this.bullets.add(new Bullet({
                game: this.game,
                x: 0,
                y: 0,
                asset: 'bullet'
            }));
        }
    }

    update () {
        this.x = this.game.input.x;
        this.y = this.game.input.y;
        if (this.game.input.activePointer.isDown) {
            this.player.animations.play('shoot');
            this.fire();
        }
    }

    fire () {
        if (this.game.time.time < this.nextFire) { return; }

        var x = this.player.x + 10;
        var y = this.player.y + 10;

        var opposite = this.y - this.player.y;
        var adjacent = this.x - this.player.x;
        var rotation = Math.atan2(opposite, adjacent);

        this.bullets.getFirstExists(false).fire(x, y, rotation, this.bulletSpeed);

        this.nextFire = this.game.time.time + this.fireRate;
    }
}
