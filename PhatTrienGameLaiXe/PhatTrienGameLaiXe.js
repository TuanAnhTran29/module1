const ORIENTATION_UP= "carUp"
const ORIENTATION_DOWN= "carDown"
const ORIENTATION_LEFT= "carLeft"
const ORIENTATION_RIGHT= "carRight"


const GAMEBOARD_WIDTH= 700
const GAMEBOARD_HEIGHT= 700

const DEFAULT_X_POSITION= 300
const DEFAULT_Y_POSITION= 300
const DEFAULT_ORIENTATION= ORIENTATION_UP
const DEFAULT_SPEED= 20


const CAR_WIDTH= 50
const CAR_HEIGHT= 50


const OBSTACLES_HEIGHT= 30
const OBSTACLES_WIDTH= 30

const COIN_WIDTH= 30
const COIN_HEIGHT=30





function Car(){
    this.width = CAR_WIDTH
    this.height = CAR_HEIGHT
    this.x = DEFAULT_X_POSITION
    this.y = DEFAULT_Y_POSITION
    this.orientation = DEFAULT_ORIENTATION
    this.speed = DEFAULT_SPEED



    this.buildImage= function (){
        this.image= this.orientation + ".png"
    }
    this.buildImage()




    this.run= function (){
        switch (this.orientation){
            case ORIENTATION_UP:
                this.y-= this.speed
                break;
            case ORIENTATION_DOWN:
                this.y+= this.speed
                break;
            case ORIENTATION_LEFT:
                this.x-= this.speed
                break;
            case ORIENTATION_RIGHT:
                this.x+= this.speed
                break;
        }
        this.buildImage()

    }

    this.turn= function (orientation){
        this.orientation= orientation
        this.buildImage()

    }

    this.show= function (ctx){
        let image= new Image()
        let xPosition= this.x
        let yPosition= this.y
        image.onload= function (){
            ctx.drawImage(image, xPosition, yPosition, CAR_WIDTH, CAR_HEIGHT)
            // ctx.beginPath()
            // ctx.rect(xPosition, yPosition, CAR_WIDTH, CAR_HEIGHT)
            // ctx.stroke()
        }

        image.src= './img/' + this.image

    }




}

