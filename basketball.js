const basketballGame = {
  score:0,
  freeThrow: function () {
      this.score++;
      return this;
    },

  basket: function () {
      this.score += 2;
      return this;
    },

  threePointer: function () {
      this.score += 3;
      return this;
    },

  halfTime: function () {
      console.log('Halftime score is '+this.score);
    }
}

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();