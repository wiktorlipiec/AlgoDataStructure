function reverseInt(num) {
  //1. By reverse
  const getIndicateSign = Math.sign(num);
  const reverseNum = num.toString().split("").reverse().join("");

  return parseInt(reverseNum) * getIndicateSign;
}

console.log(reverseInt(-51));