function solution(strArr) {
    return strArr.reduce((a, c) => {
        if (!c.includes("ad")) a.push(c)
        return a
    }, [])
}