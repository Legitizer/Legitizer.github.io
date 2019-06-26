let y = -1;

let x = -1;

let z = -1;

let r = 0;

let d = 0;

let font;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
  textFont(font);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < 10; i++){
    var b = new body();
  }
}

function draw() {
  background(43);
  body.update();
  textSize(48);
  fill(255);
  
  if (y >= 0){
    text("_Jess", 0, ((y*20)+100*sin(0.12*y))-(height/2)-80);
  }
  
  if (((y*20)+20*sin(0.12*y)) > height+200){
    x+=0.2;
  }else if(y < height){
    y+=0.25;
  }
  
  if (x >= 0){
    text("You don't have to be alone", -(x*x)+(width/2)+500, 0);
  }
  
  if (x > 60){
    z += 0.1;
    textSize(6*sin(1.5*z)+48);
    text("I love you..", 0, 0);
  }else if (false){
    if (d == 0){
      textSize(6*sin(1.5*z)+48);
      d = 1;
    }else{
      textSize(6*sin(1.5*z)+48+d);
    }
    text("I love you..", 0, 0);
    d +=4;
  }
  
  
}