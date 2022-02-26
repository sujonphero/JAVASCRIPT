// this loop we are trying to loop.
// while loop.
// for loop.


// while loop
var number = 1;
while( number <= 10) {
    console.log('this', number)
    number++;
}

// for loop
for(var taka = 0; taka <= 20; taka++ ){
    console.log(taka);
}

for (var i = 0; i <= 12; i++){
    console.log('iam', i);
}

// find odd numbers
for (var i = 0; i < 20; i = i + 2){
    console.log('odd number', i);
}

// find an array element with loop.
var friends = ['sujon', 'sheikh', 'sohuj', 'sahenur', 'metul', 'billal'];
for (var i = 0; i < friends.length; i++){
    var friend = friends[i];
    console.log('hi', friend);

}