var PLAY=1;
var END=0;
var gameState=PLAY;
var gameState="serve";
var gameSate="instruct";
var score=0;
var hit=0;

var BGImg,BG2Img,BG3Img,BG4Img,BgCImg,BgCImg;

var ground,Man,back,bulletImg,bullet,Bullets,gameOver,gameOverImg,restart,retartImg,good,goodImg,amazing,amazingImg,wonderful,wonderfulImg,startImg;
var terrorStop,trStop;
var playImg,play,pauseImg,pause,home,homeImg,flag,flagImg;
var instructImg,instruct,goImg,go;
var fire1Img,fire2Img,fire3Img,ManRIMG,CoinsImg,coins,pondImg,pond,embersImg,embers;

var trrorImg,terror,tr,trImg,zmImg,zm,gh1Img,gh2Img,ghost1,ghost2,skullImg,skull,witchImg,witch,dinoImg,dino;
var tank,tankImg,victory,victoryImg;
var lvl2Img,lvl2,lvl3Img,lvl3,bmb1Img,bmb2IMG,rck1Img,rck2Img,rck1,rck2,bmb1,bmb2,heli,heliImage;
var ppl1,ppl1Img,ppl2,ppl2Img,pplGrp1,pplGrp2,pplGrp1Img,armyGroupImg;
var runSound,coinSound,foxSound,fireSound,goodLuck;
var manStop;
var jungleMusic,warMusic,horrorMusic;
var button;
var vande

