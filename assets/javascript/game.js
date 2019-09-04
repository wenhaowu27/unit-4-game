
var blueArray = [10,15,20];
var greenArray = [25,30];
var myNum = 0;
var clickNum = [1,2,3,4]
// var redClick = clickNum[Math.floor(Math.random()*clickNum.length)];
// var blueClick = clickNum[Math.floor(Math.random()*clickNum.length)];
// var greenClick = clickNum[Math.floor(Math.random()*clickNum.length)];
// var yellowClick = clickNum[Math.floor(Math.random()*clickNum.length)];
// var redGemNum = Math.floor((Math.random()*10)+1);
// var blueGemNum = blueArray[Math.floor(Math.random()*blueArray.length)];
// var greenGemNum = greenArray[Math.floor(Math.random()*greenArray.length)];
// var yellowGemNum = Math.floor((Math.random()*10)*15);
// var targetNum = redGemNum*redClick + blueGemNum*blueClick + greenGemNum*greenClick + yellowGemNum*yellowClick;
var winCount = 0;
var lossCount = 0;

//function to reset the game
function numReset(){
myNum = 0;
redClick = clickNum[Math.floor(Math.random()*clickNum.length)];
blueClick = clickNum[Math.floor(Math.random()*clickNum.length)];
greenClick = clickNum[Math.floor(Math.random()*clickNum.length)];
yellowClick = clickNum[Math.floor(Math.random()*clickNum.length)];
redGemNum = Math.floor(Math.random()*10+1);
blueGemNum = Math.floor(Math.random()*20+5);
greenGemNum = greenArray[Math.floor(Math.random()*greenArray.length)];
yellowGemNum = (Math.floor(Math.random()*20+5)*5);
targetNum = redGemNum*redClick + blueGemNum*blueClick + greenGemNum*greenClick + yellowGemNum*yellowClick;
}
numReset();

console.log(redGemNum);
console.log(redClick);
console.log(blueGemNum);
console.log(blueClick);
console.log(greenGemNum);
console.log(greenClick);
console.log(yellowGemNum);
console.log(yellowClick);
console.log(targetNum);

//Gem click function

$("#totalScore").html(targetNum);

  $("#redGem").on("click", function() {  

    myNum = myNum + redGemNum;
    $("#scoreBoard").html(myNum);
    targetNumcal();
  });
  $("#blueGem").on("click", function() { 
    myNum = myNum + blueGemNum;  
    $("#scoreBoard").html(myNum);
    
    targetNumcal();
  });
  $("#greenGem").on("click", function() {
    myNum = myNum + greenGemNum;  
    $("#scoreBoard").html(myNum);
    
    targetNumcal();
  });
  $("#yellowGem").on("click", function() { 
    myNum = myNum + yellowGemNum; 
    $("#scoreBoard").html(myNum);
    
    targetNumcal();
    // console.log(targetNum);
    // console.log(myNum);
  });

  $("#gameReset").on("click", function() {  
    numReset();        
  $("#scoreBoard").html("Your number is here");
  $("#totalScore").html(targetNum);
  console.log(redGemNum);
  console.log(redClick);
  console.log(blueGemNum);
  console.log(blueClick);
  console.log(greenGemNum);
  console.log(greenClick);
  console.log(yellowGemNum);
  console.log(yellowClick);
  console.log(targetNum);
  
  });

  //function to check if number matching

function targetNumcal(){
if (myNum === targetNum){
  
    winCount = winCount + 1;
    $("#winScore").html("<h4>Win Count:</43>" + winCount);
    $("#scoreBoard").html("Congrat! You Won!!");
    numReset();
  }
  else if (myNum > targetNum){
  lossCount = lossCount +1;
  $("#lossScore").html("<h4>Loss Count:</h4>" + lossCount);
  $("#scoreBoard").html("You loss! click Reset");
  numReset();
  }
else {
  $("#scoreBoard").html(myNum);
  $("#totalScore").html(targetNum);
  }
}