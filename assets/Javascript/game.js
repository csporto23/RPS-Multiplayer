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

  //ties will only be counted for current games. reset to zero.
  var tie = 0;
  $("#tie").append(tie)

  var userNameOne = null;
  var userNameTwo = null;


  userData1 = {
    player: "",
    choice: "",
    name: "",
    comments: ""
}

userData2 = {
    player: "",
    choice: "",
    name: "",
    comments: ""
}

// database.ref("/userName/").on("value", function(snapshot) {
// 	// Check for existence of userName in the database
// 	if (snapshot.child(userName).exists()) {
// 		console.log("Player 1 exists");

// 		// Record player1 data
// 		userName = snapshot.val().userName;
//         userNameName = userName.name;
//     }
// });
  //if person clicks new game
  $("#new-game").on("click", function(){
        userNameOne = prompt("Player one Name:", "UserName");
       $("#userNameOne").text(userNameOne);

       

      $(".container").css("display", "block");
      $("#startButton").closest('div').remove();

     
    //set initial Player too firebase by userName
     

    database.ref().child("/userName/" + userNameOne).set(userData1);
    database.ref().child("/userName/" + userNameOne + "/player").set(userData1.player + "one");
    database.ref().child("/userName/" + userNameOne + "/name").set(userData1.name + userNameOne);
    

       });

       
    

    //  userNameOne = database.ref().child("/userName/" + userNameOne)

  //if person clicks join game
  $("#join-game").on("click", function(){
      var userNameTwo = prompt("player two:", "Your UserName");
      $("#userNameTwo").text(userNameTwo);

    $(".container").css("display", "block");

    $("#startButton").closest('div').remove();


    database.ref().child("/userName/" + userNameTwo).set(userData2);
    database.ref().child("/userName/" + userNameTwo + "/player").set(userData2.player + "two");
    database.ref().child("/userName/" + userNameTwo + "/name").set(userData2.name + userNameTwo);

});

//adding comments by userName
var addComment = "";

$("#submit-comment").on("click", function(event){
    event.preventDefault();

    addComment = $("#addComment").val().trim();

    database.ref().push({
         addComment,
    });

    database.ref().on("child_added", function(snapshot) {

        var sv = snapshot.val();
       
    
        var commentBox = $("<p>").text($("#userNameOne").text() + ": " + sv.addComment);
        //$("#commentBox").prepend(commentBox.html() + sv.playerOneName);
        $("#commentBox").prepend(commentBox);
    
    }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
      });
});





 //rock paper scissors game logic

  
 if(userData1.player === "one") {
     $("#rockOne").on("click", function() {
        database.ref().child("/userName/" + userNameOne + "/player").set(userData1.choice + "rock");
     });
     $("#paperOne").on("click", function() {
        database.ref().child("/userName/" + userNameOne + "/player").set(userData1.choice + "paper");
     });
     $("#scissorsOne").on("click", function() {
        database.ref().child("/userName/" + userNameOne + "/player").set(userData1.choice + "scissors");
     });
 }

 if(userData2.player === "two") {
    $("#rockTwo").on("click", function() {
        database.ref().child("/userName/" + userNameTwo + "/player").set(userData2.choice + "rock");
        console.log("hey")
    });
    $("#paperTwo").on("click", function() {
        database.ref().child("/userName/" + userNameTwo + "/player").set(userData2.choice + "paper");
    });
    $("#scissorsTwo").on("click", function() {
        database.ref().child("/userName/" + userNameTwo + "/player").set(userData2.choice + "scissors");
    });
}

if (userData1.choice === "rock" && userData2.choice === "scissors") {
    
} else {
   
}

if (userData1.choice === "scissors" && userData2.choice === "paper") {
  
} else {
 
}

if (userData1.choice === "paper" && userData2.choice === "rock") {
   
} else {
 
}

if (userData1.choice === userData2.choice) {
  tie++
}
