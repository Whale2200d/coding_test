function solution(order) {
    return [...order.toString()].reduce((a, c) => a+(c.match(/3|6|9/g) ? 1 : 0), 0)
}