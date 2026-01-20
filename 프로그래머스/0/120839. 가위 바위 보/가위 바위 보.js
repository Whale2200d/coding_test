function solution(rsp) {
    const map = { '2':'0', '5':'2', '0':'5' }
    return [...rsp].map(ch => map[ch]).join('')
}