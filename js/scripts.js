var rollTheDice = function(){
  var tempDiceValue = Math.floor((Math.random() * 6) + 1);
  return tempDiceValue;
};

var playerOneScore = [0]
var playerTwoScore = [0]
var turnScore = [0]

// function PlayerOne(score) {
//   this.scoreone = score;
//
// }
//
// function PlayerTwo(score){
//   this.scoretwo = score;
// }


$(document).ready(function(){
  $("#rollButtonOne").click(function(event){
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

  $("#passButtonOne").click(function(event){
    event.preventDefault();
    var addScores = parseInt(turnScore[0].toString()) + parseInt(playerOneScore[0].toString());
    playerOneScore.unshift(addScores);
    $("div#playerOneScore").text(playerOneScore[0]);
    turnScore = [0];
    $("span.playerOneArea").hide();
    $("span.playerTwoArea").show();
  });

  $("#rollButtonTwo").click(function(event){
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

  $("#passButtonTwo").click(function(event){
    event.preventDefault()
    var addScores = parseInt(turnScore[0].toString()) + parseInt(playerTwoScore.toString());
    playerTwoScore.push(addScores);
    $("#playerTwoScore").text(playerTwoScore);
    $("span.playerTwoArea").hide();
    turnScore = [0];
    $("span.playerOneArea").show();
  });

});
