import Phaser from 'phaser';

export default class Home extends Phaser.Scene {
  constructor() {
    super('home');
  }

  init() {

  }

  create() {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');

    const width = this.scale.width;
    const height = this.scale.height;


  }
}