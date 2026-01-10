function solution(rank, attendance) {
    const result = rank.reduce((a, c, i) => {
        if (attendance[i]) a.push({ value: c, index: i })
        return a
    }, []).sort((a, b) => a.value - b.value)
    
    return 10000*result[0].index + 100*result[1].index + result[2].index
}