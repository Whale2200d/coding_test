function solution(todo_list, finished) {
    return todo_list.reduce((a, c, i) => {
        if (finished[i] === false) a.push(c)
        return a
    }, [])
}