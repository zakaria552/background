function findNearestPoint(point, points) {
    let d = null
    let nearestPoint = null
    points.forEach((p) => {
        const d2 = Math.sqrt((p.x-point.x)**2+(p.y-point.y)**2)
        if(!d || d2 <= d) {
            d = d2
            nearestPoint = p
        }
    })
    return {p: nearestPoint, d}
}