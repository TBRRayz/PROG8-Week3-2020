class Ball extends HTMLElement{

    public readonly gravity    : number = 0.1
    public readonly friction   : number = 0.9

    public x           : number = 0
    public y           : number = 0
    public speedX      : number = 5
    public speedY      : number = -3
    public minWidth    : number = 0
    public maxWidth    : number = 0
    public maxHeight   : number = 0

    private ballBehavior : BallBehavior;
    public soort : string;

    public setBehavior(behavior: BallBehavior) {
        this.ballBehavior = behavior;
    }
    
    constructor(minWidth : number, maxWidth : number, behavior : BallBehavior, soort: string) {
        super()

        this.ballBehavior = behavior;
        this.soort = soort;

        if (this.soort == 'basketball') {
            this.classList.add("basketball-component");
        }

        let content = document.getElementsByTagName("content")[0]
        content.appendChild(this)

        maxWidth -= this.clientWidth
        this.x = (Math.random() * (maxWidth - minWidth)) + minWidth
        this.y = 100

        this.minWidth   = minWidth
        this.maxWidth   = maxWidth
        this.maxHeight  = window.innerHeight - this.clientHeight
    }

    public update() : void {
        this.ballBehavior.performUpdate(this);
    }

    public draw() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
    }
}

window.customElements.define("ball-component", Ball as any);