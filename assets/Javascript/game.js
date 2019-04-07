// Initialize Firebase
var config = {
    apiKey: "AIzaSyDJU0wcbCcd7caGRbtGYNu8Zx1OdP8Pu4Q",
    authDomain: "rps-multiplayer-d49f3.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-d49f3.firebaseio.com",
    projectId: "rps-multiplayer-d49f3",
    storageBucket: "rps-multiplayer-d49f3.appspot.com",
    messagingSenderId: "164457531538"
  };

  firebase.initializeApp(config);
  var database = firebase.database();


  //if person clicks new game
  $("#new-game").on("click", function(){
      const playerOne = prompt("player one:", "UserName")
      $("#userNameOne").text(playerOne);
      $(".container").css("display", "block");
      $("#startButton").closest('div').remove();
      var idNumber = Math.floor(Math.random() * 300);
      var gameIdDiv = $("<div id='idNumber' class='text-white'>").text(idNumber)
      $("#game-id").append(gameIdDiv)
  });


  //if person clicks join game
  $("#join-game").on("click", function(){
      prompt("game id:")
      prompt("player two:")
    $(".container").css("display", "block");
    $("#startButton").closest('div').remove();
});

// const playerOne = $("")
// const playerOne = $("")

// var playerOneChoice = "";
// var playerTwoChoice = "";

// let pOneWins = 0;
// let pOneLoses = 0;
// let pTwoLoses = 0;
// let pTwoWins = 0;

// if(playerOne) {
//     $("#rockOne").on("click", function() {
//         playerOneChoice = "rock"
//     });
//     $("#paperOne").on("click", function() {
//         playerOneChoice = "paper"
//     });
//     $("#scissorsOne").on("click", function() {
//         playerOneChoice = "scissors"
//     });
// }