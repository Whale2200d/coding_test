function solution(hp) {
    const map = { g:5, s:3, w:1 }
    let count = 0
    let _hp = hp
    
    while(_hp > 0) {
        const gc = Math.floor(_hp/map['g'])
        const gm = _hp%map['g']
        
        _hp = gm
        
        if (gc > 0) {
            count += gc
        } else {
            const sc = Math.floor(_hp/map['s'])
            const sm = _hp%map['s']
           
            _hp = sm
            
            if (sc > 0) {
                count += sc
            } else {
                const wc = Math.floor(_hp/map['w'])
                const wm = _hp%map['w']
                
                count += wc
                _hp = 0
            }
        }
    }
    
    return count
}