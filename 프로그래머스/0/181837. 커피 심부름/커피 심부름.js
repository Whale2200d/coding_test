function solution(order) {
    return order.reduce((a, c) => {
        if (c.includes("americano") || c.includes("anything")) return a += 4500
        if (c.includes("cafelatte")) return a += 5000
        return a
    }, 0)
}