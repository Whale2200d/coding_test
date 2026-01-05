function solution(str_list) {
    const indexL = str_list.indexOf("l")
    const indexR = str_list.indexOf("r")
    
    // l이나 r이 없다면 빈 리스트를
    if (indexL === -1 && indexR === -1) return []
    
    if (indexL === -1) return str_list.slice(indexR+1)
    
    if (indexR === -1) return str_list.slice(0, indexL)
    
    // l과 r 중 먼저 나오는 문자열이 l이라면, 해당 문자열을 기준으로 왼쪽에 있는 문자열을 순서대로 담은 리스트를
    if (indexL < indexR) return str_list.slice(0, indexL)
    
    // l과 r 중 먼저 나오는 문자열이 r이라면, 해당 문자열을 기준으로 오른쪽에 있는 문자열을 순서대로 담은 리스트를
    return str_list.slice(indexR+1)
    
}