function solution(polynomial) {
    const list = polynomial.split(" + ")
    
    let xCoeff = 0
    let constant = 0
    
    for (const num of list) {
        if (num.includes('x')) {
            const newCoeff = num[0] === 'x' ? 1 : +num.split('x')[0]
            xCoeff += newCoeff
        } else {
            constant += Number(num)
        }
    }
    
    if (xCoeff === 0) return constant.toString()
    else if (constant === 0) return xCoeff === 1 ? 'x' : `${xCoeff}x`
    else return xCoeff === 1 ? `x + ${constant}` : `${xCoeff}x + ${constant}`
}