import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  player
  DRAW = 0;
  P1 = 1;
  P2 = 2;

  init(data) {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
    this.player = data.player;
  }

  preload() {
    this.load.image('home', '/src/assets/home.png');
    this.load.image('replay', '/src/assets/replay.png');
    this.load.image('p1wins', '/src/assets/p1wins.png');
    this.load.image('p2wins', '/src/assets/p2wins.png');
    this.load.image('draw', '/src/assets/draw.png');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // show appropiate result message
    if (this.player === this.DRAW) {
      this.add.image(width * 0.5, height * 0.4, 'draw').setScale(0.4);
    } else if (this.player == this.P1) {
      this.add.image(width * 0.5, height * 0.4, 'p1wins').setScale(0.4);
    } else if (this.player == this.P2) {
      this.add.image(width * 0.5, height * 0.4, 'p2wins').setScale(0.4);
    }

    // add home button
    let homeBtn = this.add.image(width * 0.7, height * 0.7, 'home').setScale(0.6);
    homeBtn.setInteractive();

    // add replay button
    let replayBtn = this.add.image(width * 0.3, height * 0.7, 'replay').setScale(0.6);
    replayBtn.setInteractive();

    this.input.on('gameobjectdown', this.handleClick);
  }

  handleClick(pointer, object) {
    if (object.texture.key === 'home') {
      this.scene.handleHome();
    } else if (object.texture.key === 'replay') {
      this.scene.handleReplay();
    }
  }

  handleHome() {
    this.scene.start('home');
  }

  handleReplay() {
    this.scene.start('game');
  }
}