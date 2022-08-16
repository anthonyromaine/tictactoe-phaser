import Phaser from 'phaser';

export default class Home extends Phaser.Scene {
  constructor() {
    super('home');
  }

  init() {

  }

  preload() {
    this.load.image('logo', '/src/assets/logo.png');
    this.load.image('play', '/src/assets/play.png');
  }

  create() {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');

    const width = this.scale.width;
    const height = this.scale.height;

    // add logo
    this.add.image(width * 0.5, height * 0.4, 'logo').setScale(0.5);

    // add play button
    this.add.image(width * 0.5, height * 0.7, 'play').setScale(0.6);


  }
}