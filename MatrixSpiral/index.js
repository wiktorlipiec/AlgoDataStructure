// [[1,2,3,4],
// [12,13,14,5],
// [11,16,15,6],
// [10,9,8,7]]

function spiralMatrix(n){
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  let counter = 1;

  let matrix = new Array(n).fill().map(() => new Array(n).fill(''));;
  
  while(startCol <= endCol && startRow <= endRow){
    for( let i = startCol; i <= endCol; i++){
      matrix[startRow][i] = counter
      counter++;
    }
    startRow++;
    for(let j = startRow; j<= endRow; j++){
      matrix[j][endCol] = counter;
      counter;
    }
    endCol--;
    for (let i = endCol; i >= startCol; i--) {
        matrix[endRow][i] = counter;
        counter++;
    }
    endRow--;
    for (let i = endRow; i >= startRow; i--) {
        matrix[i][startCol] = counter;
        counter++;
    }
    startCol++;
  }

  console.log(matrix);
}

function matrixUdemy(n) {
  const result = [];

  for (let i = 0; i < n; i++){
    result.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while(startColumn <= endColumn && startRow <= endRow){
    //Top row
    for(let i = startColumn; i<= endColumn; i++){
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right column
    for(let i = startRow; i<= endRow; i++){
      result[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //Bottom row
    for(let i = endColumn; i >= startColumn; i--){
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //Leftcolumn
    for(let i = endRow; i >= startRow; i--){
      result[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  console.log(result);
}

matrixUdemy(4);