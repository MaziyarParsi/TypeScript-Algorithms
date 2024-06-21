//  Time complexity
//      Best case   -   O(n)
//                    This happens all the time
//       Worst case  - O(n)
//                    This happens all the time
//       Average case - 

function findIndex(array: number[], num: number) {
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] === num) {
      return index
    }
  }
  return -1;
}

console.log(findIndex([0, 2, 5], 5)); // 2
console.log(findIndex([0, 1, 4, 5, 7, 12, 3], 7)); // 4
console.log(findIndex([0, 2, 14, 12, 4], 5)); // -1