function GameBoard(){

        this.car= new Car()
        this.rock= new Obstacles()
        this.coin= new Coin()
        this.ctx= undefined

    while( (this.coin.x >= this.rock.x
        && this.coin.x <= this.rock.x+ OBSTACLES_WIDTH
        && this.coin.y >= this.rock.y
        && this.coin.y <= this.rock.y + OBSTACLES_HEIGHT)

        || (this.coin.x + COIN_WIDTH >= this.rock.x
        && this.coin.x + COIN_WIDTH <= this.rock.x+ OBSTACLES_WIDTH
        && this.coin.y >= this.rock.y
        && this.coin.y <= this.rock.y + OBSTACLES_HEIGHT)

        || (this.coin.x >= this.rock.x
        && this.coin.x <= this.rock.x+ OBSTACLES_WIDTH
        && this.coin.y + COIN_HEIGHT >= this.rock.y
        && this.coin.y+ COIN_HEIGHT <= this.rock.y + OBSTACLES_HEIGHT)

        || (this.coin.x + COIN_WIDTH >= this.rock.x
        && this.coin.x + COIN_WIDTH<= this.rock.x+ OBSTACLES_WIDTH
        && this.coin.y + COIN_HEIGHT >= this.rock.y
        && this.coin.y+ COIN_HEIGHT <= this.rock.y + OBSTACLES_HEIGHT)){

            this.coin.x= Math.random() * GAMEBOARD_WIDTH
            this.coin.y= Math.random() * GAMEBOARD_HEIGHT
    }





    this.start= function (){
        this.ctx= document.getElementById("myCanvas").getContext('2d')
        this.car.show(this.ctx)
        this.rock.show(this.ctx)
        this.coin.show(this.ctx)
    }


    this.render= function (){
        this.ctx.clearRect(0,0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT)
        this.car.show(this.ctx)
        this.rock.show(this.ctx)
        this.coin.show(this.ctx)
    }

    this.moveCar= function (event){
        let orientation= 0
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }
        console.log(this.car.x)
        console.log(this.car.y)

        if(orientation){
            if (this.car.orientation !== orientation){
                this.car.orientation = orientation
            }else {
                this.car.run()
            }
            this.render()
        }

        if (this.car.x>650 || this.car.x<0 || this.car.y<0 || this.car.y> 650){
            this.getResult("lost")

        }else if ((this.car.x> this.rock.x
            && this.car.x < this.rock.x+ OBSTACLES_WIDTH
            && this.car.y < this.rock.y+ OBSTACLES_HEIGHT
            && this.car.y > this.rock.y)

            ||( this.car.x + CAR_WIDTH> this.rock.x
            && this.car.x + CAR_WIDTH<this.rock.x+ OBSTACLES_WIDTH
            && this.car.y < this.rock.y+ OBSTACLES_HEIGHT
            && this.car.y > this.rock.y)

            ||( this.car.x > this.rock.x
            && this.car.x < this.rock.x+ OBSTACLES_WIDTH
            && this.car.y + CAR_HEIGHT< this.rock.y+ OBSTACLES_HEIGHT
            && this.car.y + CAR_HEIGHT> this.rock.y)

            ||( this.car.x + CAR_WIDTH > this.rock.x
            && this.car.x + CAR_WIDTH <this.rock.x+ OBSTACLES_WIDTH
            && this.car.y + CAR_HEIGHT< this.rock.y+ OBSTACLES_HEIGHT
            && this.car.y + CAR_HEIGHT> this.rock.y)

            ||( this.car.x < this.rock.x+ OBSTACLES_WIDTH
            && this.car.x > this.rock.x
            && (this.car.y+ (CAR_HEIGHT/2)) > this.rock.y
            && (this.car.y+ (CAR_HEIGHT/2)) < this.rock.y + OBSTACLES_HEIGHT)

            ||( (this.car.x + (CAR_WIDTH/2)) < this.rock.x+ OBSTACLES_WIDTH
                && (this.car.x + (CAR_WIDTH/2)) > this.rock.x
                && this.car.y > this.rock.y
                && this.car.y < this.rock.y + OBSTACLES_HEIGHT)

            ||( this.car.x + CAR_WIDTH < this.rock.x+ OBSTACLES_WIDTH
                && this.car.x + CAR_WIDTH > this.rock.x
                && (this.car.y + (CAR_HEIGHT/2)) > this.rock.y
                && (this.car.y + (CAR_HEIGHT/2) < this.rock.y + OBSTACLES_HEIGHT)

            ||( (this.car.x + (CAR_WIDTH/2)) < this.rock.x+ OBSTACLES_WIDTH
                && (this.car.x + (CAR_WIDTH/2)) > this.rock.x
                && this.car.y + CAR_HEIGHT > this.rock.y
                && this.car.y + CAR_HEIGHT < this.rock.y + OBSTACLES_HEIGHT))){

            this.getResult("lost")

        }else if ((this.car.x> this.coin.x
                && this.car.x < this.coin.x+ OBSTACLES_WIDTH
                && this.car.y < this.coin.y+ OBSTACLES_HEIGHT
                && this.car.y > this.coin.y)

            ||( this.car.x + CAR_WIDTH> this.coin.x
                && this.car.x + CAR_WIDTH<this.coin.x+ OBSTACLES_WIDTH
                && this.car.y < this.coin.y+ OBSTACLES_HEIGHT
                && this.car.y > this.coin.y)

            ||( this.car.x > this.coin.x
                && this.car.x < this.coin.x+ OBSTACLES_WIDTH
                && this.car.y + CAR_HEIGHT< this.coin.y+ OBSTACLES_HEIGHT
                && this.car.y + CAR_HEIGHT> this.coin.y)

            ||( this.car.x + CAR_WIDTH > this.coin.x
                && this.car.x + CAR_WIDTH <this.coin.x+ OBSTACLES_WIDTH
                && this.car.y + CAR_HEIGHT< this.coin.y+ OBSTACLES_HEIGHT
                && this.car.y + CAR_HEIGHT> this.coin.y)

            ||( this.car.x < this.coin.x+ OBSTACLES_WIDTH
                && this.car.x > this.coin.x
                && (this.car.y+ (CAR_HEIGHT/2)) > this.coin.y
                && (this.car.y+ (CAR_HEIGHT/2)) < this.coin.y + OBSTACLES_HEIGHT)

            ||( (this.car.x + (CAR_WIDTH/2)) < this.coin.x+ OBSTACLES_WIDTH
                && (this.car.x + (CAR_WIDTH/2)) > this.coin.x
                && this.car.y > this.coin.y
                && this.car.y < this.coin.y + OBSTACLES_HEIGHT)

            ||( this.car.x + CAR_WIDTH < this.coin.x+ OBSTACLES_WIDTH
                && this.car.x + CAR_WIDTH > this.coin.x
                && (this.car.y + (CAR_HEIGHT/2)) > this.coin.y
                && (this.car.y + (CAR_HEIGHT/2) < this.coin.y + OBSTACLES_HEIGHT)

                ||( (this.car.x + (CAR_WIDTH/2)) < this.coin.x+ OBSTACLES_WIDTH
                    && (this.car.x + (CAR_WIDTH/2)) > this.coin.x
                    && this.car.y + CAR_HEIGHT > this.coin.y
                    && this.car.y + CAR_HEIGHT < this.coin.y + OBSTACLES_HEIGHT))){

            this.getResult("win")
        }

        this.getResult= function (result){
            if (result === "lost"){
                alert("You Lost")
            }else if (result === "win"){
                alert("You Win")
            }

            location.reload()
        }








    }





}

