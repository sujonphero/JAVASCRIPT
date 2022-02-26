// factorial means binnas.
// 7!
// 7 x 6 x 5 x 4 x 3 x 2 x 1;


// factorial with for loop.
for (var i = 1; i <= 7; i++){
    console.log(i)
    var factorial = 1;
    factorial = factorial * i;
}
// console.log(factorial);


// factorial with function.
let fact = 1;
function getFactorial(number){
    for (let i = 1; i <= number; i++){
    fact = fact * i;
    }
    return fact;
}
const factorials = getFactorial(4);
console.log('this is fact',factorials)