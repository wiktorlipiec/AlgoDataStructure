//chunk([1,2,3,4,5,6], 2) --> [[1,2],[3,4],[5,6]];

function chunk(array, size) {
  const chunked = [];

  for(let element of array) {
    const last = chunked[chunked.length -1];

    if(!last || last.length === size){
      chunked.push([element])
    } else {
      last.push(element);
    }
  }

  return chunked;
}

function chunkByWhile(array, size) {
  const chunked = []
  let index = 0

  while( index <= array.length) {
    chunked.push(array.slice(index, index + size))
    index += size;
  }

  return chunked;
}

console.log(chunkByWhile([1,2,3,4,5,6,7,8,9],3));