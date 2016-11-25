import Phaser from 'phaser'
import Crosshair from '../sprites/crosshair'
import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

    this.crosshair = new Crosshair({
      game: this.game,
      x: 0,
      y: 0,
      asset: 'crosshair'
    })

    this.game.add.existing(this.crosshair, 0, 0);

  }

  render () {
  }
}
