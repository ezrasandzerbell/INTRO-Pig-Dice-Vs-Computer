var rollTheDice = function(){
  var tempDiceValue = Math.floor((Math.random() * 6) + 1);
  return tempDiceValue;
};

var playerOneScore = []
var turnScore = [0]

$(document).ready(function(){
  $("#rollButton").click(function(event){
    event.preventDefault()

    var tempRollResult = rollTheDice()
    $("span#diceDisplay").text(tempRollResult);
    if (tempRollResult !== 1){
      var addRollValue = parseInt(turnScore[0].toString()) + tempRollResult;
      turnScore.unshift(addRollValue)
      $("span#turnScore").text(turnScore[0] );
    } else if (tempRollResult ===1){
      turnScore = [0];
      $("span#turnScore").text(turnScore);
    }
  });

  $("#passButton").click(function(event){
    event.preventDefault()
    playerOneScore.push(turnScore[0]);
    $("#playerOneScore").text(playerOneScore);
  });

});
