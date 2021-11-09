class GameBoard {

    start() {
        //Canvas
        let canvas = document.getElementById("myCanvas")
        let ctx = canvas.getContext("2d")

        //Objects
        let ball = new Ball(canvas.width / 2, canvas.height - 30, 8, "#0095DD", 2, -2)

        let paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 10, 10, 75, "#0095DD")

        let score = new Score(8, 20, 0, "#0095DD", "16px Arial")

        //Thong so cua bricks
        let brickRowCount = 3
        let brickColumnCount = 5
        let brickPadding = 10
        let brickOffsetTop = 30
        let brickOffsetLeft = 30

        //Build Bricks
        let bricks = []

        for (let i = 0; i < brickColumnCount; i++) {
            bricks[i] = []
            for (let j = 0; j < brickRowCount; j++) {
                bricks[i][j] = new Bricks(0, 0, 20, 75, "#0095DD", 1)
            }
        }

        //When Pressed
        let rightPressed = false
        let leftPressed = false


        document.addEventListener("keydown", keyDownHandler, false)
        document.addEventListener("keyup", keyUpHandler, false)

        document.addEventListener("mousemove", mouseMoveHandler, false)


        function mouseMoveHandler(event) {
            let relativeX = event.clientX - canvas.offsetLeft
            if (relativeX > 0 && relativeX < canvas.width) {
                paddle.x = relativeX - paddle.width / 2
            }
        }


        function keyDownHandler(event) {
            switch (event.keyCode) {
                case 37:
                    leftPressed = true
                    break
                case 39:
                    rightPressed = true
                    break
            }
        }

        function keyUpHandler(event) {
            switch (event.keyCode) {
                case 37:
                    leftPressed = false
                    break
                case 39:
                    rightPressed = false
                    break
            }

        }


        //Collision Detection
        function collisionDetection() {
            for (let i = 0; i < brickColumnCount; i++) {
                for (let j = 0; j < brickRowCount; j++) {
                    let b = bricks[i][j]
                    //When Ball touches the Bricks
                    if (b.getStatus() === 1) {
                        if (ball.x > b.x && ball.x < b.x + b.width && ball.y > b.y && ball.y < b.y + b.height) {
                            ball.setDy(-ball.dy)
                            b.setStatus(0)
                            score.score++
                            //When Ball touches all the Brick
                            if (score.score === brickRowCount * brickColumnCount) {
                                alert("YOU WON")
                                document.location.reload()
                                clearInterval(interval)


                            }
                        }
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            ball.drawBall(ctx)
            paddle.drawPaddle(ctx)
            score.drawScore(ctx)


            collisionDetection()

            for (let i = 0; i < brickColumnCount; i++) {
                for (let j = 0; j < brickRowCount; j++) {
                    if (bricks[i][j].status === 1) {
                        let brickX = (i * (bricks[i][j].width + brickPadding)) + brickOffsetLeft
                        let brickY = (j * (bricks[i][j].height + brickPadding)) + brickOffsetTop
                        bricks[i][j].setX(brickX)
                        bricks[i][j].setY(brickY)
                        bricks[i][j].drawBricks(ctx)
                    }

                }
            }

            //When Ball touches the Canvas's Side
            if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
                ball.setDx(-ball.dx)
            }
            if (ball.y + ball.dy < ball.radius) {
                ball.setDy(-ball.dy)
                //When Ball touches the Top Side
            } else if (ball.y + ball.dy > canvas.height - ball.radius) {
                if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
                    ball.setDy(-ball.dy)
                    //When Ball is out of Paddle
                } else {
                        alert("GAME OVER");
                        document.location.reload()
                        clearInterval(interval)
                    }
                }
                //Move the Paddle
                if (rightPressed === true) {
                    paddle.x += 7
                    if (paddle.x + paddle.width > canvas.width) {
                        paddle.x = canvas.width - paddle.width
                    }
                } else if (leftPressed === true) {
                    paddle.x -= 7
                    if (paddle.x < 0) {
                        paddle.x = 0
                    }
                }

                ball.x += ball.dx
                ball.y += ball.dy

            }

            let interval = setInterval(draw, 10)


        }





}
let gameBoard= new GameBoard()
gameBoard.start()