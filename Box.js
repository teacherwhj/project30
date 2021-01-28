class Box  {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:1,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visibility=255
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
   if(this.body.speed<3){
    rect(pos.x, pos.y, this.width, this.height);
   }
   else{
    
    push();
    this.visibility=this.visibility-1;
    tint(255,this.visibility);
    pop();
    World.remove(world,this.body);
   }
    console.log(this.body.speed)

  }
};
