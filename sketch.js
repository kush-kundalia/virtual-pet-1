var dog , happyDog , database , foodS , foodStock;
var dogImg;
function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
dog = createSprite(250,250,20,20);
dog.addImage(dogImg);
dog.scale = 0.2;
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);

}
  drawSprites();
  textSize(20);
  fill("black");
  stroke("blue");
  text("PRESS UP ARROW TO FEED THE DOG")

}
function readStock(data){
  foodS = data.val();
}
  function writeStock(x){
    if(x<=0){
x=0;
    }else{
      x = x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }



