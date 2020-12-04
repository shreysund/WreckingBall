class Box{
    constructor(x,y,width,height){
        var options={
         restitution:0.4    
        }
        this.box=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(myWorld,this.box)
    }
    display(){
        var pos=this.box.position
        push()
        translate(pos.x,pos.y)
        rotate(this.box.angle)
        fill("green")
        strokeWeight(2)
        stroke("black")
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}