function preload(){
  
  ManRIMG=loadAnimation("SoldR/Sol1.png","SoldR/Sol2.png","SoldR/Sol3.png","SoldR/Sol4.png","SoldR/Sol5.png","SoldR/Sol6.png");
  terrorImg=loadAnimation("Terror/terrorist1.png","Terror/terrorist2.png","Terror/terrorist3.png","Terror/terrorist4.png","Terror/terrorist5.png","Terror/terrorist6.png","Terror/terrorist7.png","Terror/terrorist8.png","Terror/terrorist9.png","Terror/terrorist10.png","Terror/terrorist11.png");
  terrorStop=loadImage("Terror/terrorist1.png");
  zmImg=loadAnimation("ZG/zombie1.png","ZG/zombie2.png","ZG/zombie3.png","ZG/zombie4.png");
  trImg=loadAnimation("Terror/t1.png","Terror/t2.png","Terror/t3.png","Terror/t4.png","Terror/t5.png","Terror/t6.png")
  dinoImg=loadImage("Lvls/flyDino.png");
  trStop=loadImage("Terror/t1.png");

  manStop=loadImage("SoldR/Sol1.png");

  BGImg=loadImage("BgWar.png");
  BG2Img=loadImage("Back.png");
  BG3Img=loadImage("HrBg.png");
  BG4Img=loadImage("base.png");
  BgCImg=loadImage("city.png");
  
  gh1Img=loadImage("ghosts/ghost1.png");
  gh2Img=loadImage("ghosts/ghost2.png");
  skullImg=loadImage("ghosts/skull.png");
  witchImg=loadImage("ghosts/witch.png");

  fire1Img=loadImage("fire1.png");
  fire2Img=loadImage("fire2.png");
  fire3Img=loadImage("fire3.png");

  CoinsImg=loadImage("coins2.png");

  bulletImg=loadImage("bullet.png");
  
  gameOverImg=loadImage("gameEnd.png");
  restartImg=loadImage("Restart.png");
  victoryImg=loadImage("victory.png");
  
  goodImg=loadImage("Good.png");
  amazingImg=loadImage("Amazing.png");
  wonderfulImg=loadImage("wonderful.png");
  
  startImg=loadImage("Start.png");
  playImg=loadImage("Play.png");
  pauseImg=loadImage("Pause.png");
  homeImg=loadImage("home.png");

  lvl2Img=loadImage("Lvls/lvl2.png");
  lvl3Img=loadImage("Lvls/lvl3.png");
  bmb1Img=loadImage("Lvls/bomb1.png");
  bmb2Img=loadImage("Lvls/bomb2.png");
  rck1Img=loadImage("Lvls/rock1.png");
  rck2Img=loadImage("Lvls/rock2.png");
  heliImg=loadImage("Lvls/heli.png");
  flagImg=loadImage("Lvls/tri.png");
  tankImg=loadImage("Lvls/tank.png");

  instructImg=loadImage("instruct.png");
  goImg=loadImage("goBack.png");

  ppl1Img=loadImage("Lvls/ppl1.png");
  ppl2Img=loadImage("Lvls/ppl2.png");
  pplGrp1Img=loadImage("Lvls/pplGrp1.png");
  armyGrpImg=loadImage("Lvls/armyGrp.png");
  

  //load sounds.
  runSound=loadSound("Sounds/Man.mpeg");
  shootSound=loadSound("Sounds/gunShoot.mpeg");
  coinSound=loadSound("Sounds/scoreSound.mpeg");
  fireSound=loadSound("Sounds/fireVoice.mpeg");
  jungleMusic=loadSound("Sounds/BirdsSound.mp3");
  warMusic=loadSound("Sounds/warmusic.mp3");
  goodLuck=loadSound("Sounds/goodLuck.mp3");
  horrorMusic=loadSound("Sounds/horrorMusic.mp3");
  vande=loadSound("Sounds/vande.mp4");
}

 
function setup(){
  createCanvas(displayWidth,displayHeight);
  
  back=createSprite(width/2,height/2,1,1);
  back.addImage("war background",BGImg);
  back.addImage("jungle background",BG2Img);
  back.addImage("horror background",BG3Img)
  back.addImage("base image",BG4Img);
  back.addImage("city image",BgCImg);
  back.scale=1;
  
  ground=createSprite(width/2,height-70,20000,10);
  ground.visible=false;
  
  ppl1=createSprite(width/2-400,ground.y-50,1,1);
  ppl1.addImage(ppl1Img);
  ppl1.scale=0.6;
  ppl1.visible=false;

  tank=createSprite(width/2+450,ground.y-50,1,1);
  tank.addImage(tankImg);
  tank.scale=0.6;
  tank.visible=false;

  ppl2=createSprite(width/2+80,ground.y-40,1,1);
  ppl2.addImage(armyGrpImg);
  ppl2.scale=0.7;
  ppl2.visible=false;

  Man=createSprite(70,height-400,30,30);
  Man.addAnimation("Man",ManRIMG);
  Man.addImage("Man stop",manStop);
  Man.scale=0.3;
  Man.debug=false;
  Man.setCollider("rectangle",0,0,150,400);
  
  gameOver=createSprite(width/2,height/2-100,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.6;
  gameOver.visible=false;
  
  restart=createSprite(width/2,height/2+100,1,1);
  restart.addImage(restartImg);
  restart.scale=0.3;
  restart.visible=false;

  victory=createSprite(width/2,height/2-100,1,1);
  victory.addImage(victoryImg);
  victory.scale=0.4;
  victory.visible=false;
  
  good=createSprite(width/2-100,height/2,1,1);
  good.addImage(goodImg);
  good.scale=0.4;
  good.visible=false;
  
  amazing=createSprite(width/2-100,height/2,1,1);
  amazing.addImage(amazingImg);
  amazing.scale=0.4;
  amazing.visible=false;
  
  wonderful=createSprite(width/2-100,height/2,1,1);
  wonderful.addImage(wonderfulImg);
  wonderful.scale=0.8;
  wonderful.visible=false;
  
  start=createSprite(width-110,height-40,1,1);
  start.addImage(startImg);
  start.scale=0.3;
  start.visible=false;
   
  play=createSprite(width/2,height/2,1,1);
  play.addImage(playImg);
  play.scale=0.6;
  play.visible=true;
  
  pause=createSprite(100,30,1,1);
  pause.addImage(pauseImg);
  pause.scale=0.4;
  pause.visible=true;
  
  home=createSprite(50,30,1,1);
  home.addImage(homeImg);
  home.scale=0.4;
  home.visible=false;

  lvl2=createSprite(width/2,height/2-280,1,1);
  lvl2.addImage("level 2",lvl2Img);
  lvl2.scale=0.4;
  lvl2.visible=false;

  lvl3=createSprite(width/2,height/2-280,1,1);
  lvl3.addImage("level 3",lvl3Img);
  lvl3.scale=0.4;
  lvl3.visible=false;

  flag=createSprite(width/2+400,ground.y-150,1,1);
  flag.addImage(flagImg);
  flag.scale=1.2;
  flag.visible=false;

  instruct=createSprite(start.x-150,height-40,1,1);
  instruct.addImage(instructImg);
  instruct.scale=0.4;
  instruct.visible=false;

  go=createSprite(start.x,start.y-100,1,1);
  go.addImage(goImg);
  go.scale=0.4;
  go.visible=false;

  if(score===0){
    goodLuck.play();
  }

  bullets=new Group();
  bulletsLeft=new Group()
  obstaclesGroup = new Group();
  fireGroup=new Group();
  coinsGroup=new Group();
  terrorGroup=new Group();
  ghost1Group=new Group();
  ghost2Group=new Group();
  witchGroup=new Group();
  skullGroup=new Group();
  rck1Group=new Group();
  rck2Group=new Group();
  zmGroup=new Group();
  bmb1Group=new Group();
  bmb2Group=new Group();
  trGroup=new Group();
  heliGroup=new Group();
  dinoGroup=new Group();
}

function draw(){
  //background(220);
  
  //console.log(Man.y);
  if(gameState==="serve"){ 
   Man.visible=false;
   start.visible=true;
   play.visible=false;
   pause.visible=false;
   home.visible=false;
   instruct.visible=true;
   go.visible=false;
   back.changeImage("base image",BG4Img)
   
  if(mousePressedOver(start)){
    gameState=PLAY;
  }
 }
  
    if (keyDown("enter") && gameState ==="serve") {
      gameState = PLAY;
    }

    if (mousePressedOver(instruct) && gameState ==="serve") {
      gameState = "instruct";
    }
  
    if(gameState==="instruct"){
      start.visible=false;
      instruct.visible=false;
      go.visible=true;
    }

    if (mousePressedOver(go) && gameState ==="instruct") {
      gameState = "serve";
    }

  if(gameState===PLAY){
  
  Man.visible=true;
  start.visible=false;
  play.visible=false;
  pause.visible=true;
  home.visible=true;
  instruct.visible=false;
  var edges=createEdgeSprites();
  Man.collide(edges);
    
    if(keyWentDown("left")||(keyWentDown("right")))
    {
       runSound.play();
    }
    
  back.velocityX = -5;

  if(back.x<=170){
    back.x=back.width/3;

    if(score>=0){
      warMusic.play();
    }
    if(score>=20){
      lvl2.visible=true;
      warMusic.stop ();
      jungleMusic.play();
    }
    if(score>=30){
      lvl2.visible=false;
    }
    if(score>=40){
      lvl3.visible=true;
      jungleMusic.stop();
      horrorMusic.play();
    }
    if(score>=50){
      lvl3.visible=false;
    }
  }

  if(score>=0){
    Bg1();
  }

  if(score>=20){
    Bg2();
  }

  if(score>=40){
    Bg3();
  }
    
  if(keyDown("up")&& Man.y>=ground.y-80){
      Man.velocityY = -25;
    }
  Man.velocityY = Man.velocityY + 0.9

  if(keyDown("right")){
    Man.x=Man.x+7
  }
  if(keyDown("left")){
    Man.x=Man.x-7
  }
        
  if(keyWentDown("space")){
    createBullet();
    shootSound.play();
  }
  
  if(bullets.isTouching(terrorGroup)){
    bullets.destroyEach();
    terrorGroup.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(zmGroup)){
    bullets.destroyEach();
    zmGroup.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(ghost1Group)){
    bullets.destroyEach();
    ghost1Group.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(ghost2Group)){
    bullets.destroyEach();
    ghost2Group.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(witchGroup)){
    bullets.destroyEach();
    witchGroup.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(trGroup)){
    bullets.destroyEach();
    trGroup.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(skullGroup)){
    bullets.destroyEach();
    skullGroup.destroyEach();
    score=score+5;
  }
  if(bullets.isTouching(dinoGroup)){
    bullets.destroyEach();
    dinoGroup.destroyEach();
    score=score+5;
  }
  if(Man.isTouching(coinsGroup)){
      coinsGroup.destroyEach();
      score=score+10;
      coinSound.play();
  }

    terrorGroup.setVelocityXEach(-(8+score/30));
    bmb1Group.setVelocityYEach((7 + score/30));
    bmb2Group.setVelocityYEach((7 + score/30));
    fireGroup.setVelocityYEach((7 + score/30));
    rck1Group.setVelocityYEach((7 + score/30));
    rck2Group.setVelocityYEach((7 + score/30));
    zmGroup.setVelocityXEach(-(9 + score/30));
    dinoGroup.setVelocityXEach(-(9+score/30));
    coinsGroup.setVelocityXEach(-(7 + score/30));
    ghost1Group.setVelocityXEach(-(7+score/30));
    ghost2Group.setVelocityXEach(-(7+score/30));
    witchGroup.setVelocityXEach(-(7+score/30));
    skullGroup.setVelocityXEach(-(7+score/30));
    trGroup.setVelocityXEach(-(8+score/30));
    heliGroup.setVelocityXEach(-(10+score/30));
     
    spawnCity();

  var selectCoins = Math.round(random(1,1));
  if (World.frameCount %230 == 0) {
    if (selectCoins == 1) {
      spawnCoins();
    }
  }
  
  Man.collide(ground);
  if(keyWentDown("esc")||mousePressedOver(pause)){
    gameState="pause"
    
  }
  if(mousePressedOver(home)){
    gameState="serve";
    start.visible=true;
    score=0;
    Man.velocityX=0;
    Man.velocityY=0;
    back.velocityX=0;
    back.x=width/2;

    warMusic.stop();
    jungleMusic.stop();
    horrorMusic.stop();

    coinsGroup.destroyEach();
    zmGroup.destroyEach();
    terrorGroup.destroyEach();
    trGroup.destroyEach();
    heliGroup.destroyEach();
    bmb1Group.destroyEach();
    bmb2Group.destroyEach();
    rck1Group.destroyEach();
    rck2Group.destroyEach();
    fireGroup.destroyEach();
    witchGroup.destroyEach();
    ghost1Group.destroyEach();
    ghost2Group.destroyEach();
    skullGroup.destroyEach();
    bullets.destroyEach();
    
    terrorGroup.setVelocityXEach(0);
    zmGroup.setVelocityXEach(0);
    fireGroup.setVelocityYEach(0);
    coinsGroup.setVelocityXEach(0);
    witchGroup.setVelocityXEach(0);
    ghost1Group.setVelocityXEach(0);
    ghost2Group.setVelocityXEach(0);
    skullGroup.setVelocityXEach(0);
    
  }
    if(fireGroup.isTouching(Man)||terrorGroup.isTouching(Man)||zmGroup.isTouching(Man)||witchGroup.isTouching(Man)||skullGroup.isTouching(Man)||ghost1Group.isTouching(Man)||ghost2Group.isTouching(Man)||bmb1Group.isTouching(Man)||bmb2Group.isTouching(Man)||rck1Group.isTouching(Man)||rck2Group.isTouching(Man)||trGroup.isTouching(Man)||dinoGroup.isTouching(Man)){
    gameState = END;
    }
}
  else if(gameState==="pause"){
    
    pause.visible=false;
    play.visible=true;
    Man.velocityY=0;
    back.velocityX=0;
    start.visible=false;

    terrorGroup.setVelocityXEach(0);
    trGroup.setVelocityXEach(0);
    zmGroup.setVelocityXEach(0);
    fireGroup.setVelocityYEach(0);
    coinsGroup.setVelocityXEach(0);
    witchGroup.setVelocityXEach(0);
    ghost1Group.setVelocityXEach(0);
    ghost2Group.setVelocityXEach(0);
    skullGroup.setVelocityXEach(0);
    heliGroup.setVelocityXEach(0);
    bmb2Group.setVelocityYEach(0);
    bmb1Group.setVelocityYEach(0);
    rck1Group.setVelocityYEach(0);
    rck2Group.setVelocityYEach(0);
    dinoGroup.setVelocityXEach(0);
    
    warMusic.stop();
    jungleMusic.stop();
    horrorMusic.stop();
    runSound.stop();
    
    start.visible=false;
    if(keyWentDown("esc")||mousePressedOver(play)){
      gameState=PLAY;
      Man.changeAnimation("Man",ManRIMG);
      Man.x=Man.x;
      Man.y=Man.y;
    }
    if(score>=80){
      play.visible=false;
      Man.changeImage("Man stop",manStop);
      restart.x=width/2-500;
      restart.y=height/2-300;
      vande.play();
    }
    if(mousePressedOver(restart)||keyDown("enter")){
      reset();
    }
    
  }
  else if (gameState === END) {
    
    gameOver.visible = true;
    restart.visible = true;
    pause.visible=false;
    victory.visible=false;
    play.visible=false;
    home.visible=false;
    start.visible=false;
    lvl2.visible=false;
    lvl3.visible=false;
    
    ground.velocityX = 0;
    back.velocityX = 0;
    
    warMusic.stop();
    jungleMusic.stop();
    horrorMusic.stop();
    fireSound.stop();
    runSound.stop();
      
      //set lifetime of the game objects so that they are never destroyed
    terrorGroup.setLifetimeEach(-1);
    trGroup.setLifetimeEach(-1);
    zmGroup.setLifetimeEach(-1);
    fireGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    witchGroup.setLifetimeEach(-1);
    ghost1Group.setLifetimeEach(-1);
    ghost2Group.setLifetimeEach(-1);
    skullGroup.setLifetimeEach(-1);
    bmb2Group.setLifetimeEach(-1);
    bmb1Group.setLifetimeEach(-1);
    rck2Group.setLifetimeEach(-1);
    rck1Group.setLifetimeEach(-1);
    bmb1Group.setLifetimeEach(-1);
    bmb2Group.setLifetimeEach(-1);
    dinoGroup.setLifetimeEach(-1);
    
    Man.velocityX=0;
    Man.velocityY=0;
    Man.visible=false;
    
    good.visible=false;
    amazing.visible=false;
    wonderful.visible=false;
    
    bullets.destroyEach();
    terrorGroup.destroyEach();
    trGroup.destroyEach();
    zmGroup.destroyEach();    
    fireGroup.destroyEach();
    coinsGroup.destroyEach();
    witchGroup.destroyEach();
    ghost1Group.destroyEach();
    ghost2Group.destroyEach();
    skullGroup.destroyEach();
    bmb1Group.destroyEach();
    bmb2Group.destroyEach();
    rck1Group.destroyEach();
    rck2Group.destroyEach();
    bmb1Group.destroyEach();
    bmb2Group.destroyEach();
    heliGroup.destroyEach();
    dinoGroup.destroyEach();
    
    if(mousePressedOver(restart)||keyDown("enter")){
      reset();
    }
   }
  
  drawSprites();
  if(gameState===PLAY||gameState===END||gameState==="pause"){
    stroke("green");
    strokeWeight(5);
    fill("golden");
    textSize(20);
    text("Score:"+score, width-130, 50);
  }
  
  if(gameState==="instruct"){
   stroke("orange");
   strokeWeight(5);
   fill("Golden");
   textSize(20);
    text("Press up arrow key to jump.",width/2-150,height/2);
    text("Press right arrow to move forward.",width/2-150,height/2+30);
    text("Press left arrow to move backward.",width/2-150,height/2+60);
    text("Press spacebar key to shoot.",width/2-150,height/2+90);
  }
  
  if(score>=50){
    good.visible=true;
  }
  if(score>=60){
    good.visible=false;
  }
  if(score>=150){
    amazing.visible=true;
  }
  if(score>=160){
    amazing.visible=false;
  }
  if(score>=300){
    wonderful.visible=true;
  }
  if(score>=310){
    wonderful.visible=false;
  }
  
  if(gameState===END){
    stroke("red");
    strokeWeight(5);
    fill("Golden");
    textSize(20);
    text("Press Enter to restart the game.",width/2,height/2+150);
    text("Or left click over restart",width/2,height/2+180);
  }
}

function spawnCoins() {
  var coins = createSprite(width-10,Math.round(random(100,400)), 10, 10);
  coins.debug=false;
  coins.setCollider("circle",0,0,40);
  coins.addImage("Coins",CoinsImg);
  //coins.velocityX = -(5 + score/50);
  coins.lifetime = 300;
  coins.scale = 0.4;
  coinsGroup.add(coins)
}

// Creating  bullets for bow
 function createBullet() {
  var bullet= createSprite(100, 100, 60, 10);
  // to debug the bullets
  bullet.debug=false;
  bullet.addImage(bulletImg);
  bullet.x = Man.x;
  bullet.y=Man.y-25;
  bullet.velocityX = 30;
  bullet.lifetime = 400;
  bullet.scale = 0.04;
  bullets.add(bullet)
 }

function reset(){
  gameState = PLAY; 
  Man.visible=false;
  Man=createSprite(70,height-400,30,30);
  Man.addAnimation("Man",ManRIMG);
  Man.scale=0.3;

  gameOver.visible = false; 
  restart.visible = false;
  victory.visible=false;
  ppl2.visible=false;
  ppl1.visible=false;
  tank.visible=false;
  flag.visible=false;
  
  back.velocityX=-3;
  
  bullets.destroyEach();
  terrorGroup.destroyEach();
  zmGroup.destroyEach();    
  fireGroup.destroyEach();
  coinsGroup.destroyEach();
  witchGroup.destroyEach();
  ghost1Group.destroyEach();
  ghost2Group.destroyEach();
  skullGroup.destroyEach();
  score=0;
  
}


function Bg1(){
  if(gameState===PLAY){
    back.changeImage("war background",BGImg);
    ground.y=height-150;
    var selectbomb = Math.round(random(1,2));
    vande.stop();
    if(World.frameCount%100 == 0){
      if (selectbomb == 1) {
        spawnBomb1(); 
      }else if(selectbomb == 2){
        spawnBomb2();
      }
    }
    //creating continous enemies
  var selectterrors = Math.round(random(1,2));
  if (World.frameCount % 80 == 0) {
    if (selectterrors == 1) {
    spawnTerror();
  }else if(selectterrors == 2){
    spawnTr();
  }
  }

  var selectHeli = Math.round(random(1,1));
  if (World.frameCount % 100 == 0) {
    if (selectHeli == 1) {
    spawnHelis();
  }
  }
  }
}
function spawnTr() {
  var tr = createSprite(width-0,ground.y-70, 10, 10);
  tr.collide(ground);
  tr.debug=false;
  tr.setCollider("rectangle",0,0,300,400);
  tr.addAnimation("terror animation",trImg);
  //rck1.velocityY = -(5 + score/50);
  tr.lifetime = 800;
  tr.scale = 0.6;
  trGroup.add(tr);
}

function spawnTerror() {
  var terror = createSprite(width-0,ground.y-70, 10, 10);
  terror.collide(ground);
  terror.debug=false;
  terror.setCollider("rectangle",0,0,250,230);
  terror.addAnimation("running terrorists",terrorImg);
  terror.addImage("terror Stop",terrorStop);
  //terror.velocityX = -(8+score/5);
  terror.lifetime = 800;
  terror.scale = 0.4;
  terrorGroup.add(terror);

}

function spawnBomb1() {
  var bmb1 = createSprite(Math.round(random(10,windowWidth-0)),0, 10, 10);
  bmb1.collide(ground);
  bmb1.debug=false;
  bmb1.setCollider("rectangle",0,0,300,400);
  bmb1.addAnimation("bomb 1 image",bmb1Img);
  //rck2.velocityY = -(5 + score/50);
  bmb1.lifetime = 800;
  bmb1.scale = 0.2;
  bmb1Group.add(bmb1);
}

function spawnBomb2() {
  var bmb2 = createSprite(Math.round(random(10,windowWidth-0)),0, 10, 10);
  bmb2.debug=false;
  bmb2.setCollider("rectangle",0,0,300,400);
  bmb2.addAnimation("bomb 2 image",bmb2Img);
  //rck2.velocityY = -(5 + score/50);
  bmb2.lifetime = 800;
  bmb2.scale = 0.2;
  bmb2Group.add(bmb2);
}

function spawnHelis() {
  var heli = createSprite(width-0,Math.round(random(0,100)), 10, 10);
  heli.debug=false;
  heli.setCollider("rectangle",0,0,500,300);
  heli.addImage("Fighter helicopter",heliImg);
  //coins.velocityX = -(5 + score/50);
  heli.lifetime = 300;
  heli.scale = 0.2;
  heliGroup.add(heli);
}

function Bg2(){
  if(gameState===PLAY){
  back.changeImage("jungle background",BG2Img);
  bmb2Group.destroyEach();
  bmb1Group.destroyEach();
  terrorGroup.destroyEach();
  trGroup.destroyEach();
  heliGroup.destroyEach();

  var selectfire = Math.round(random(1,1));
  if (World.frameCount %80 == 0) {
    if (selectfire == 1) {
      spawnFires(); 
    }
  }

  if(score>=30){
    var selectfire = Math.round(random(1,1));
    if (World.frameCount %100 == 0) {
    if (selectfire == 1) {
      spawnFires(); 
    }
  }
  }
  var selectzombies = Math.round(random(1,2));
  if (World.frameCount % 80 == 0) {
  if(selectzombies == 1){
    spawnZM();
  }else if(selectzombies == 2){
    spawnDino();
  }
  }
}
}
function spawnFires() {
  var fire = createSprite(Math.round(random(0, width-10)),0, 10, 10);
  fire.debug=false;
  fire.setCollider("circle",0,20,20);
  fire.addImage(fire1Img);
  //fire.velocityY = (6 + score/50);
  fire.lifetime = 800;
  fire.scale = 0.9;
  fireSound.play()
  fireGroup.add(fire)
}

function spawnZM() {
  var zm = createSprite(width-0,ground.y-90, 10, 10);
  zm.collide(ground);
  zm.debug=false;
  zm.setCollider("rectangle",0,0,150,200);
  zm.addAnimation("ground zombie",zmImg);
  //zm.velocityX = -(5 + score/50);
  zm.lifetime = 800;
  zm.scale = 0.5;
  zmGroup.add(zm);
}

function spawnDino() {
  var dino = createSprite(width-0,ground.y-90, 10, 10);
  dino.collide(ground);
  dino.debug=false;
  dino.setCollider("rectangle",0,0,150,200);
  dino.addImage("dinosaurs",dinoImg);
  //dino.velocityX = -(5 + score/50);
  dino.lifetime = 800;
  dino.scale = 0.5;
  dinoGroup.add(dino);
}


function Bg3(){
  if(gameState===PLAY){
    back.changeImage("horror background",BG3Img);    
    ground.y=height-60;
  if(keyDown("up")&& Man.y>=ground.y-80){
      Man.velocityY = -80;
  }
  fireSound.stop();
  terrorGroup.destroyEach();
  fireGroup.destroyEach();
  zmGroup.destroyEach();
  dinoGroup.destroyEach();

  terrorGroup.setLifetimeEach(-1);
  zmGroup.setLifetimeEach(-1);
  fireGroup.setLifetimeEach(-1);

    var ghost = Math.round(random(1,4));
  if (World.frameCount %80 == 0) {
    if (ghost == 1) {
      spawnGh1();
    }else if(ghost == 2){
      spawnGh2();
    
    }else if(ghost == 3){
      spawnWitch();
    }
    else if(ghost == 4){
      spawnSkull();
    }
  }

  if(score>=300){
    var ghost = Math.round(random(1,4));
  if (World.frameCount %100 == 0) {
    if (ghost == 1) {
      spawnGh1();
    }else if(ghost == 2){
      spawnGh2();
    
    }else if(ghost == 3){
      spawnWitch();
    }
    else if(ghost == 4){
      spawnSkull();
    }
  }
}
  var rocks = Math.round(random(1,2));
  if(World.frameCount %60 == 0){
    if(rocks == 1){
      spawnRock1();
    }else if(rocks == 2){
      spawnRock2();
    }
  }
  if(score>=60){
  var rocks = Math.round(random(1,2));
  if(World.frameCount %110 == 0){
    if(rocks == 1){
      spawnRock1();
    }else if(rocks == 2){
      spawnRock2();
    }
  }
}
  }
}

function spawnGh1() {
  var ghost1 = createSprite(width-0,ground.y-90, 10, 10);
  ghost1.collide(ground);
  ghost1.debug=false;
  ghost1.setCollider("rectangle",0,0,100,120);
  ghost1.addAnimation("ghost 1",gh1Img);
  //ghost1.velocityX = -(5 + score/50);
  ghost1.y=Man.y;
  ghost1.lifetime = 800;
  ghost1.scale = 0.8;
  ghost1Group.add(ghost1);
}

function spawnGh2() {
  var ghost2 = createSprite(width-0,ground.y-150, 10, 10);
  ghost2.collide(ground);
  ghost2.debug=false;
  ghost2.setCollider("rectangle",0,0,230,290);
  ghost2.addAnimation("ghost 2",gh2Img);
  //ghost2.velocityX = -(5 + score/50);
  ghost2.y= Man.y;
  ghost2.lifetime = 800;
  ghost2.scale = 0.4;
  ghost2Group.add(ghost2);
}

function spawnWitch(){
  var witch = createSprite(width-0,Man.y, 10, 10);
  witch.collide(ground);
  witch.debug=false;
  witch.setCollider("rectangle",0,0,300,395);
  witch.addAnimation("witch image",witchImg);
  //witch.velocityX = -(5 + score/50);
  witch.y = Man.y;
  witch.lifetime = 800;
  witch.scale = 0.4;
  witchGroup.add(witch);
}

function spawnSkull() {
  var skull = createSprite(width-0,Man.y, 10, 10);
  skull.collide(ground);
  skull.debug=false;
  skull.setCollider("rectangle",0,0,300,400);
  skull.addAnimation("skull image",skullImg);
  //skull.velocityX = -(5 + score/50);
  skull.y = Man.y;
  skull.lifetime = 800;
  skull.scale = 0.4;
  skullGroup.add(skull);
}

function spawnRock1() {
  var rck1 = createSprite(Math.round(random(10,windowWidth-0)),0, 10, 10);
  rck1.collide(ground);
  rck1.debug=false;
  rck1.setCollider("rectangle",0,0,300,400);
  rck1.addAnimation("rock 1 image",rck1Img);
  //rck1.velocityY = -(5 + score/50);
  rck1.lifetime = 800;
  rck1.scale = 0.2;
  rck1Group.add(rck1);
}

function spawnRock2() {
  var rck2 = createSprite(Math.round(random(10,windowWidth-0)),0, 10, 10);
  rck2.collide(ground);
  rck2.debug=false;
  rck2.setCollider("rectangle",0,0,300,400);
  rck2.addAnimation("rock 1 image",rck2Img);
  //rck2.velocityY = -(5 + score/50);
  rck2.lifetime = 800;
  rck2.scale = 0.2;
  rck2Group.add(rck2);
}

function spawnCity(){
  if(gameState===PLAY){
    if(score>=80){
      gameState="pause";
      back.changeImage("city image",BgCImg);
      witchGroup.destroyEach();
      ghost1Group.destroyEach();
      ghost2Group.destroyEach();
      skullGroup.destroyEach();
      rck1Group.destroyEach();
      coinsGroup.destroyEach();
      rck2Group.destroyEach();
      ground.y=height-20;
      Man.x=Man.x;
      Man.y=height-40;
      flag.visible=true;
      //ppl1.visible=true;
      ppl2.visible=true;
      tank.visible=true;
      victory.visible=true;
      restart.visible=true;
      restart.debug=false;
      play.visible=false;
      home.visible=false;
    }
  }
}