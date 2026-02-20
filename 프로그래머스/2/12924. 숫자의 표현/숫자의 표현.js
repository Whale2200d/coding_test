function solution(n) {
    let count = 0

    for (let d = 1; d*d <= n; d++) {
        if (n % d !== 0) continue

        if (d % 2 === 1) count++
        if (n/d !== d && n/d % 2 === 1) count++
    }

    return count
}