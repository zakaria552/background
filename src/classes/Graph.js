class Graph {
    constructor(ctx, points = [], lines = []) {
        this.points = points
        this.lines = lines
        this.mouse = new Point(0, 0)
        this.selectedPoint = null
        this.dashLine = null
        this.ctx = ctx
        this.#addEventlitseners()

    }
    update() {
        if(this.selectedPoint) {
            this.drawDashedLine()
        }
        for(let i = 0; i < this.lines.length; i++) {
            this.lines[i].update(this.ctx)
        }
        for(let i = 0; i < this.points.length; i++) {
            this.points[i].update(this.ctx)
        }
        if(this.selectedPoint) {
            this.selectedPoint.select(this.ctx)
        }
    }
    drawDashedLine() {
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.moveTo(this.selectedPoint.x, this.selectedPoint.y)
        this.ctx.lineTo(this.mouse.x, this.mouse.y)
        this.ctx.strokeStyle = "red"
        this.ctx.setLineDash([40, 5]); /*dashes are 5px and spaces are 3px*/
        this.ctx.stroke()
        this.ctx.restore()
    }
    selectPoint(p) {
        this.ctx.save()
        this.ctx.arc(p.x, p.y, p.r / 2 + 4, 0, Math.PI * 2);
        this.ctx.fillStyle = "red"
        this.ctx.fill();
        this.ctx.restore()
    }
    #addEventlitseners() {
        document.addEventListener("mousemove", (e) => {
            const point = new Point(e.x, e.y)
            const nearest = findNearestPoint(point, this.points)
            if(nearest.d && nearest.d < 20) {
                this.mouse = nearest.p
            } else {
                this.mouse = point
            }
        })

        document.addEventListener("mousedown", (e) => {
            console.log(e.which)
            if(e.which === 1) {
                let point = new Point(e.x, e.y)
                const nearest = findNearestPoint(point, this.points)
                if(nearest.d && nearest.d < 20) point = nearest.p
                if(this.selectedPoint) this.lines.push(new Line(this.selectedPoint, point))
                if(!nearest.d || nearest.d >= 20) this.points.push(point)
                this.selectedPoint = point
            }
            if(e.which === 3) {
                this.selectedPoint = null
            }
        })
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault()
        })
    }
}