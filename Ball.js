class Ball {
  constructor() {
    var options = {
      restitution: 0.3,
      friction: 0.5,
      density: 1.2,
    };
    this.body = Bodies.circle(70, 250, 25, options);

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    push();

    fill("magenta");
    ellipseMode(RADIUS);

    ellipse(pos.x, pos.y, 25, 25);
    pop();
  }
}
