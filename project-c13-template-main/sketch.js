var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  var ran = Math.round(random(1,3));

  if (frameCount % 80 === 0){
  
    if (ran == 1){
      criarMaças();
    }
    if (ran == 2){
      criarFolhasO();
    }
    if (ran == 3){
      criarFolhasR();
    }
  }
  
  drawSprites();
  
}


function criarMaças(){
 
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY= 3;
  apple.lifetime= 150;

}

function criarFolhasO(){

  folhasO = createSprite(random(50,350),40,10,10);
  folhasO.addImage(orangeImg);
  folhasO.scale=0.08;
  folhasO.velocityY= 3;
  folhasO.lifetime= 150;


}


function criarFolhasR(){
 
  folhasR = createSprite(random(50,350),40,10,10);
  folhasR.addImage(redImg);
  folhasR.scale=0.06;
  folhasR.velocityY= 3;
  folhasR.lifetime= 150;


}