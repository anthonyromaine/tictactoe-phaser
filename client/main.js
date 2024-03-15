import './style.css';
import Phaser from 'phaser';
import Game from '@/scenes/Game';
import GameOver from '@/scenes/GameOver';
import Home from '@/scenes/Home';

export default new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    parent: 'gameContainer',
    mode: Phaser.Scale.FIT,
    width: 360,
    height: 640,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [Home, Game, GameOver],
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  }
})