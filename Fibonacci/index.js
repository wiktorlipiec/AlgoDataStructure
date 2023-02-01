function fib(n){
  //1. First solution - linear time
  // const result = [0,1];

  // for( let i = 2; i<=n; i++){
  //   result.push(result[i -1] + result[i-2]);
  // }

  // return result[n];

  // Recursion solution
  if(n < 2){
    return n
  }

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));