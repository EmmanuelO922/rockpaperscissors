let randNum = 0;

$("button").click(function(){
  let userInput = $("input").val();
    $(".userChoice").text(userInput);
  randNum = Math.ceil(Math.random()*3);
    $(".computerChoice").text(randNum);
//if(randNum = 1){
//  $(".computerChoice").text("rock");
//}
//else if(randNum = 2){
//  $(".computerChoice").text("paper");
//}
//else{
//  $(".computerChoice").text("scissors");
//};
});