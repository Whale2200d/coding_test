function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots
    
    const grade1 = getGrade(dot1, dot2)
    const grade2 = getGrade(dot2, dot3)
    const grade3 = getGrade(dot3, dot4)
    const grade4 = getGrade(dot4, dot1)
    const grade5 = getGrade(dot1, dot3)
    const grade6 = getGrade(dot2, dot4)
    
    return grade1 === grade3 ||
        grade2 === grade4 ||
        grade5 === grade6 ? 1 : 0
}
    
function getGrade(arr1, arr2) {
    return (arr1[1]-arr2[1]) / (arr1[0]-arr2[0])
}