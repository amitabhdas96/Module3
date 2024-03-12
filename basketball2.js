var test = function () {
  var score = 0;

  var freeThrow = function () {
    score++;
    return this;
  };

  var basket = function () {
    score += 2;
    return this;
  };

  var threePointer = function () {
    score += 3;
    return this;
  };

  var halfTime = function () {
    console.log("Halftime score is " + score);
  };

  return {
    freeThrow: freeThrow,
    basket: basket,
    threePointer: threePointer,
    halfTime: halfTime,
  };
};

var basketballGame = test();
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();