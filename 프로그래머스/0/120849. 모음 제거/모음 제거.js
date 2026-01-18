function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    
    return [...my_string].reduce((a, c) => vowel.includes(c) ? a : a+c, '')
}