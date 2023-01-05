function isPrime(num) {
  //TODO
  if(num < 2) return false;
  //Pozwoli zaoszczedzic czas
  //Mozna tez for(let i=2;i < num;i++){
  //const maximumDividor = Math.sqrt(num) + 1;
  for(let i=2;i < (num / 2)+1;i++){
    if( num % i === 0) return false
  }
  return true
}