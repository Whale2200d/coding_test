function solution(dots) {
    const [dot1, dot2, dot3, dot4] = dots

    if (isParallel([dot1, dot2], [dot3, dot4])) return 1;
    if (isParallel([dot1, dot3], [dot2, dot4])) return 1;
    if (isParallel([dot1, dot4], [dot2, dot3])) return 1;
    return 0;
}
    
function isParallel([a, b], [c, d]) {
    const dy1 = b[1] - a[1];
    const dx1 = b[0] - a[0];
    const dy2 = d[1] - c[1];
    const dx2 = d[0] - c[0];

    // 나눗셈일 경우, 소수점에서 오차로 인해 판별이 어려워질 수 있음.
    // 곱셈 비교로, 수치 안정성 확보
    return dy1 * dx2 === dy2 * dx1; 
}