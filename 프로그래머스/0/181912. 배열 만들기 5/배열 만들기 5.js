function solution(intStrs, k, s, l) {
    return [...intStrs].reduce((result, cur) => {
        const str = Number(cur.slice(s, s+l))
        str > k ? result.push(str) : result.push("")
        return result
    }, []).filter((v) => v !== '')
}