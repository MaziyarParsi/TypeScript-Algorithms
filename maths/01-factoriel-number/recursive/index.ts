//  Time complexity
//      Best case   -   O(1)
//                    This happens when input number is below 1
//       Worst case  - O(n)
//                    This happens when input in greater than 2
//       Average case - 

function calculateFactoriel(num: number): number {
  if ((num === 0)) {
    return 1;
  }
  return num * calculateFactoriel(num - 1);
}

console.log(calculateFactoriel(0)) // 1
console.log(calculateFactoriel(2)) // 2 
console.log(calculateFactoriel(5)) // 120 