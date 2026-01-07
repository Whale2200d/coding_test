function solution(myString, pat) {
    const reg = new RegExp(`(?=${pat})`, "g")
    return myString.match(reg)?.length || 0;
}