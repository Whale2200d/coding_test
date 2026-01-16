function solution(id_pw, db) {
    const [id, pw] = id_pw
    
    let i = 0
    while(i < db.length) {
        const [db_id, db_pw] = db[i]
        
        if (db_id === id) return db_pw === pw ? "login" : 'wrong pw'
        i++
    }
    
    return 'fail'
}