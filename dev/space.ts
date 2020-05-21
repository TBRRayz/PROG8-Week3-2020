class Space implements BallBehavior {

    public performUpdate(ball: Ball) : void {
        ball.x += ball.speedX
        ball.y += ball.speedY
        
        if (ball.x < ball.minWidth || ball.x > ball.maxWidth)
        {
            ball.speedX *= -1
            
        }
        if (ball.y < 0 || ball.y > ball.maxHeight)
        {
            ball.speedY *= -1
        }

        ball.draw()
    }
}