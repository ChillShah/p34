//Create variables here
var dog,happydog,database,food,foodshop
function preload()
{
  dogimg= loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  foodshop = database.ref("Food");
  foodshop.on("value",readShop);
  dog = createSprite (250,250,10,10)
  dog.addImage(dogimg);
  dog.scale=0.2;
}
food;

function draw() { 
  background(46,139,87) 
  if (keyWentDown(UP_ARROW)) {
    writeshop(food);
    dog.addImage(happydogimg);
  }

  drawSprites();
  //add styles here
  fill("blue");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Kew To Feed drago milk", 80, 100);
  text("You have: " + foodS + " Milk left", 100, 70);
  console.log(foodS);
}

//function to read and write food from database
function readshop(data) {
  foodS = data.val();
}

//function to write values in database
function writeshop(x) {
  if (x <= 0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref("/").update({
    Food: x,
  });
}
  





