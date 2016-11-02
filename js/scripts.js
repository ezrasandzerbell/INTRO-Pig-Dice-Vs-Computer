var rollTheDice = function(){
  var tempDiceValue = Math.floor((Math.random() * 6) + 1);
  return tempDiceValue;
};

var playerOneScore = [0]
var playerTwoScore = [0]
var turnScore = [0]

$(document).ready(function(){
  $("#rollButtonOne").click(function(event){
    event.preventDefault()

    var tempRollResult = rollTheDice()

    if (tempRollResult === 1){
      $("#diceOne").show();
      $("#diceTwo").hide();
      $("#diceThree").hide();
      $("#diceFour").hide();
      $("#diceFive").hide();
      $("#diceSix").hide();
    } else if (tempRollResult === 2){
      $("#diceOne").hide();
      $("#diceTwo").show();
      $("#diceThree").hide();
      $("#diceFour").hide();
      $("#diceFive").hide();
      $("#diceSix").hide();
    } else if (tempRollResult === 3){
      $("#diceOne").hide();
      $("#diceTwo").hide();
      $("#diceThree").show();
      $("#diceFour").hide();
      $("#diceFive").hide();
      $("#diceSix").hide();
    } else if (tempRollResult === 4){
      $("#diceOne").hide();
      $("#diceTwo").hide();
      $("#diceThree").hide();
      $("#diceFour").show();
      $("#diceFive").hide();
      $("#diceSix").hide();
    } else if (tempRollResult === 5){
      $("#diceOne").hide();
      $("#diceTwo").hide();
      $("#diceThree").hide();
      $("#diceFour").hide();
      $("#diceFive").show();
      $("#diceSix").hide();
    } else if (tempRollResult === 6){
      $("#diceOne").hide();
      $("#diceTwo").hide();
      $("#diceThree").hide();
      $("#diceFour").hide();
      $("#diceFive").hide();
      $("#diceSix").show();
    };
    if (tempRollResult !== 1){
      var addRollValue = parseInt(turnScore[0].toString()) + tempRollResult;
      turnScore.unshift(addRollValue)
      $("span#turnScore").text(turnScore[0] );
    } else if (tempRollResult ===1){
      turnScore = [0];
      $("span#turnScore").text(turnScore);

      var tempRollResult = rollTheDice()

      for (i=1; i<=1; i++) {
        if (tempRollResult === 1){
          $("#diceOne").show();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 2){
          $("#diceOne").hide();
          $("#diceTwo").show();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 3){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").show();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 4){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").show();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 5){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").show();
          $("#diceSix").hide();
        } else if (tempRollResult === 6){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").show();
        };
        if (tempRollResult !== 1){
          var addRollValue = parseInt(turnScore[0].toString()) + tempRollResult;
          turnScore.unshift(addRollValue)
          $("span#turnScore").text(turnScore[0] );
        } else if (tempRollResult ===1){
          turnScore = [0];
          $("span#turnScore").text(turnScore);
          return
        }
        var addScores = parseInt(turnScore[0].toString()) + parseInt(playerTwoScore[0].toString());
        playerTwoScore.unshift(addScores);
        $("span#playerTwoScore").text("");
        $("span#playerTwoScore").text(playerTwoScore[0]);
        if (addScores >= 100) {
          alert("Computer is the WINNER");
        } else {
        turnScore = [0];
        };
      };
    };
  });

  $("#passButtonOne").click(function(event){
    event.preventDefault();
    var addScores = parseInt(turnScore[0].toString()) + parseInt(playerOneScore[0].toString());
    playerOneScore.unshift(addScores);
    $("span#playerOneScore").text("");
    $("span#playerOneScore").text(playerOneScore[0]);
      if (addScores >= 100) {
        alert("YOU'RE THE BIG WINNER");
      } else {
      turnScore = [0];

      var tempRollResult = rollTheDice()

      for (i=1; i<=1; i++) {
        if (tempRollResult === 1){
          $("#diceOne").show();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 2){
          $("#diceOne").hide();
          $("#diceTwo").show();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 3){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").show();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 4){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").show();
          $("#diceFive").hide();
          $("#diceSix").hide();
        } else if (tempRollResult === 5){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").show();
          $("#diceSix").hide();
        } else if (tempRollResult === 6){
          $("#diceOne").hide();
          $("#diceTwo").hide();
          $("#diceThree").hide();
          $("#diceFour").hide();
          $("#diceFive").hide();
          $("#diceSix").show();
        };
        if (tempRollResult !== 1){
          var addRollValue = parseInt(turnScore[0].toString()) + tempRollResult;
          turnScore.unshift(addRollValue)
          $("span#turnScore").text(turnScore[0] );
        } else if (tempRollResult ===1){
          turnScore = [0];
          $("span#turnScore").text(turnScore);
          return
        }
        var addScores = parseInt(turnScore[0].toString()) + parseInt(playerTwoScore[0].toString());
        playerTwoScore.unshift(addScores);
        $("span#playerTwoScore").text("");
        $("span#playerTwoScore").text(playerTwoScore[0]);
        if (addScores >= 100) {
          alert("Computer is the WINNER");
        } else {
        turnScore = [0];
        };
      };
    };
  });
});
