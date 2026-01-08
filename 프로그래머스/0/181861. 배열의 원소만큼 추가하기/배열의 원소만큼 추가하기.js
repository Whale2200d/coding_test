function solution(arr) {    
    return arr.reduce((a, c) => {
        const arr = Array.from({ length: c }, () => c)
        a.push(arr)
        return a
    }, []).flat()
}