function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1]
    const zeroLottos = lottos.filter((v) => v === 0)
    const noZeroLottos = lottos.filter((v) => v !== 0)
    const minLottos = noZeroLottos.filter((v) => win_nums.includes(v))
    const minCount = minLottos.length
    const maxCount = minCount + zeroLottos.length
    
    return [rank[maxCount], rank[minCount]]
}