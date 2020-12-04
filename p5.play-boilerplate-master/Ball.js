class Ball{
    constructor(x,y,radius){
    var options={
        restitution:0.4,
        density:0.4 
    }
    this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(myWorld,this.body)
}
    display(){
        ellipseMode(RADIUS)
        fill("purple")
        var pos=this.body.position
        ellipse(pos.x,pos.y,this.radius,this.radius)
    }
}