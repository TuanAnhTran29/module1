class Bricks{
    constructor(x,y,height,width,color,status) {
        this.x= x
        this.y=y
        this.height= height
        this.width= width
        this.color= color
        this.status= status

    }

    getX(){
        return this.x

    }
    getY(){
        return this.y
    }
    getHeight(){
        return this.height
    }
    getWidth(){
        return this.width
    }
    getColor(){
        return this.color
    }
    getStatus(){
        return this.status
    }

    setX(x){
        return this.x=x

    }
    setY(y){
        return this.y=y
    }
    setHeight(height){
        return this.height=height
    }
    setWidth(width){
        return this.width=width
    }
    setColor(color){
        return this.color=color
    }
    setStatus(status){
        return this.status= status
    }


    drawBricks(ctx){
        ctx.beginPath()
        ctx.rect(this.x,this.y,this.width,this.height)
        ctx.fillStyle= this.color
        ctx.fill()
        ctx.closePath()
    }
}