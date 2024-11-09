const canvas = document.getElementById("myCanvas")
const ratio = window.devicePixelRatio || 1
console.log({innerHeight, innerWidth})
canvas.width = innerWidth * devicePixelRatio ;
canvas.height = innerHeight * devicePixelRatio ;
const scale = innerWidth / innerHeight
canvas.style.width = (canvas.width / devicePixelRatio) + 'px';
canvas.style.height = (canvas.height / devicePixelRatio) + 'px';
const ctx = canvas.getContext("2d")
ctx.scale(devicePixelRatio, devicePixelRatio)
const graph = new Graph(ctx)

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    graph.update()
    requestAnimationFrame(main)
}

main()