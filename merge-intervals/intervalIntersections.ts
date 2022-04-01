const intervalIntersections = (intervalsA: number[][], intervalsB: number[][]): number[][] => {
  let intersectedIntervals: number[][] = [];
  // have pointer for intervalsA & intervalsB
  let p1 = 0, p2 = 0;
  // iterate through both intervals check if a overlaps b or b overlaps a
  while (p1 < intervalsA.length && p2 < intervalsB.length) {
    let pairA = intervalsA[p1], pairB = intervalsB[p2];
    const aOverlapB = (pairA[0] >= pairB[0] && pairA[0] <= pairB[1]);
    const bOverlapA = (pairB[0] >= pairA[0] && pairB[0] <= pairA[1]);

    // if either is true, push the intersection(maxStart, minEnds) of these intervals in
    if (aOverlapB || bOverlapA) {
      intersectedIntervals.push( [ Math.max(pairA[0], pairB[0]), Math.min(pairA[1], pairB[1]) ] )
    }
    // if a's end is < b's end, then move a pointer. else move b pointer
    if (pairA[1] < pairB[1]) p1++;
    else p2++;
  }
  return intersectedIntervals;
}


const interval1 = [[1, 3], [5, 6], [7, 9]];
const interval2 = [[2, 3], [5, 7]];
const interval3 = [[1, 3], [5, 7], [9, 12]]
const interval4 = [[5, 10]]
console.log(intervalIntersections(interval1, interval2)) //-> [2, 3], [5, 6], [7, 7]
console.log(intervalIntersections(interval3, interval4)) //-> [5, 7], [9, 10]
