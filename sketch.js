//Variáveis
var trex, trexCorrendo;
var chao;
var canvas;
var gravidade = 0.9;
var forcaPulo = -10;

//carregar animações
function preload(){
  trexCorrendo = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup() {
  canvas = createCanvas(600, 200);
  canvas.center();
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("correndo", trexCorrendo);
  
  //adicione dimensão ao trex
  trex.scale = 0.5;
  
  //crie um sprite ground (solo)
  chao = createSprite(300,180,600,20);
 
}

function draw() {
  background(220);
  drawSprites();

  //pular quando a tecla espaço for pressionada
  if(keyDown("space")) {
    trex.velocityY = forcaPulo;
  }
  
  //simula a gravidade para "cair" após clicar a tecla de pular
  trex.velocityY = trex.velocityY + gravidade
  
 
 //impedir que o trex caia (por conta da gravidade)
  trex.collide(chao);
  
}
