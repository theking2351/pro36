var ballPosition;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
  
    ballPosition = createSprite(250,250,10,10);
    ballPosition.shapeColor = "red";
  
  
    var BallPosition = database.ref('ball/positions');
    BallPosition.on("value", readPosition);
  }
  
  function draw(){
    background("white");
    
      if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
      }
      else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
      }
      else if(keyDown(UP_ARROW)){
        writePosition(0,-1); 
      }
      else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
      }
      drawSprites();
    
  }
  
  function writePosition(x,y){
    database.ref('ball/positions').set({
      'x': position.x + x ,
      'y': position.y + y
    })
  }
  
  function readPosition(data){
    position = data.val();
  
    ballPosition.x = position.x;
    ballPosition.y = position.y;
  }