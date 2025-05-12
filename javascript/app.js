import {
  leaderBoardObjects,
  targetIdsType1Row1,
  targetIdsType1Row2,
  targetIdsType2Row1,
  targetIdsType2Row2,
  targetIdsType2Planet,
  targetIdsType3Row1,
  targetIdsType3Row2,
  targetIdsType3Planet,
  allTargets,
} from "./data.js";

// basic variables
let scoreCount = 0;
let gameTimer = 0;

// creating variables that will be used to track the intervals for the target reveals
let gameplay1;
let gameplay2;
let gameplay3;
let gameplay4;
let gameplay5;
let gameplay6;
let gameplay7;
let gameplay8;
let gameplay9;
let gameplay10;
let gameplay11;

// leaderboard sorting function
const scoreSorter = (a, b) => {
  return b.score - a.score;
};

$(() => {
  // function that sorts leaderboard array and displays results on page
  const sortLeaderboard = () => {
    leaderBoardObjects.sort(scoreSorter);
    $("#leaderOne").text(
      `-${leaderBoardObjects[0].score}- ${leaderBoardObjects[0].name}`
    );
    $("#leaderTwo").text(
      `-${leaderBoardObjects[1].score}- ${leaderBoardObjects[1].name}`
    );
    $("#leaderThree").text(
      `-${leaderBoardObjects[2].score}- ${leaderBoardObjects[2].name}`
    );
    $("#leaderFour").text(
      `-${leaderBoardObjects[3].score}- ${leaderBoardObjects[3].name}`
    );
    $("#leaderFive").text(
      `-${leaderBoardObjects[4].score}- ${leaderBoardObjects[4].name}`
    );
  };

  // function to open the info panel and then change the handler to the info closer
  const infoOpen = () => {
    $("#infoBox").css("top", "0");
    $("#infoButton").off("click", infoOpen);
    $("#infoButton").on("click", infoClose);
    $("#infoButton").css({
      "background-image": "radial-gradient(rgb(25, 36, 196), rgb(51, 50, 138))",
      "box-shadow": "0 0 30px 0 blue",
      border: "solid 5px rgb(44, 45, 112)",
    });
  };

  // function to close the info panel and then change the handler to the info opener
  const infoClose = () => {
    $("#infoBox").css("top", "-420px");
    $("#infoButton").off("click", infoClose);
    $("#infoButton").on("click", infoOpen);
    $("#infoButton").css({
      "background-image": "radial-gradient(rgb(12, 11, 83), rgb(42, 32, 179))",
      "box-shadow": "10px 15px 15px 1px rgba(0, 0, 0, .7)",
      border: "solid 5px rgb(40, 41, 99)",
    });
  };

  // function to handle click event on a target
  const clickTarget = (event) => {
    const targ = $(event.currentTarget);
    const ident = targ.attr("id");
    const targetInfo = allTargets.find((target) => target.id === ident);

    targ.off("click", clickTarget);
    targ.css("transform", targetInfo.startPosition);

    targ.css("filter", "invert(1)");
    setTimeout(() => {
      targ.css("filter", "invert(0)");
    }, 1000);

    scoreCount += targetInfo.pointValue;
    $("#scoreCount").text(scoreCount);
  };

  // function to reveal a target and give it a click listener for clickTarget handler
  const revealTarget = (targetArray, shownDuration) => {
    const targetToReveal =
      targetArray[Math.floor(Math.random() * targetArray.length)];

    $(`#${targetToReveal.id}`).on("click", clickTarget);
    $(`#${targetToReveal.id}`).css("transform", targetToReveal.endPosition);

    setTimeout(() => {
      $(`#${targetToReveal.id}`).css("transform", targetToReveal.startPosition);
      $(`#${targetToReveal.id}`).off("click", clickTarget);
    }, shownDuration);
  };

  const enterName = () => {
    // creating and pushing new leaderboard object
    const playerFinalObject = {
      name: `${$("#nameEnterInput").val().toUpperCase()}`,
      score: scoreCount,
    };
    leaderBoardObjects.push(playerFinalObject);

    // making launch button look off to indicate end of game
    $("#startButton").css({
      "background-image": "radial-gradient(rgb(54, 13, 13), rgb(117, 43, 43))",
      "box-shadow": "10px 15px 15px 1px rgba(0, 0, 0, .7)",
      border: "solid 5px rgb(109, 42, 42)",
    });

    // re-sorting leaderboard
    sortLeaderboard();

    // reseting input and turning off enter button listener
    $("#nameEnterButton").off("click", enterName);
    $("#nameEnterInput").val("");
    $("#nameEnterInput").attr("placeholder", "");

    //transition on upper left screen and resetting the launch button so you can play again
    setTimeout(() => {
      $("#lineOne").text("WHACK");
    }, 1000);
    setTimeout(() => {
      $("#lineTwo").text("-A-");
    }, 2000);
    setTimeout(() => {
      $("#lineThree").text("MARTIAN");
      $startButtonListener();
    }, 3000);
  };

  const endGame = () => {
    // clearing all the target reveal intervals
    clearInterval(gameplay1);
    clearInterval(gameplay2);
    clearInterval(gameplay3);
    clearInterval(gameplay4);
    clearInterval(gameplay5);
    clearInterval(gameplay6);
    clearInterval(gameplay7);
    clearInterval(gameplay8);
    clearInterval(gameplay9);
    clearInterval(gameplay10);
    clearInterval(gameplay11);

    // moves the planet away and does transitions on upper left screen
    $("#planetContainer").css("top", "-700px");
    $(".titleWords").css("font-size", "40px");
    $("#lineOne").text("0000");
    $("#lineTwo").text("0000");
    $("#lineThree").text("0000");
    setTimeout(() => {
      $("#lineOne").text("ENTER");
    }, 1000);
    setTimeout(() => {
      $("#lineTwo").text("NAME");
    }, 2000);
    setTimeout(() => {
      $("#lineThree").text("==>");
      $("#nameEnterInput").attr("placeholder", "YOUR NAME HERE");
      // adds listener to enter button so you can input your name to put in the leaderboard array
      $("#nameEnterButton").on("click", enterName);
    }, 3000);
  };

  // handler function for launch button to start a round of the game
  const startRound = () => {
    scoreCount = 0;
    $("#startButton").css({
      "background-image": "radial-gradient(rgb(209, 8, 8), rgb(138, 50, 50))",
      "box-shadow": "0 0 30px 0 red",
      border: "solid 4px rgb(138, 50, 50)",
    });
    $("#scoreCount").text(scoreCount);
    $("#startButton").off("click", startRound);

    // decorative transitions for the screen in the upper left
    $(".titleWords").text(" ");
    setTimeout(() => {
      $("#lineTwo").text("3");
      $("#lineTwo").css("font-size", "70px");
    }, 1000);
    setTimeout(() => {
      $("#lineTwo").text("2");
    }, 2000);
    setTimeout(() => {
      $("#lineTwo").text("1");
    }, 3000);
    setTimeout(() => {
      $("#lineTwo").css("font-size", "40px");
      $("#lineOne").text("0");
      $("#lineTwo").text("0");
      $("#lineThree").text("0");
    }, 4000);
    setTimeout(() => {
      $("#lineOne").text("00");
      $("#lineTwo").text("00");
      $("#lineThree").text("00");
    }, 4250);
    setTimeout(() => {
      $("#lineOne").text("000");
      $("#lineTwo").text("000");
      $("#lineThree").text("000");
    }, 4500);
    setTimeout(() => {
      $("#lineOne").text("0000");
      $("#lineTwo").text("0000");
      $("#lineThree").text("0000");
    }, 4750);
    setTimeout(() => {
      $("#lineOne").text("WHACK");
    }, 5000);
    setTimeout(() => {
      $("#lineTwo").text("-A-");
    }, 5250);
    setTimeout(() => {
      $("#lineThree").text("MARTIAN");
    }, 5500);
    setTimeout(() => {
      $(".titleWords").text("");
      $(".titleWords").css("font-size", "70px");
    }, 6000);

    // starting game timer
    setTimeout(() => {
      gameTimer = 80;
      gameplay1 = setInterval(() => {
        $("#lineTwo").text(`${gameTimer}`);
        gameTimer--;
      }, 1000);
    }, 5000);

    // game intervals for target reveals
    gameplay2 = setInterval(function () {
      revealTarget(targetIdsType1Row2, 2000);
    }, 5000);

    setTimeout(() => {
      gameplay3 = setInterval(function () {
        revealTarget(targetIdsType1Row1, 2000);
      }, 5000);
    }, 2500);

    setTimeout(() => {
      $("#planetContainer").css("top", "-250px");
      gameplay4 = setInterval(function () {
        revealTarget(targetIdsType2Row1, 1750);
      }, 5000);
    }, 10750);

    setTimeout(() => {
      gameplay5 = setInterval(function () {
        revealTarget(targetIdsType2Row2, 1750);
      }, 5000);
    }, 13250);

    setTimeout(() => {
      gameplay6 = setInterval(function () {
        revealTarget(targetIdsType2Planet, 3000);
      }, 5000);
    }, 13750);

    setTimeout(() => {
      gameplay7 = setInterval(function () {
        revealTarget(targetIdsType3Row1, 1500);
      }, 5000);
    }, 22000);

    setTimeout(() => {
      gameplay8 = setInterval(function () {
        revealTarget(targetIdsType3Row2, 1500);
      }, 5000);
    }, 24500);

    setTimeout(() => {
      gameplay9 = setInterval(function () {
        revealTarget(targetIdsType3Planet, 3000);
      }, 5000);
    }, 28500);

    setTimeout(() => {
      gameplay10 = setInterval(function () {
        revealTarget(targetIdsType1Row1, 2000);
      }, 5000);
    }, 31000);

    setTimeout(() => {
      gameplay11 = setInterval(function () {
        revealTarget(targetIdsType1Row2, 2000);
      }, 5000);
    }, 33000);

    // game ending function
    setTimeout(() => {
      endGame();
    }, 86500);
  };

  // listener for launch button to start the game
  const $startButtonListener = () => {
    $("#startButton").on("click", startRound);
  };

  sortLeaderboard();
  $("#infoButton").on("click", infoOpen);
  $startButtonListener();
});
