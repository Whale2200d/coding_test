function solution(num_list) {
    const [sumOdd, sumEven] = num_list.reduce(([a, b], c, i) => {
        if (i % 2 === 0) return [a, b+c]
        return [a+c, b]
    }, [0, 0])
    
    return sumOdd > sumEven ? sumOdd : sumEven
}