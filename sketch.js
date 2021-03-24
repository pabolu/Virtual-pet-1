//Create variables here
var dog;
var happydog;
var foodS;
var foodStock;
var db;
var doggy;

function preload(){
//load images here
  dog = loadImage ("images/dog.png");
  happydog = loadImage("images/dog1.png");
}
  


function setup() {
	createCanvas(500, 500);
  db = firebase.database();
   foodStock = db.ref('Food');
   foodStock.on("value",readStock);

  doggy = createSprite(100,200);
    doggy.addImage(dog);
    doggy.scale=0.15;
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     doggy.addImage(happydog);
  }
  drawSprites();
  //add styles here
  
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

}


function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  db.ref('/').update({
    Food:x
  })
}

