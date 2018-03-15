define(['require', 'app/constants'], function (require, c) {

  'use strict';

  function ResultsScreen(sketch, game) {
    this.sketch = sketch; // Reference to the p5 library
    this.game = game;     // Instantiated Game object
  }

  ResultsScreen.prototype.draw = function() {
    this.sketch.push();
    this.sketch.stroke(255);
    this.sketch.fill(255);
    this.sketch.textSize(38);
    this.sketch.textStyle(this.sketch.ITALIC);
    this.sketch.text('Results', c.screenWidth / 2, c.screenHeight / 3);

    this.sketch.textSize(25);
    this.sketch.textStyle(this.sketch.NORMAL);
    this.sketch.text('Guesser: ' + this.game.guesser, c.screenWidth / 3, c.screenHeight / 2);
    this.sketch.text('Chooser: ' + this.game.chooser, (2 * c.screenWidth) / 3, c.screenHeight / 2);

    this.sketch.textSize(18);
    this.sketch.text(this.game.playerOnePoints, c.screenWidth / 3, c.screenHeight / 2);
    this.sketch.text(this.game.playerTwoPoints, (2 * c.screenWidth) / 3, c.screenHeight / 2);
    this.sketch.pop();
  };

  return ResultsScreen;

});