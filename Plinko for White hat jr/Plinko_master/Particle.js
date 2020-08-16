class Particle {
    
    constructor(x, y, radius) {
      var options = {
        
          'restitution':0.3,
      }
      this.r = radius;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill(this.color);
      ellipse(0, 0, 20, 20);
      pop();

      for(var j = 0; j < particles.length; j++){

        particles[j].display();

      }
      for(var k = 0; k < particles.length; k++){

        division[k].display();

      }
      if(particle!=null){
        particle.display();

        if (particle.position.y>760){
          if (particle.position.x<300){
            score = score+500;
            particle=null;
            if (count>= 5) {
              gameState = "end";
            }
          }
        }
      }
}
}