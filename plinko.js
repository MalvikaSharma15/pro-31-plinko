class plinko {
    constructor(x, y){
   var options = {
       'isStatic' : true,
       'density' : 1.2
   }

   this.body = Bodies.circle(x, y, 30,options)
   this.radius = 30;
   World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    ellipseMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0,0,this.radius);
    pop();
    }
}