class BasketBall extends Ball{

    constructor(minWidth : number, maxWidth : number) {
        super(minWidth, maxWidth)
        
    }

    public update() : void {
    }

    public updateEarth() : void {
        if (this.x < this.minWidth)
        {
            this.x = this.minWidth
            this.speedX *= -1
            this.speedX *= this.friction
        }
        if(this.x > this.maxWidth) {
            this.x = this.maxWidth
            this.speedX *= -1
            this.speedX *= this.friction
        }
        if (this.y + this.speedY > this.maxHeight)
        {
            this.y = this.maxHeight;
            this.speedY *= -1
            // Weerstand
            this.speedY *= this.friction
            this.speedX *= this.friction
        }
        else {
            this.speedY += this.gravity
        }

        this.x += this.speedX
        this.y += this.speedY
        
        this.draw()
    }

    public updateMoon() : void {
        this.x += this.speedX
        this.y += this.speedY
        
        if (this.x < this.minWidth || this.x > this.maxWidth)
        {
            this.speedX *= -1
            
        }
        if (this.y < 0 || this.y > this.maxHeight)
        {
            this.speedY *= -1
        }

        this.draw()
    }
}

window.customElements.define("basketball-component", BasketBall as any)