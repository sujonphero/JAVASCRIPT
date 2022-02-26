// leap year
// a year, occurring once every four years, which has 366 days 
// including 29 February as an intercalary day.

function isleapyear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}
const isyear = 2028;
const yearResult = isleapyear(isyear);
console.log('yes i find him',yearResult);