function solution(lottos, win_nums) {
    const rank = { '6': 1, '5': 2, '4': 3, '3': 4, '2': 5, '1': 6, '0': 6 }
    const zeroLottos = lottos.filter((v) => v === 0)
    const noZeroLottos = lottos.filter((v) => v !== 0)
    const minLottos = noZeroLottos.filter((v) => win_nums.includes(v))
    const minCount = minLottos.length
    const maxCount = minCount + zeroLottos.length
    
    return [rank[maxCount], rank[minCount]]
}