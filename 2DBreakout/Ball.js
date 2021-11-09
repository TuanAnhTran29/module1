class Ball{
    constructor(x,y,radius,color,dx,dy) {
        this.x= x
        this.y= y
        this.radius= radius
        this.color= color
        this.dx=dx
        this.dy= dy
    }

    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getRadius(){
        return this.radius
    }
    getColor(){
        return this.color
    }
    getDx(){
        return this.dx
    }
    getDy(){
        return this.dy
    }
    setX(x){
        return this.x= x
    }
    setY(y){
        return this.y= y
    }
    setRadius(radius){
        return this.radius= radius

    }
    setColor(color){
        return this.color= color
    }
    setDx(dx){
        return this.dx= dx
    }
    setDy(dy){
        return this.dy=dy
    }


    drawBall(ctx) {
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2)
        ctx.fillStyle= this.color
        ctx.fill()
        ctx.closePath()
    }

}