class bbgame {
  constructor() {
    this.score = 0;
  }
  freeThrow() {
    this.score++;
    return this;
  }
  basket() {
    this.score += 2;
    return this;
  }
  threePointer() {
    this.score += 3;
    return this;
  }
  halfTime() {
    console.log('Halftime score is '+this.score);
  }
}

let basketballGame = new bbgame();
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
