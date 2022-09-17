// steps(3)
// '#  '
// '## '
// '###'

function steps(n){
  for(let row = 0; row < n; row++){
    let stair = '';
    for(let column = 0; column < n; column++){
      if(column <= row) {
        stair += '#'
      }else {
        stair += '0'
      }
    }
    console.log(stair);
  }
}

steps(3);