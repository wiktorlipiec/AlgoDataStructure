function createCharMap(str) {
  const removeSpacesStr= str.replace(/ /g, '').toLowerCase();
  const charMap = {}

  for(let char of removeSpacesStr ){
    if(!charMap[char]){
      charMap[char] = 1
    } else{
      charMap[char]++;
    }
  };

  return charMap;
}


function anagrams(stringA, stringB) {
  const charsFromStringA = createCharMap(stringA)
  const charsFromStringB = createCharMap(stringB)

  if(Object.keys(charsFromStringA).length !== Object.keys(charsFromStringB).length) return false;

  for(let char in charsFromStringA){
    if(charsFromStringA[char] !== charsFromStringB[char]) {
      return false
    }
  }

  return true
}

console.log(anagrams('agam', 'gama'));

//another war by sort
// str.replace(/ /g, '').toLowerCase().split('').sort().join(')