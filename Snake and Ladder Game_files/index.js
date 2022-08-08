//get Players
var getPlayerTurn = document.getElementById("display-player");

//result of dice.
var diceResult = document.getElementById("dice-result");

var currentPlayerOne = 0;
var currentPlayerTwo = 0;

function getRandom(checkPlayer) {
  let checkFirst = 1;
  let checkSecond = 2;

  let randomNum = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice-result").innerHTML = randomNum;

  if (checkPlayer === true) {
    if (currentPlayerOne + randomNum <= 100) {
      currentPlayerOne += randomNum;

      if (currentPlayerOne === 100) {
        document.getElementById("show-winning").innerHTML = "1 won";
        document.getElementById("button-2").disabled = true;
      }

      FirstPlayerConditionFunction(currentPlayerOne, checkFirst, randomNum);

      // console.log("currentPlayerOneScore " + currentPlayerOne);
    }
  } else {
    if (currentPlayerTwo + randomNum <= 100) {
      currentPlayerTwo += randomNum;

      SecondPlayerConditionFunction(currentPlayerTwo, checkSecond, randomNum);

      if (currentPlayerTwo === 100) {
        document.getElementById("show-winning").innerHTML = "2 Won";
        document.getElementById("button-1").disabled = true;
      }
      // console.log("currentPlayerTwoScore " + currentPlayerTwo);
    }
  }
}

//condition function

//*first player function

function FirstPlayerConditionFunction(
  randomNumber,
  firstPlayer,
  checkingRandom
) {
  try {
    let total = 100;
    //it adds the active class to the div tags..in a incrementing order.
    if (firstPlayer === 1) {
      if (randomNumber <= total) {
        $(`#${randomNumber}`)
          .addClass("active-1")
          .siblings()
          .removeClass("active-1");

        // console.log("first player condition is working.");
        // console.log("current player one variable : " + currentPlayerOne);
      }
      //condition for disabling the buttons when its reached the score 100
      if (currentPlayerOne === total) {
        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        document.getElementById("game-condition").style = "display: block";
        document.getElementById("game-over").style = "display: block";
      }

      //to show the turn of the First Player
      document.getElementById("turn").innerHTML = " 1 ";
      //player turn stays when the number is 6
      // console.log(`checks the random number ${checkingRandom}`);
      if (checkingRandom === 6) {
        document.getElementById("turn").innerHTML = " 1 ";
        document.getElementById("button-2").disabled = true;
      } else {
        document.getElementById("turn").innerHTML = " 2 ";
        document.getElementById("button-2").disabled = false;
        document.getElementById("button-1").disabled = true;
      }

      //switch case for Players

      switch (currentPlayerOne) {
        //* For Ladders

        case 4:
          currentPlayerOne = 14;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 9:
          currentPlayerOne = 31;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 21:
          currentPlayerOne = 42;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 28:
          currentPlayerOne = 84;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 51:
          currentPlayerOne = 67;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 71:
          currentPlayerOne = 91;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 80:
          currentPlayerTwo = 100;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        //*for Snakes

        case 17:
          currentPlayerOne = 7;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 54:
          currentPlayerOne = 34;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 62:
          currentPlayerOne = 19;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 64:
          currentPlayerOne = 60;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 87:
          currentPlayerOne = 24;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 93:
          currentPlayerOne = 73;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 95:
          currentPlayerOne = 75;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;

        case 98:
          currentPlayerOne = 79;
          $(`#${currentPlayerOne}`)
            .addClass("active-1")
            .siblings()
            .removeClass("active-1");
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

//*second Player function

function SecondPlayerConditionFunction(
  randomNumber,
  secondPlayer,
  checkingRandom
) {
  let total = 100;
  try {
    if (secondPlayer === 2) {
      if (
        currentPlayerTwo !== randomNumber ||
        (currentPlayerTwo === randomNumber && randomNumber <= total)
      ) {
        $(`#${randomNumber}`)
          .addClass("active-2")
          .siblings()
          .removeClass("active-2");

        // console.log("second player condition is working.");
      } else if (currentPlayerTwo >= total) {
        document.getElementById("button-1").disabled = true;
        document.getElementById("button-2").disabled = true;
        //for displaying Game Over Block
        document.getElementById("game-condition").style = "display: block";
        document.getElementById("game-over").style = "display: block";
      }

      //player turn stays when the number is 6
      // console.log(`checks the random number ${checkingRandom}`);
      if (checkingRandom === 6) {
        document.getElementById("turn").innerHTML = " 2 ";
        document.getElementById("button-1").disabled = true;
      } else {
        document.getElementById("turn").innerHTML = " 1 ";
        document.getElementById("button-1").disabled = false;
        document.getElementById("button-2").disabled = true;
      }

      //switch case for Second Player

      switch (currentPlayerTwo) {
        //* For Ladders

        case 4:
          currentPlayerTwo = 14;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 9:
          currentPlayerTwo = 31;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 21:
          currentPlayerTwo = 42;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 28:
          currentPlayerTwo = 84;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 51:
          currentPlayerTwo = 67;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 71:
          currentPlayerTwo = 91;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 80:
          currentPlayerTwo = 100;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        //*for Snakes

        case 17:
          currentPlayerTwo = 7;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 54:
          currentPlayerTwo = 34;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 62:
          currentPlayerTwo = 19;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 64:
          currentPlayerTwo = 60;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 87:
          currentPlayerTwo = 24;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 93:
          currentPlayerTwo = 73;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 95:
          currentPlayerTwo = 75;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;

        case 98:
          currentPlayerTwo = 79;
          $(`#${currentPlayerTwo}`)
            .addClass("active-2")
            .siblings()
            .removeClass("active-2");
          break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

//Player One

function firstPlayer() {
  var checkPlayer = true;

  // console.log("first player function called");

  getRandom(checkPlayer);

  // console.log("playerOne Score " + currentPlayerOne);

  //display the player
  getPlayerTurn.innerHTML = 1;
}

//Player Two

function secondPlayer() {
  // console.log("second player function called");

  var checkPlayer = false;
  getPlayerTurn.innerHTML = 2;

  getRandom(checkPlayer);

  // console.log("second player score " + currentPlayerTwo);
}
