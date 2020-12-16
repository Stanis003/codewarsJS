
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
var gimme = function (inputArray) {
let arr = [...inputArray].sort((a,b)=>a>b);
return inputArray.findIndex(value=>value===arr[1]);
} 


//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
function pigIt(str){
  return str.split(' ').map(elem=>/[a-zA-Z]+/.test(elem)?elem.slice(1)+elem[0]+'ay':elem).join(' ');
}
