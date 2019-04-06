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

  $("#new-game").on("click", function(){
      $(".container").css("display", "block")
      $("#startButton").closest('div').remove();
  })

  $("#join-game").on("click", function(){
    $(".container").css("display", "block")
    $("#startButton").closest('div').remove();
})