const operation = {
    ">=" : (n, m) => n >= m,
    "<=" : (n, m) => n <= m,
    ">!" : (n, m) => n > m,
    "<!" : (n, m) => n < m
}

function solution(ineq, eq, n, m) {
    // return ineq === ">" && eq === "=" 
    //     ? +(n >= m)
    //     : ineq === "<" && eq === "="
    //     ? +(n <= m)
    //     : ineq === ">" && eq === "!"
    //     ? +(n > m)
    //     : +(n < m)
    
    const op = operation[`${ineq}${eq}`]
    return +(op(n, m))
}