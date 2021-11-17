let randNum;

$("button").click(function(){
  let userInput = $("input").val();
    $(".userChoice").text(userInput);
  randNum = Math.floor(Math.random()*3);
    $(".computerChoice").text(randNum);
//if(randNum = 0){
  $(".computerChoice").text("rock");
//}
//else if(randNum = 1){
  $(".computerChoice").text("paper");
//}
//else{
  $(".computerChoice").text("scissors");
//};
});