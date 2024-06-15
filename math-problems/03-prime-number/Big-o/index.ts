function isPrime(number: number) {
  let flag = true;
  if (number <= 2) {
    return flag;
  }

  for (let index = 2; index < number / 2; index++) {
    if (number % index === 0) {
      flag = false;
    }
  }
  return flag;
}

console.log(isPrime(1)) // true 
console.log(isPrime(5)) // true
console.log(isPrime(9)) // false