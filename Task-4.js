
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
var gimme = function (inputArray) {
let arr = [...inputArray].sort((a,b)=>a>b);
return inputArray.findIndex(value=>value===arr[1]);
} 
