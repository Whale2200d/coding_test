function solution(num_list, n) {
    return [...num_list].reduce((a, c, i) => {
        if (i % n === 0) {
            a.push(c)
        }
        return a
    }, [])
}