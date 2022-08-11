import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  BOARD_SIZE = 58.25;
  GAME_CENTER_WIDTH = 180;
  GAME_CENTER_HEIGHT = 320;
  boardLocations = [
    {
      x: this.GAME_CENTER_WIDTH - this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT - this.BOARD_SIZE
    },
    {
      x: this.GAME_CENTER_WIDTH,
      y: this.GAME_CENTER_HEIGHT - this.BOARD_SIZE
    },
    {
      x: this.GAME_CENTER_WIDTH + this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT - this.BOARD_SIZE
    },
    {
      x: this.GAME_CENTER_WIDTH - this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT
    },
    {
      x: this.GAME_CENTER_WIDTH,
      y: this.GAME_CENTER_HEIGHT
    },
    {
      x: this.GAME_CENTER_WIDTH + this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT
    },
    {
      x: this.GAME_CENTER_WIDTH - this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT + this.BOARD_SIZE
    },
    {
      x: this.GAME_CENTER_WIDTH,
      y: this.GAME_CENTER_HEIGHT + this.BOARD_SIZE
    },
    {
      x: this.GAME_CENTER_WIDTH + this.BOARD_SIZE,
      y: this.GAME_CENTER_HEIGHT + this.BOARD_SIZE
    },
  ];

  init() {

  }

  preload() {
    this.load.image('background', '/src/assets/background.png');
    this.load.image('board', '/src/assets/board.png');
    this.boardObjects = [];
  }

  create() {
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
    // add board background image
    this.add.image(this.GAME_CENTER_WIDTH, this.GAME_CENTER_HEIGHT, 'background').setScale(.25);

    for(let i = 0; i < 9; i++){
      // add board images
      this.boardObjects.push(this.add.image(this.boardLocations[i].x + 5, this.boardLocations[i].y, 'board').setScale(.25));
    }

    

  }

  update() {

  }
}