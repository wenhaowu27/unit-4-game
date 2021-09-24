$( document ).ready(function() {

  crystal_image = [
    "./assets/images/blue_gem.png",
    "./assets/images/orange_gem2.png",
    "./assets/images/green_gem2.png",
    "./assets/images/purple_gem.png" 
  ]
  
  var myNum = 0;
  var clickNum = [1,2,3,4,5]
  
  var winCount = 0;
  var loseCount = 0;
  var targetNum = 0;
  var numberOptions = [];
  var numClick=[];
  // var imageCrystal = ""
  
  // Function to value reset
  function numReset(){
    targetNum = 0;
    myNum = 0; 
    crystalValue = 0;
    $('#number-to-guess').text(myNum);
    $('#num_u_clicked').text(crystalValue);      
      for (var i = 0; i < crystal_image.length; i++) {
          numClick[i] = clickNum[Math.floor(Math.random()*clickNum.length)];
          numberOptions[i] = Math.floor(Math.random()*10*numClick[i]+1);
          targetNum += numClick[i]*numberOptions[i];
          if (targetNum >= 200){
            numReset()
          }
          console.log(numClick);
          $("#target_number").text(targetNum);
    
    
      }    
      // console.log(numberOptions);
    }
  // Function to image reset
  function imgReset(){ 
      for (var i = 0; i < crystal_image.length; i++) {
     
          // For each iteration, we will create an imageCrystal
          var imageCrystal = $("<img>");
          
          // First each crystal will be given the class ".crystal-image".
          // This will allow the CSS to take effect.
          imageCrystal.addClass("card_img");
          imageCrystal.addClass("crystal_img");
              
          // Each imageCrystal will be given a src link to the crystal image
          imageCrystal.prop("src",crystal_image[i]);
          
          // Each imageCrystal will be given a data attribute called data-crystalValue.
          // This data attribute will be set equal to the array value.
          imageCrystal.attr("data-crystalvalue", numberOptions[i]);
          // console.log(numberOptions);
          
          // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
          $("#crystals").append(imageCrystal);
      }    
    }
        // numReset();
        // imgReset();
        gameReset();
  
        function selectorReset(){
          $('#number-to-guess').text('0');
          $("#target_number").text('0');
          $("#crystals").empty();
          $("#scoreboard").empty();
        }

  function gameReset(){    
    selectorReset();
    numReset();
    imgReset();
    $(".btn").css("visibility", "hidden")
    }


  $("#gamereset").on("click", function(){ 
    gameReset();
  })
  
  $(document).on("click", ".crystal_img",function() {   
      var crystalValue = ($(this).attr("data-crystalvalue"));
      console.log(crystalValue);
      crystalValue = parseInt(crystalValue);
      myNum += crystalValue
  
      // All of the same game win-lose logic applies. So the rest remains unchanged.
      $('#number-to-guess').text(myNum);
      $('#num_u_clicked').text(crystalValue);
          targetNumcal();
    });
  
    // A function to determine win or lose
    function targetNumcal(){
      if (myNum === targetNum){
          // console.log('Win');
          winCount = winCount + 1;
          $("#win_count").text(winCount);
          $("#scoreboard").text("You Won!!").css("visibility", "visible");  
          $(".btn").css("visibility", "visible")   
          event.stopPropagation();    
          // gameReset();
          // numReset();
          // imgReset();
        }
        else if (myNum > targetNum){
          // console.log('Lose');
          loseCount = loseCount +1;
          $("#lose_count").text(loseCount);
          $("#scoreboard").text("You loss!!").css("visibility", "visible");
          $(".btn").css("visibility", "visible")   
          $(".crystal_img").click(function(event){
            event.stopPropagation();
          });
          // gameReset();
          // numReset();
          // imgReset();
        }
      // else {
      //   // $("#scoreBoard").text(myNum);
      //   // $("#totalScore").text(targetNum);
      //   }
      }
//End of Document.ready 
});

