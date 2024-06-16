function calculateFactorial(number:number) {
    let sum = 1
    for (let index = 2; index <= number; index++) {
        sum= sum* index
    }
    console.log("sum is :" , sum)
    return sum
}

calculateFactorial(5)