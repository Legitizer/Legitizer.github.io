function preload(){
  img = loadImage('heart2.png');
}

class body{
  constructor(){
    
    this.x = random(-width/2, width/2);
    this.y = random(-height/2,height/2);
    this.area = random(10, 20);
    body.instances.push(this);
  }
  
  static update(){
    for (var i = 0; i < body.instances.length; i++){
      var deltaX = (((mouseX)-width/2)-body.instances[i].x);
      var deltaY = (((mouseY)-height/2)-body.instances[i].y);
      
      var mag = sqrt((deltaX*deltaX) + (deltaY*deltaY))
      
      var deltaXunit = 0;
      var deltaYunit = 0;
      if (mag > 0){
        deltaXunit = deltaX/mag;
        deltaYunit = deltaY/mag;
      }
      
      if (mag > body.instances[i].area){
        body.instances[i].x += deltaXunit*10;
        body.instances[i].y += deltaYunit*10;
      }else{
        body.instances[i].x = random(-width/2, width/2);
        body.instances[i].y = random(-height/2, height/2);
      }
      
      image(img, body.instances[i].x,body.instances[i].y);
    }
  }
}

body.instances = [];
