import Phaser from 'phaser';

export default class GameOver extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data){
    console.log(data.player);
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    
  }
}