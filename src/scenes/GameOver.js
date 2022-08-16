import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
    console.log(data.player);
  }

  preload() {
    this.load.image('home', '/src/assets/home.png');
    this.load.image('replay', '/src/assets/replay.png');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // add home button
    let homeBtn = this.add.image(width * 0.7, height * 0.7, 'home').setScale(0.6);
    homeBtn.setInteractive();

    // add home button
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