function solution(n, arr1, arr2) {
    const binary1 = arr1.map((v) => v.toString(2).padStart(n, '0'))
    const binary2 = arr2.map((v) => v.toString(2).padStart(n, '0'))
    return binary1.map((bi1, index) => [...bi1].map((b1, i) => +b1 || +binary2[index][i] ? '#' : ' ').join(''))
}