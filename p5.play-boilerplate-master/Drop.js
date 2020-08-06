class Drop{
constructor(){
  this.x = random(width);
  this.y = random(-500,-50);
  this.z = (0,20);
  this.yspeed = map(this.z,0,20,1,20);
  this.length = map(this.z,0,20,10,20);
}

down(){
  this.y = this.y + this.yspeed;
  //this.yspeed = this.yspeed+0.2;

  if (this.y>height){
    this.y = random(-200,-100);
    this.yspeed = map(this.z,0,20,1,20);
  }
}

 display(){
  var thickness = map(this.z,0,20,1,3);
  strokeWeight(thickness);
  stroke("#1ABB9A");
  line(this.x,this.y,this.x,this.y+this.length);
}

}





//Blue => #1ABB9A
 //Dark BG => #2C3D4F")