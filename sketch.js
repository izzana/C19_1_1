var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);

  //criar grupos para os sprites
  
}

function draw() {
  background(0);
  
  if(tower.y > 400){
      tower.y = 300
    }

    //condicionais para mover o ghost para adireita e para a esquerda

    //condicional para pular ao clicar em space
    if(keyDown("space")){
      ghost.velocityY = -10;
    }
    //condicional caso o ghost toque algum climber

    //condicional para destruir o ghost

    //chamar função que gera obstáculos
    drawSprites();
}


//criar function para gerar obstáculos
function spawnDoors() {
  //escreva aqui o código para gerar as portas na torre
  if (frameCount % 240 === 0) {
    //criar sprites para door, climber e invisibleBlock

    //adicione as portas aleatoriamente

    
  }
}