// pyramid(3);
//      '  #  '
//      ' ### '
//      '#####'
function pyramid(n){
  const mindpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row <n; row++){
    let level = '';
    for(let column = 0; column < 2 * n - 1; column++){
      console.log(mindpoint);
      console.log(row);
      console.log(column);
      console.log(mindpoint - row <= column);
      if(mindpoint - row <= column && mindpoint + row >= column){
        level+= '#';
      } else {
        level+= ' ';
      }
    }

    console.log(level);
  }
}

pyramid(3);