// find odd-even number.


// this is simple odd-even finder.
var oddnumber = 111;
var result = oddnumber % 2;
console.log(result == 0)


// find even number with function.
function findEvenNumber (number){
   if(number % 2 == 0){
    console.log('this is even number', number)
   }
   else{
       console.log('this is odd number', number)
   }
}
findEvenNumber(271);


// find odd number with function.
function findOddnumbers(number){
    if(number % 2 == 0 ){
    return true;
    }
    return false;
}
const myNumber = 331;
const result = findOddnumbers(myNumber);
console.log('hey this number', result);



// find odd number with function.
function findOddnumber (numbers){
    if(numbers % 2 == 1 ){
        console.log('this is odd numbers', numbers)
    } else{
        console.log('this is even numbers', numbers)
    }
}
findOddnumber(332);

// find odd number another way with function.
function findOdd (numberss){
    if(numberss % 2 != 0){
        console.log('this is odd numbers', numberss)
    } else{
        console.log('this is even numbers', numberss)
    }
}
findOdd(561);