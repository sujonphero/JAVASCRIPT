// array
// length, indexOf, push(), pop(), shift(), unshift(), splice(), slice().


// length
var friends = ['sujon', 'sheikh', 'minhajul', 'islam', 'jahid', 'sahenur'];
console.log(friends.length)


// indexOf
var bondus = ['sujon', 'sheikh', 'minhajul', 'islam', 'jahid', 'sahenur'];
console.log(bondus.indexOf('jahid'));


// find index number of element
var polapain = ['sujon', 'sheikh', 'minhajul', 'islam', 'jahid', 'sahenur'];
// var newPolapain = polapain[2];
console.log(polapain[3]);


// change element in index number
var taka = [22, 23, 24, 25, 26, 27, 28, 29,30];
taka[2] = 33;
console.log(taka)


// push
var money = [22, 32, 33, 54, 65, 76, 77, 88];
money.push(1000);
console.log(money);


// pop
var dollers = [22, 32, 33, 54, 65, 76, 77, 88];
dollers.pop();
console.log(dollers);

// pop given a return value.
var dollers = [22, 32, 33, 54, 65, 76, 77, 88];
var newDollers = dollers.pop();
console.log(dollers);
console.log(newDollers);

// unshift mean an array set first element.
var muriChanachur = [22, 12, 13, 10, 5, 25, 88];
muriChanachur.unshift(20000);
console.log(muriChanachur);


// unshift mean an array set first element. with retrun value.
var muriChanachur = [22, 12, 13, 10, 5, 25, 88];
var newmuriChanachur = muriChanachur.unshift(10000);
console.log(muriChanachur);
console.log(newmuriChanachur);

// shift mean remove an element an array.
var chada = [111, 123, 112, 321, 112, 223, 231];
chada.shift();
console.log(chada);
