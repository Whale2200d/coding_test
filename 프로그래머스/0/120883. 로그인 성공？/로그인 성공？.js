function solution(id_pw, db) {
    const [id, pw] = id_pw
    
    const mappedDb = new Map(db)
    return mappedDb.has(id) ? mappedDb.get(id) === pw ? 'login' : 'wrong pw' : 'fail'
}