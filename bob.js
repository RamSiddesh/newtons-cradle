class BobClass{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse( 0, 0, this.radius, this.radius);
        pop();
      }
}