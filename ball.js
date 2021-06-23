class ball{
    constructor(x,y){
        var options = {
            'restitution' : 0.04,
            'density' : 1.2
        }

        this.body = Bodies.circle(x, y, 30, options);
        this.color = color(random(0, 255), random(0.255),random(0.255))
      
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
        fill(this.color);
        ellipse(0,0,this.radius);
        pop();

    } 
}