export function reverseString(str) {
  return str.split('').reverse().join('');
}

export function reverseStringWithoutMethod(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  };

  return reversed;
}

export function reverseStringByReduce(str) {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}