function solution(arr, delete_list) {
    return arr.reduce((a, c, i) => {
        if (!delete_list.includes(c)) a.push(c)
        return a
    }, [])
}