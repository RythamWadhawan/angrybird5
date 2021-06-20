class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB 
        this.img1=loadImage("sprites/sling1.png")
        this.img2=loadImage("sprites/sling2.png")
        this.img3=loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x -20, pointA.y, pointB.x -20, pointB.y);
            line(pointA.x -20, pointA.y, pointB.x +20, pointB.y);
               }


               image(this.img1, 289, 29);
               image(this.img2, 260, 20);
               

    }
    
}