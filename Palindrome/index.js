//return true when reverse string it's the same abaaba === abaaba

function palindrome(text) { 
  // 1. By reverse
  // const reverseText = text.split("").reverse().join("")

  // 2. By for loop
  let reverseText = "";

  for( let i = text.length - 1; i >= 0; i--){
    reverseText += text[i];
  }
  return text === reverseText
} 

console.log(palindrome('abaaba'));
