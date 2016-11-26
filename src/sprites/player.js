import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({game, x, y, asset, key}) {
        super(game, x, y, asset, key);
        this.game = game;
        this.anchor.setTo(0.5);
        this.speed = 250;
        this.scale.setTo(0.5, 0.5);
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.animations.add('idle', Phaser.Animation.generateFrameNames('idle/survivor-idle_handgun_', 0, 19, '.png', 0), 15, true);
        this.animations.add('move', Phaser.Animation.generateFrameNames('move/survivor-move_handgun_', 0, 19, '.png', 0), 15, true);
        this.animations.add('reload', Phaser.Animation.generateFrameNames('reload/survivor-reload_handgun_', 0, 14, '.png', 0), 15, false);
        this.animations.add('shoot', Phaser.Animation.generateFrameNames('shoot/survivor-shoot_handgun_', 0, 2, '.png', 0), 15, false);
        this.animations.play('idle');
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
            this.animations.play('move');
        } else if (this.cursors.down.isDown) {
            this.body.velocity.y = this.speed;
            this.animations.play('move');
        }
        if (this.cursors.left.isDown) {
            this.body.velocity.x = this.speed * -1;
            this.animations.play('move');
        } else if (this.cursors.right.isDown) {
            this.body.velocity.x = this.speed;
            this.animations.play('move');
        }
    }

    lookAtCrosshair() {
        var opposite = this.game.input.y - this.y;
        var adjacent = this.game.input.x - this.x;
        this.rotation = Math.atan2(opposite, adjacent) - 0.15;
    }
}

