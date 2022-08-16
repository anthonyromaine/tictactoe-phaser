import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
  constructor() {
    super('game');
  }

  BOARD_SIZE = 81.55;
  BOARD_OFFSET = 5;
  GAME_CENTER_WIDTH = 180;
  GAME_CENTER_HEIGHT = 320;
  player
  gameBoard
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
    this.player = 1;
    this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // set background color
    this.mainCamera = this.cameras.add(0, 0);
    this.mainCamera.setBackgroundColor('#3D7AD6');
  }

  preload() {
    this.load.image('background', '/src/assets/background.png');
    this.load.image('board', '/src/assets/board.png');
    this.load.image('x', '/src/assets/X.png');
    this.load.image('o', '/src/assets/O.png');
    this.boardObjects = [];
  }

  create() {

    // add board background image
    this.add.image(this.GAME_CENTER_WIDTH, this.GAME_CENTER_HEIGHT, 'background').setScale(.35);

    for (let i = 0; i < 9; i++) {
      // add board images
      let board = this.add.image(this.boardLocations[i].x + this.BOARD_OFFSET, this.boardLocations[i].y - this.BOARD_OFFSET, 'board').setScale(.35);
      board.boardId = i;
      board.setInteractive();
      this.boardObjects.push(board);
    }

    this.input.on('gameobjectdown', this.handleClick);


  }


  handleClick(pointer, gameObject) {
    if (this.scene.player == 1) {
      // update board
      gameObject.setTexture('x');
      this.scene.gameBoard[gameObject.boardId] = this.scene.player;

      // check for winner
      if (this.scene.checkWin(gameObject.boardId)) {
        console.log('Player ', this.scene.player, ' won!!');
        this.scene.endGame(this.scene.player);
      }

      // check for full board
      if (this.scene.isBoardFull()) {
        this.scene.endGame(0);
      }

      // update player
      this.scene.player = 2;
    } else {
      // update board
      gameObject.setTexture('o');
      this.scene.gameBoard[gameObject.boardId] = this.scene.player;

      // check for winner
      if (this.scene.checkWin(gameObject.boardId)) {
        console.log('Player', this.scene.player, 'wins!!');
        this.scene.endGame(this.scene.player);
      }

      // check for full board
      if (this.scene.isBoardFull()) {
        this.scene.endGame(0);
      }
      // update player
      this.scene.player = 1;
    }
  }

  checkWin(boardUpdated) {
    let currPlayer = this.player;
    let row = Math.floor(boardUpdated / 3);
    let col = boardUpdated % 3;

    // check row
    for (let i = 0; i < 3; i++) {
      // console.log('row:', i + (3 * index));
      if (this.gameBoard[i + (3 * row)] !== currPlayer) {
        break;
      }
      if (i == 2) {
        return true;
      }
    }

    // check column
    for (let i = 0; i < 3; i++) {
      if (this.gameBoard[col + (3 * i)] !== currPlayer) {
        break;
      }
      if (i == 2) {
        return true;
      }
    }

    // check diagonals
    if (this.gameBoard[0] === currPlayer && this.gameBoard[4] === currPlayer && this.gameBoard[8] === currPlayer) {
      return true;
    }

    if (this.gameBoard[2] === currPlayer && this.gameBoard[4] === currPlayer && this.gameBoard[6] === currPlayer) {
      return true;
    }

    return false;
  }

  endGame(winner) {
    this.scene.start('game-over', { player: winner });
  }

  isBoardFull() {
    for (let i = 0; i < 9; i++) {
      if (this.gameBoard[i] === 0) {
        return false;
      }
    }
    return true;
  }

}