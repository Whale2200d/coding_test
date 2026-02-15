function solution(friends, gifts) {
    // friends: 친구들의 이름을 담은 1차원 문자열 배열
    // gifts: 이번 달까지 친구들이 주고받은 선물 기록을 담은 문자열 배열
    // "A B"일 때, A는 선물을 준 사람, B는 선물을 받은 사람
    
    // 1. 결과 반환을 위해 필요한 데이터 생성
    // 1.1. A, B 간 선물 횟수 테이블
    const giftCountByFriends = Object.fromEntries(
        friends.map(sender => [
            sender,
            Object.fromEntries(friends.map(receiver => [receiver, 0]))
        ])
    )
    
    // 1.2. 친구별 상태: 준 선물(send), 받은 선물(receive), 선물 지수(index)
    const stateByFriends = Object.fromEntries(
        friends.map(friend => [
            friend,
            { send: 0, receive: 0, index: 0 }
        ])
    )
    
    // 1.3. 선물 횟수 테이블, 친구별 상태 업데이트
    for (const gift of gifts) {
        const [sender, receiver] = gift.split(' ')
        
        stateByFriends[sender].send++
        stateByFriends[receiver].receive++
        
        giftCountByFriends[sender][receiver]++
    }
    
    // 1.4. 친구별 상태 중 선물지수 index 업데이트
    // (선물지수: '이번 달까지 준 선물 수' - '이번 달까지 받은 선물 수')
    for (const friend of friends) {
        const { send, receive } = stateByFriends[friend]
        stateByFriends[friend].index = send - receive
    }
    
    // 2. 업데이트된 데이터 기반 메인 로직 실행
    const result = Object.fromEntries(friends.map(friend => [friend, 0]))
    
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {
            const first = friends[i]
            const second = friends[j]
            
            const firstToSecondCount = giftCountByFriends[first][second]
            const secondToFirstCount = giftCountByFriends[second][first]
            
            if (firstToSecondCount > secondToFirstCount) {
                // 1. 두 사람이 선물받은 기록이 있다면,
                // 이번 달까지 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받는다.
                result[first]++ // frist > second
            } else if (firstToSecondCount < secondToFirstCount) {
                result[second]++ // second < first
            } else {
                // 2. 두 사람이 선물받은 기록이 없거나, 같다면, 선물 지수 비교
                // 선물 지수가 더 큰 사람이 선물 지수가 작은 사람에게 선물을 하나 받는다.
                // 선물 지수도 같다면, 다음 달에 선물을 주고받지 않는다.   
                const firstIndex = stateByFriends[first].index
                const secondIndex = stateByFriends[second].index
                
                if (firstIndex > secondIndex) {
                    result[first]++
                } else if (firstIndex < secondIndex) {
                    result[second]++
                }
            }
        }
    }
    
    // 3. 결과 반환
    // 3.1. 다음 달에 가장 많은 선물을 받는 친구가 받을 선물의 수
    return Math.max(...Object.values(result))
}