const trickOrTreat = (kL, kR, candies) => {

  // generate all permutations of array
  const genPermutations = (inArr) => {
    let result = [];
    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m)
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next))
       }
     }
   }
   permute(inArr)
   return result;
  }

  // get max candies from permutation and start value
  const calcMax = (p, start) => {
    let result = [];
    for(let i = 0; i < p.length; i++) {
      result.push(Math.floor((p.slice(0, i).reduce((a, b) => a * b[0], start)) / p[i][1]));
    }
    return Math.max(...result);
  }

  const permutations = genPermutations(candies);
  let result = [];

  // run through all permutations and find maximums
  for(let i = 0; i < permutations.length; i++) {
    result.push(calcMax(permutations[i], kL));
  }

  // find smallest maximum
  return Math.min(...result).toString();
}