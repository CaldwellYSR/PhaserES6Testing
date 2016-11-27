import Phaser from 'phaser'
import Crosshair from '../sprites/crosshair'
import Player from '../sprites/player'
import Bullet from '../sprites/bullet'
import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
    init () {}
    preload () {
        this.load.image('crosshair', 'assets/images/crosshair.png')
        this.load.image('bullet', 'assets/images/bullet.png')
        this.load.atlasJSONHash('player_map', 'assets/images/player_animations.png', 'assets/images/player_animations.json')
    }

    create () {

        game.stage.backgroundColor = "#fff";

        this.player = new Player({
            game: this.game,
            x: 150,
            y: 150,
            asset: 'player_map',
            key: 14
        })
        this.game.add.existing(this.player, 0, 0);
        this.game.physics.arcade.enable(this.player);

        this.clip = this.game.add.group();

        this.crosshair = new Crosshair({
            game: this.game,
            x: 0,
            y: 0,
            asset: 'crosshair',
            player: this.player
        })
        this.game.add.existing(this.crosshair, 0, 0);

    }

    update() {
        this.clip.forEach(function(bullet) {
            bullet.kill();
        });
        for (var i = 0; i < this.player.clip; i++) {
            this.clip.create(25 * i, 15, 'bullet');
        }
    }
}
