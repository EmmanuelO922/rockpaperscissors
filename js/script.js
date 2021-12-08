//let randNum;

//$("button").click(function(){
//  let userInput = $("input").val();
//    $(".userChoice").text(userInput);
// randNum = Math.floor(Math.random()*(3));
//   $(".computerChoice").text(randNum);
//  let computerPlay = $(".computerChoice").text;
//  let userPlay = $(".userChoice").text;
//  let winner = "";
//if(randNum === 0){
//  $(".computerChoice").text("rock");
//}
//else if(randNum === 1){
//  $(".computerChoice").text("paper");
//}
//else if(randNum === 2){
//  $(".computerChoice").text("scissors");
//}
//if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
//  $(".computerChoice").text("invalid response")
//  $(".userChoice").text("invalid response")
//}
//Result

//$(".result").text = $(".computerChoice")
//});

let choice = "";
let randNumb;
let compChoice = "";

$("button").click(function(){
  let choice = $("input").val();
  if(choice !== "rock" && choice !== "paper" && choice !== "scissors"){
    $(".computerChoice").text("invalid response")
    $(".userChoice").text("invalid response")
  }
  
  $(".userPlay").text(choice);
  randNumb = Math.floor(Math.random()*3);
  $(".computerPlay").text(randNumb);
  
  if(randNumb == 0){
    compChoice = "rock"
  }
  else if(randNumb == 1){
    compChoice = "paper"
  }
  else if(randNumb == 2){
    compChoice = "scissors"
  }
  
  let winner = "";
  
  if (compChoice === "rock" && choice === "paper"){
    
  }
  else if (compChoice === "scissors" && choice === "rock"){
    
  }
  else if (compChoice === "paper" && choice === "scissors"){
    
  }
  else if (compChoice === "rock" && choice === "scissors"){
    
  }
  else if (compChoice === "paper" && choice === "rock"){
    
  }
  else if (compChoice === "scissors" && choice === "paper"){
    
  }
  
  $(".result").text(winner);
  $(".computerPlay").text(compChoice);
  $(".userPlay").text();
});