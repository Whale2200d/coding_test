function solution(quiz) {
    return quiz.map((v) => {
        const [calc, z] = v.split(' = ')
        const isAdd = calc.includes('+')
        const [x, y] = calc.split(isAdd ? ' + ' : ' - ')
        
        let result = 0;
        isAdd ? result = (+x)+(+y) : result = (+x)-(+y)
        
        return result === (+z) ? 'O' : 'X'
    })
}