function Obstacles(){
    this.height= OBSTACLES_HEIGHT
    this.width= OBSTACLES_WIDTH

    this.x= Math.random()* GAMEBOARD_WIDTH
    this.y= Math.random()* GAMEBOARD_HEIGHT


    while ((this.x> DEFAULT_X_POSITION && this.x< DEFAULT_X_POSITION+ CAR_WIDTH)
    || (this.y> DEFAULT_Y_POSITION && this.y< DEFAULT_Y_POSITION + CAR_HEIGHT)
    || this.x< 0
    || this.x> 650
    || this.y< 0
    || this.y> 650){

        this.x= Math.random()* GAMEBOARD_WIDTH
        this.y= Math.random()* GAMEBOARD_HEIGHT
    }




    this.buildImage= function (){
        this.image= "rock.png"
    }
    this.buildImage()

    this.show= function (ctx){
        let image= new Image()
        let xPosition= this.x
        let yPosition= this.y
        image.onload= function (){
            ctx.drawImage(image, xPosition, yPosition, OBSTACLES_WIDTH, OBSTACLES_HEIGHT)
            // ctx.beginPath()
            // ctx.rect(xPosition, yPosition, OBSTACLES_WIDTH, OBSTACLES_HEIGHT)
            // ctx.stroke()
        }

        image.src= './img/' + this.image
    }

}

function Coin(){
    this.height= COIN_HEIGHT
    this.width= COIN_WIDTH

    this.x= Math.random()* GAMEBOARD_WIDTH
    this.y= Math.random()* GAMEBOARD_HEIGHT


    while ((this.x> DEFAULT_X_POSITION && this.x< DEFAULT_X_POSITION+ CAR_WIDTH)
    || (this.y> DEFAULT_Y_POSITION && this.y< DEFAULT_Y_POSITION + CAR_HEIGHT)
    || this.x< 0
    || this.x> 650
    || this.y< 0
    || this.y> 650){

        this.x= Math.random()* GAMEBOARD_WIDTH
        this.y= Math.random()* GAMEBOARD_HEIGHT
    }




    this.buildImage= function (){
        this.image= "coin.png"
    }
    this.buildImage()

    this.show= function (ctx){
        let image= new Image()
        let xPosition= this.x
        let yPosition= this.y
        image.onload= function (){
            ctx.drawImage(image, xPosition, yPosition, COIN_WIDTH, COIN_HEIGHT)
            // ctx.beginPath()
            // ctx.rect(xPosition, yPosition, OBSTACLES_WIDTH, OBSTACLES_HEIGHT)
            // ctx.stroke()
        }

        image.src= './img/' + this.image
    }
}







let gameboard= new GameBoard()
gameboard.start()

