class Paddle{
    constructor(x, y, height, width, color) {
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        this.color = color
    }

    getX() {
        return this.x
    }

    getY() {
        return this.y
    }

    getHeight() {
        return this.height
    }

    getWidth() {
        return this.width
    }

    getColor() {
        return this.color
    }

    setX(x) {
        return this.x = x
    }

    setY(y) {
        return this.y = y
    }

    setHeight(height) {
        return this.height = height
    }

    setWidth(width) {
        return this.width = width
    }

    setColor(color) {
        return this.color = color
    }




    drawPaddle(ctx) {
        ctx.beginPath()
        ctx.rect(this.x,this.y, this.width, this.height)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()

    }



}