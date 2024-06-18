//  Time complexity
//      Best case   -   O(1)
//                    This happens when input number is below 2
//       Worst case  - O(n)
//                    This happens when input in greater than 2
//       Average case -  

function calculateFactorial(num: number): number {
  let sum = 1;
  if (num < 2) {
    return 1;
  }
  for (let index = 2; index <= num; index++) {
    sum = sum * index;
  }
  return sum;
}

console.log(calculateFactorial(2)); //2
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(8)); // 40320
