var test = function () {
  var score = 0;
  var freeThrow = function () {
    this.score++;
    return score;
  };

  var basket = function () {
    this.score += 2;
    return score;
  };

  var threePointer = function () {
    this.score += 3;
    return score;
  };

  var halfTime = function () {
    console.log("Halftime score is " + this.score);
  };

  return {
    freeThrow: freeThrow,
    basket: basket,
    threePointer: threePointer,
    halfTime: halfTime,
  };
};
//modify each of the above object methods to enable function chaining as below:
// basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();

var basketballGame = test();
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
