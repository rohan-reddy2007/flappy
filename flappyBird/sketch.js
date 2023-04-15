var bg,bgImg
var bottomGround, topGround,bird,birdImg
var obstacleBottom, obstacleTop
var gameOver,gameoverImg,restart,restartImg
var score=0
var PLAY=1
var END=0
var gameState=PLAY
var obstacleAll


function preload(){
    bgImg=loadImage("assets/bg.png")
    birdImg=loadAnimation("assets/bird.gif")
    restartImg=loadImage("assets/restart.png")
    obsTop=loadImage("assets/sprite_pipetop0.png")
    obsBottom=loadImage("assets/sprite_pipebottom0.png")
}
function setup(){
    createCanvas(400,400)
    bg=createSprite(165,485,1,1)
    bg.addImage(bgImg)
    bg.scale=1.3

    obstacleAll = createGroup();

    bottomGround=createSprite(200,390,800,20)
    bottomGround.visible=false

    topGround= createSprite(200,10,800,20)
    topGround.visible=false

    bird=createSprite(100,200,20,50)
    bird.addAnimation("bird",birdImg)
    bird.scale=0.40

}
function draw(){
   bird.velocityY = bird.velocityY + 1
   bird.collide(obstacleAll);
   

   if(keyDown ("space")){
    bird.velocityY = -9
    bird.velocityX = 0
   }


    spawnObstacleTop();
    spawnObstaclebottom();

    drawSprites()
}

function spawnObstacleTop(){
    if(World.frameCount%60 === 0){
      var obstacleTop = createSprite(400,50, 0, 0)
      obstacleTop.velocityX = -5
      obstacleTop.scale = 1.5
      obstacleTop.addImage(obsTop)
      obstacleAll.add(obstacleTop)
    }
}

function spawnObstaclebottom(){
    if(World.frameCount%60 === 0){
      var obstacleBottom = createSprite(400,340, 0, 0)
      obstacleBottom.velocityX = -5
      obstacleBottom.scale = 1.5
      obstacleBottom.addImage(obsBottom)
      obstacleAll.add(obstacleBottom)
    }
}