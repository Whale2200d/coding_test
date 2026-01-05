function solution(names) {
    return names.reduce((a, c, i) => {
        if (i % 5 === 0) a.push(c)
        return a
    }, [])
}