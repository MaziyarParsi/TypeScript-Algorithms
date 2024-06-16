function isPowerOfTwho(number: number) {
  if (number <= 2) {
    return true;
  }

  while (number > 1) {
    if (number % 2 !== 0) {
      return false;
    }
    number = number / 2;
  }
  return true;
}

console.log(isPowerOfTwho(2)) // true
console.log(isPowerOfTwho(8)) // true
console.log(isPowerOfTwho(12)) // false
