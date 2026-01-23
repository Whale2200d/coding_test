function solution(age) {
    const standard_year = 2022 // 추후 new Date().getFullYear()로 변경 필요
    return standard_year - age + 1
}