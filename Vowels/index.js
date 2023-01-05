// Write a function that returns the number of vowels used in a string.
// Vowels are the characters a, e, i, o, and u
// vowels('Hi There!'); --> 3
// vowels('Why do you ask?'); --> 4
// vowels('Why?'); --> 0

function vowels(str){
  // 1. Solution
  // const strA = str.split('a').length - 1;
  // const strE = str.split('e').length - 1;
  // const strI = str.split('i').length - 1;
  // const strO = str.split('o').length - 1;
  // const strU = str.split('u').length - 1;
  
  // return strA + strE + strI + strO + strU; 

  //2. Solution
  // let count = 0;
  // const checker = ['a','e','i','o','u'];

  // for(let char of str.toLowerCase()) {
  //   if(checker.includes(char)){
  //     count++;
  //   }
  // }

  //3. Solution
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

console.log(vowels('Why do you ask?'));