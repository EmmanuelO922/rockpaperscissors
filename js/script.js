let randNum;

$("button").click(function(){
  let userInput = $("input").val();
    $(".userChoice").text(userInput);
  randNum = Math.floor(Math.random()*(3));
    $(".computerChoice").text(randNum);
if(randNum === 0){
  $(".computerChoice").text("rock");
}
else if(randNum === 1){
  $(".computerChoice").text("paper");
}
else if(randNum === 2){
  $(".computerChoice").text("scissors");
}
if(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
  $(".computerChoice").text("invalid response")
}
if(".userChoice" === ".computerChoice"){
  $(".result").text("TIE")
}
});