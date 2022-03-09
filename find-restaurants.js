function findRestaurants(allLocation, numRestaurants) {}

//allLocations = [
//  [x, y]
// ]

const routePairs = (maxTravelDist, forwardRouteList, returnRouteList) => {
  // use two pointers to move through fowardRouteList & returnRouteList at same time
  // sort our sums array, and then find pairs that match or are closest to maxTravelDist
  const fwd = forwardRouteList;
  const rtn = returnRouteList;
  const sums = [];
  const res = [];
  let p1 = 0; // start pointer for forwardRouteList
  let p2 = rtn.length - 1; // end pointer for returnRouteList 
  let sum = 0;

  // iterate through both lists, and push pairs where sum <= maxTravelDist
  while (p2 > 0 && p1 < fwd.length) {
    sum = fwd[p1][1] + rtn[p2][1];
    if (sum <= maxTravelDist) {
      sums.push([sum, fwd[p1][0], rtn[p2][0]]);
      p1++;
    } else p2--;
  }

  // sort our sums array by highest sum, then push pairs that have closest matching sums
  sums.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < sums.length; i++) {
    const [currSum, fwdIndx, rtnIndx] = sums[i];

    if (currSum === maxTravelDist) {
      res.push( [fwdIndx, rtnIndx] );
      if (i + 1 < sums.length && sums[i + 1][0] !== maxTravelDist) return res;
    } else if(i + 1 < sums.length && sums[i][0] < max) {
      res.push( [fwdIndx, rtnIndx] )
      if (sums[i + 1][0] !== sums[i][0]) return res;
    }
  }
  return res;
}

const forwardRouteList = [
  [1, 3000],
  [2, 5000],
  [3, 7000],
  [4, 10000],
];
const returnRouteList = [
  [1, 2000],
  [2, 3000],
  [3, 4000],
  [4, 5000],
];
console.log(routePairs(10000, forwardRouteList, returnRouteList)); // -> [ [2,4], [3,2]]
