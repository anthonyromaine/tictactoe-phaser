import Phaser from 'phaser';

export default class Home extends Phaser.Scene {
  constructor() {
    super('home');
  }

  fullscreenAvailable = false;

  init() {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
  }

  preload() {
    this.load.image('logo', '/src/assets/logo.png');
    this.load.image('play', '/src/assets/play.png');
    this.load.image('larger', '/src/assets/larger.png');
    this.load.image('smaller', '/src/assets/smaller.png');
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    this.fullscreenAvailable = this.sys.game.device.fullscreen.available;

    if (this.fullscreenAvailable) {
      let fullscreenBtn;
      if (this.scale.isFullscreen) {
        fullscreenBtn = this.add.image(width * 0.9, height * 0.94, 'smaller').setScale(0.6);
      } else {
        fullscreenBtn = this.add.image(width * 0.9, height * 0.94, 'larger').setScale(0.6);
      }
      fullscreenBtn.setInteractive();

      // toggleFullscreen
    }

    // add logo
    this.add.image(width * 0.5, height * 0.4, 'logo').setScale(0.5);

    // add play button
    let playBtn = this.add.image(width * 0.5, height * 0.7, 'play').setScale(0.6);
    playBtn.setInteractive();

    this.input.on('gameobjectdown', this.handleClick);

  }

  handleClick(pointer, object) {
    if (object.texture.key === 'play') {
      this.scene.startGame();
    } else if (this.scene.isFullscreenBtn(object.texture.key)) {
      this.scene.handleFullScreen(object);
    }
  }

  isFullscreenBtn(key) {
    if (key === 'smaller' || key === 'larger') {
      return true;
    }
    return false;
  }

  startGame() {
    this.scene.start('game');
  }

  handleFullScreen(object) {
    this.scale.toggleFullscreen();
    if (object.texture.key === 'smaller') {
      object.setTexture('larger');
    } else {
      object.setTexture('smaller');
    }
  }

}