//--1

const sum = function (n1, n2) {
    let sum = n1 + n2;
  return sum ;
 }
 console.log(sum(5, 10));

//-----2

const average = function (a, b) {
    let average = a + b
    return  average / 2
  };
  console.log(average(6, 6));

  /*
   //-----3
const findFactorial = function(num){
    let abd=1;
    for (let index = 0; index++) {
        const element = array[index];
  
    }
}
*/


//---- 4
const round = function (number) {
  return Math.round(number);
};
console.log(round(7.98));


//--5
const toThePowerOf = function (base, exponent) {
   return Math.pow(base, exponent);
};
console.log(toThePowerOf(9, 2));

//--6
const randomNumber = function (zero) {
 return Math.random(zero)
};

console.log(randomNumber(057362233));