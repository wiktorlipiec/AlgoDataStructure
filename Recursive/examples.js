function countDown(n) {
  for(let i = n; i >= 0; i--){
    console.log(i)
  }
}

function countDownRecursive(n) {
  if ( n <= 0 ) return
  countDownRecursion(n - 1);
}

function sumRange(n) {
  let total = 0;
  for(let i = n; i > 0; i--) {
    total += i
  }
  return total;
}

function sumRangeRecursive(n, total = 0){
  if ( n < 0 ) return total;
  return sumRangeRecursion(n - 1, total + n );
}

const tree = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children: []
    },
    {
      name: 'Zoe',
      children: [
        {
          name: 'Kelly',
          children: []
        },
        {
          name: 'Igor',
          children: []
        }
      ]
    }
  ]
}

let nameUser = [];

function printChildrenRecursive(tree) {
  if(tree.children.length === 0 ) return;
  tree.children.forEach(child => {
    printChildrenRecursive(child)
    nameUser.push(child.name)
  })
}

function countFactorial(n){
  if(n == 0) return 1;
  return n * countFactorial(n-1);
}
