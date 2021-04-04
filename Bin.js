class Bin {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width1 = width;
    this.height1 = height;

    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;

    push();

    fill("white");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width1, this.height1);
    pop();
  }
}
