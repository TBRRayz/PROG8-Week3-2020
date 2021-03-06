class Main {

    private balls : Ball[] = []
    private basketBall : Ball;

    constructor() {
        
        this.balls.push(new Ball(0, window.innerWidth/2, new Bouncing(), 'ball'))
        this.balls.push(new Ball(window.innerWidth/2, window.innerWidth, new Space(), 'ball'))

        this.basketBall = new Ball(0, window.innerWidth, new Bouncing(), 'basketball');
        this.gameLoop()
    }

    gameLoop() {
        for (const ball of this.balls) {
            ball.update()
        }

        this.basketBall.update();
        if(this.basketBall.x > window.innerWidth / 2) {
            this.basketBall.setBehavior(new Space());
        } 
        else {
            this.basketBall.setBehavior(new Bouncing());
        }

        requestAnimationFrame(() => this.gameLoop())
    }
}

window.addEventListener("load", () => new Main())