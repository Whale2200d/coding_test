function solution(quiz) {
    return quiz.reduce((a, c) => {
        const [calc, z] = c.split(' = ')
        const isAdd = calc.includes('+')
        const [x, y] = calc.split(isAdd ? ' + ' : ' - ')
        
        let result = 0;
        isAdd ? result = (+x)+(+y) : result = (+x)-(+y)
        
        return result === (+z) ? [...a, 'O'] : [...a, 'X']
    }, [])
}