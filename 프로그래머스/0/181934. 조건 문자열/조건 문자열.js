function solution(ineq, eq, n, m) {
    return ineq === ">" && eq === "=" 
        ? +(n >= m)
        : ineq === "<" && eq === "="
        ? +(n <= m)
        : ineq === ">" && eq === "!"
        ? +(n > m)
        : +(n < m)
}