//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
 return string.split(" ");
}

//tps://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list){
   return list[0];
};
var max = function(list){
   return list[0];
};

//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minVal = Math.min(...arr);
  return toReturn === 'value' ? minVal : arr.indexOf(minVal); 
}

//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
let wlf= queue.indexOf('wolf');
return (wlf===(queue.length-1))?"Pls go away and stop eating my sheep":
 `Oi! Sheep number ${queue.length-(wlf+1)}! You are about to be eaten by a wolf!`;
  }

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/solutions/javascript
  function maps(x){return x.map(num =>num*2);}
