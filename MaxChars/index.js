//Given a string, return the character that is most common used in string

function maxChar(str) {
  const chars = {}
  let max = 0
  let maxChar = '';

  for(let char of str){
    if(!chars[char]){
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  for(let char in chars){
    if(chars[char] > max){
      max = chars[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}

maxChar('asdasasdasssssdasd');