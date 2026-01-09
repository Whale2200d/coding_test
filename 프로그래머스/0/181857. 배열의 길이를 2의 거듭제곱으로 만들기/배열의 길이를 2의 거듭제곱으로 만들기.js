function solution(arr) {
    // 로그에 올림처리하여 가장 가까운 제곱의 지수를 구함
    const exponent = Math.ceil(Math.log2(arr.length))
    const expNum = 2 ** exponent
    
    return [...arr, ...new Array(expNum - arr.length).fill(0)]
}