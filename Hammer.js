class Hammer{
   
    constructor(x,y,width,height){

        var options={
          'restitution' : 0.5,
          'friction' : 2.0,
          'density' : 2,
        }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
       World.add(world,this.body);
    }

    display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        
        push();
        translate(this.body.position.x, this.body.position.y);
         

        rectMode(CENTER);
        fill("yellow");
        stroke("green");
        strokeWeight("4");
        rect(0,0,this.width,this.height);
        pop();

    }
}