var balloon,balloonImage1,balloonImage2;
// create database and position variable here
var database,height

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadImage("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  var balloonHeight=database.ref('balloon/height')
  balloonHeight.on("value",readHeight,showError)
  createCanvas(1100,700);

  balloon=createSprite(250,450,150,150);
  balloon.addImage("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  
background(bg)

  if(keyDown(LEFT_ARROW)){
    updateHeight(-2,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    


    //write code to move air balloon in left direction
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(2,0)
    balloon.addAnimation("hotAirBalloon",balloonImage2);


    //write code to move air balloon in right direction
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   

    //write code to move air balloon in up direction
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,6)
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   
    //write code to move air balloon in down direction
  }
 
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
      'x':height.x+x,
      'y':height.y+y
  })
}

function readHeight(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
  console.log(height.x)
  
}

function showError(){
  console.log("Error in writing database")
}