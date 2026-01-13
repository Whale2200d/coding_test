function solution(array) {
    const str = array.join('')
    const remain = str.split('7').join('')
    
    return str.length - remain.length
}