abstract class Ball extends HTMLElement{

    protected readonly gravity    : number = 0.1
    protected readonly friction   : number = 0.9

    protected x           : number = 0
    protected y           : number = 0
    protected speedX      : number = 5
    protected speedY      : number = -3
    protected minWidth    : number = 0
    protected maxWidth    : number = 0
    protected maxHeight   : number = 0

    
    public get X() : number { return this.x }
    
    constructor(minWidth : number, maxWidth : number) {
        super()

        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth   = minWidth
        this.maxWidth   = maxWidth
        this.maxHeight  = window.innerHeight - this.clientHeight
    }

    abstract update() : void

    public draw() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }
}