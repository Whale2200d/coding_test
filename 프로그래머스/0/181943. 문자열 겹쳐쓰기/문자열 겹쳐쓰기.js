function solution(my_string, overwrite_string, s) {
    let answer = my_string.slice(0, s) + overwrite_string
    const separateLastIndex = s + overwrite_string.length
    
    if (separateLastIndex >= my_string.length) {
        return answer
    }
    
    return answer + my_string.substr(separateLastIndex)
}