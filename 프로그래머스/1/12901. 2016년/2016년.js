function solution(month, day) {
    // 일반 방법
//     const dayNames = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
//     const daysInMonth2016 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
//     let offsetDays = 0    
//     for (let i=0; i<month-1; i++) offsetDays += daysInMonth2016[i]    
//     offsetDays += (day-1)
    
//     return dayNames[offsetDays % 7]
    
    // Date 방법
    var tempDate = new Date(2016, month-1, day)
    return tempDate.toString().slice(0,3).toUpperCase()
}