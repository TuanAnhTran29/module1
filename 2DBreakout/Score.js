class Score{
    constructor(x,y,score,color,font) {
        this.x=x
        this.y= y
        this.score= score
        this.color= color
        this.font= font
    }


    getX(){
        return this.x
    }

    getY(){
        return this.y
    }
    getScore(){
        return this.score
    }
    getColor(){
        return this.color
    }
    getFont(){
        return this.font
    }
    setX(x){
        return this.x= x
    }
    setY(y){
        return this.y= y
    }
    setScore(score){
        return this.score= score
    }
    setColor(color){
        return this.color= color
    }
    setFont(font){
        return this.font = font
    }



    drawScore(ctx){
        ctx.font= this.font
        ctx.fillStyle= this.color
        ctx.fillText("Score " + this.score, this.x, this.y)
    }
}