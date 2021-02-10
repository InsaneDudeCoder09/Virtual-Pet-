var dog, happyDog, database, foodS, foodStock;

var dog_img, happyDog_img;

function preload()
{
dog_img = loadImage("images/dogImg.png");
happyDog_img = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog =createSprite(200,200);
  dog.addImage(dog_img);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog_img);
}

  drawSprites();
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


