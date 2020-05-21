class Main {

    private balls : Ball[] = []
    private basketBall : BasketBall

    constructor() {
        
        this.balls.push(new EarthBall(0, window.innerWidth/2))
        this.balls.push(new MoonBall(window.innerWidth/2, window.innerWidth))

        this.basketBall = new BasketBall(0, window.innerWidth)
        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        this.basketBall.update()

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())