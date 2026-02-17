function solution(s) {
    const splited = s.split(' ')
    return splited.map((v) => {
        if (v.length === 0) return v
        return v[0].toUpperCase() + v.slice(1).toLowerCase()
    }).join(' ')
}