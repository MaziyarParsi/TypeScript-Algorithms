//  Time complexity
//      Best case   -   O(1)
//                    This happens when input number is below 1
//       Worst case  - O(1)
//                    This happens when input in greater than 2
//       Average case - O(1)

function isPowerOfTwho(num: number) {
  if (num < 1) {
    return false;
  }

  return (num & (num - 1)) === 0;
}

console.log(isPowerOfTwho(2)); // true
console.log(isPowerOfTwho(8)); // true
console.log(isPowerOfTwho(12)); // false
