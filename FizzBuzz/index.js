//Program which console.log number from 1 to n. But for multiples 3 return fizz, for multiples 5 return buzz. For mutliples 3 and 5 return fizzbuzz

function fizzBuzz(n){
  for(let i = 0; i <= n; i++) {
    if(i%3 === 0 && i%5 === 0){
      console.log('fizzbuzz')
    } else if(i%5 === 0){
      console.log('buzz')
    } else if (i%3 === 0){
      console.log('fizz')
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(25));