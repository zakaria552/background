class Point {
    constructor(x, y, r=8) {
        this.x = x
        this.y = y
        this.r = r
    }
    update(ctx) {
        this.#draw(ctx)
    }
    isPoint(p) {
        return p.x === this.p.x && p.y === this.p.y
    }
    #draw(ctx, {color="white"} = {}) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r , 0, Math.PI * 2);
        ctx.fillStyle = color
        ctx.fill();
        ctx.restore()
    }

    select(ctx) {
        ctx.save()
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.strokeStyle = "yellow"
        ctx.arc(this.x, this.y, this.r * 0.7, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
    }
}