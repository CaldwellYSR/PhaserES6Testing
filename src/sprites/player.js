import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({game, x, y, asset}) {
        super(game, x, y, asset);
        this.game = game;
        this.anchor.setTo(0.5);
        this.speed = 250;
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update () {
        this.body.velocity.x = 0;
        this.body.velocity.y = 0;
        this.handleMovement();
        this.lookAtCrosshair();
    }

    handleMovement() {
        if (this.cursors.up.isDown) {
            this.body.velocity.y = this.speed * -1;
        } else if (this.cursors.down.isDown) {
            this.body.velocity.y = this.speed;
        }
        if (this.cursors.left.isDown) {
            this.body.velocity.x = this.speed * -1;
        } else if (this.cursors.right.isDown) {
            this.body.velocity.x = this.speed;
        }
    }

    lookAtCrosshair() {
        var opposite = this.game.input.y - this.y;
        var adjacent = this.game.input.x - this.x;
        this.rotation = Math.atan2(opposite, adjacent);
    }
}

