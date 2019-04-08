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

  var playerOne = {
      name: playerOneName,
      wins: p1wins,
      loses: p1loses,
      choice: playerOneChoice,
      comment: commentBox
  }

  var playerTwo = {
    name: playerOneName,
    wins: p1wins,
    loses: p1loses,
    choice: playerOneChoice,
    comment: addComment

}

  var p1wins = 0;
  var p1loses = 0;
  var p2wins = 0;
  var p2loses = 0;
  var tie = 0;

  var playerOneChoice = "";
  var playerTwoChoice = "";

  var playerOneName = "";
  var playerTwoName = "";

  //if person clicks new game
  $("#new-game").on("click", function(){
       var playerOneName = prompt("Player one Name:", "UserName");
       $("#userNameOne").text(playerOneName);

      $(".container").css("display", "block");
      $("#startButton").closest('div').remove();

      var idNumber = Math.floor(Math.random() * 300);
      var gameIdDiv = $("<div id='idNumber' class='text-white'>").text(idNumber)

      $("#game-id").append(gameIdDiv)

      database.ref().push({
        playerOne: playerOneName,
    });

  });


  //if person clicks join game
  $("#join-game").on("click", function(){
      prompt("game id:")

      var playerTwoName = prompt("player two:", "UserName");
      $("#userNameTwo").text(playerTwoName);

    $(".container").css("display", "block");

    $("#startButton").closest('div').remove();
});


var addComment = "";

$("#submit-comment").on("click", function(event){
    event.preventDefault();

    addComment = $("#addComment").val().trim();

    database.ref().push({
        addComment: addComment,
    });

});

database.ref().on("child_added", function(snapshot) {

    var sv = snapshot.val();
   

    var commentBox = $("<p>").text(sv.addComment);
    //$("#commentBox").prepend(commentBox.html() + sv.playerOneName);
    $("#commentBox").prepend(commentBox);

}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

 

  if (playerOneChoice === "rock" && playerTwoChoice === "scissors") {
      p1wins++, p2loses++ 
  } else {
      p1loses++, p2wins++
  }

  if (playerOneChoice === "scissors" && playerTwoChoice === "paper") {
    p1wins++, p2loses++ 
} else {
    p1loses++, p2wins++
}

if (playerOneChoice === "paper" && playerTwoChoice === "rock") {
    p1wins++, p2loses++ 
} else {
    p1loses++, p2wins++
}

if (playerOneChoice === playerTwoChoice) {
    tie++
}

 if(playerOne) {
     $("#rockOne").on("click", function() {
         playerOneChoice = "rock"
     });
     $("#paperOne").on("click", function() {
         playerOneChoice = "paper"
     });
     $("#scissorsOne").on("click", function() {
         playerOneChoice = "scissors"
     });
 }

 if(playerTwo) {
    $("#rockOne").on("click", function() {
        playerTwoChoice = "rock"
    });
    $("#paperOne").on("click", function() {
        playerTwoChoice = "paper"
    });
    $("#scissorsOne").on("click", function() {
        playerTwoChoice = "scissors"
    });
}