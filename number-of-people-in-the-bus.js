// const number = busStops => {
//   // Good Luck!
//   //create a starting number
//   let count = 0;
//   // loop over each array - add the first index to the count, subtract the second once
//   for (let i = 0; i < busStops.length; i++) {
//     count += busStops[i][0];
//     count -= busStops[i][1];
//   }
//   return count;
// };

const number = busStops => {
  // Good Luck!
  //create a starting number
  let count = 0;
  // loop over each array - add the first index to the count, subtract the second once
  busStops.map(stop => {
    count += stop[0];
    count -= stop[1];
  });
  return count;
};

console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
