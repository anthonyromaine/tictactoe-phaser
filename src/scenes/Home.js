import Phaser from 'phaser';
import logoUrl from '@/assets/logo.png';
import playUrl from '@/assets/play.png';

export default class Home extends Phaser.Scene {
  constructor() {
    super('home');
  }

  init() {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
  }

  preload() {
    this.load.image('logo', logoUrl);
    this.load.image('play', playUrl);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // add logo
    this.add.image(width * 0.5, height * 0.4, 'logo').setScale(0.5);

    // add play button
    let playBtn = this.add.image(width * 0.5, height * 0.7, 'play').setScale(0.6);
    playBtn.setInteractive();

    this.input.on('gameobjectdown', this.handleClick);

  }

  handleClick() {
    this.scene.startGame();
  }

  startGame() {
    this.scene.start('game');
  }

}