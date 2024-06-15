function isPowerOfTwho(number: number) {
    if (number <= 2) {
      return true;
    }
  return ( number & (number-1))===0
  }
  
  console.log(isPowerOfTwho(2)) // true
  console.log(isPowerOfTwho(8)) // true
  console.log(isPowerOfTwho(12)) // false
  