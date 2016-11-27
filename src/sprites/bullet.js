import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({game, x, y, asset, key}) {
        super(game, x, y, asset, key);
        this.texture.baseTexture.scaleMode = PIXI.scaleModes.NEAREST;
        this.anchor.set(0.5);
        this.checkWorldBounds = true;
        this.outOfBoundsKill = true;
        this.exists = false
        this.tracking = false;
    }

    fire(x, y, rotation, speed) {
        this.reset(x, y);
        this.scale.set(1);
        this.game.physics.arcade.velocityFromRotation(rotation, speed, this.body.velocity);
        this.rotation = rotation;
    }
}
