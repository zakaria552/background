class Line {
    constructor(p1, p2) {
        this.p1 = p1
        this.p2 = p2
        this.log = true
    }
    update(ctx) {
        this.#draw(ctx)
    }
    #draw(ctx, opt = {color: "blue"}) {
        if(this.log) {
            this.log = false
        }
        ctx.save()
        ctx.beginPath()
        ctx.strokeStyle = opt.color
        ctx.moveTo(this.p1.x, this.p1.y)
        ctx.lineTo(this.p2.x, this.p2.y)
        ctx.stroke()
        ctx.restore()
    }
    remove(ctx) {
        this.#draw(ctx, {color: "transparent"})
    }
}