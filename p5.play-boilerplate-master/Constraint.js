class Chain{
    constructor(body,point){
       var options={
           bodyA:body,pointB:point,
           stiffness:1,
           length:200
      
        } 
        this.chain=Constraint.create(options)
        this.pointB=point
        World.add(myWorld,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position
        var posB=this.chain.pointB
        line(posB.x,posB.y,posA.x,posA.y)
    }
}