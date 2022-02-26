// this is extra math.


// absolut number. / negetive to possitive number.
const absulutnumber = -5;
const outputAbs = Math.abs(absulutnumber);
// console.log(outputAbs);

// ceil number.
const ceilingNumber = 33.7093809;
const outputCeil = Math.ceil(ceilingNumber);
// console.log(outputCeil)

// floor number.
const floorNumber = 22.4424;
const outputFloor = Math.floor(floorNumber);
// console.log(outputFloor)

// round numbers. / nearest intiger number.
const roundNumber = 21.553;
const outputRound = Math.round(roundNumber);
// console.log(outputRound);

// roandom numbers.
const randomNumber = Math.random(6) * 10;
const randomResult = Math.round(randomNumber);
console.log(randomResult);

// using for loop.
for(let i = 0; i <= 5; i++){
    const randomNumber = Math.random(6) * 6;
    const randomResult = Math.round(randomNumber);
    console.log(randomResult);
}

// maximum

const buisnessman = 48734873;
const minister = 5454;
const police = 232;

const maximum = Math.max(buisnessman,minister,police);
console.log(maximum);

// minimum

const army = 48734873;
const politicks = 5454;
const jobholder = 232;

const minimum = Math.min(army,politicks,jobholder);
console.log(minimum);