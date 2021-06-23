class plinko2 {
    constructor(x, y, w, h){
   var options = {
       'isStatic' : true,
       'density' : 1.2
   }

   this.body = Bodies.rectangle(x, y, w, h, options)
   this.width = w;
   this.height = h;
   World.add(world, this.body);
    }

    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    rect(0,0, this.width, this.height);
    pop();
    }
}