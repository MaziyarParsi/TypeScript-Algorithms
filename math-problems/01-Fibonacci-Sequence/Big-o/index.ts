function generateSequence(number:number) {
   const sequence:number[] = [1,1]
   for (let index = 2; index < number; index++) {
   sequence[index]=sequence[index-1] + sequence[index-2]
   }
   console.log(sequence)
   return sequence
}

generateSequence(8)