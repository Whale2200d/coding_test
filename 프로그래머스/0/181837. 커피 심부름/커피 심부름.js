function solution(order) {
    return order.reduce((a, c) => a + (c.includes("cafelatte") ? 5000 : 4500), 0)
}