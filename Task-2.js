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
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

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

// https://www.codewars.com/kata/beginner-lost-without-a-map
  function maps(x){return x.map(num =>num*2);}

//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
 function firstNonConsecutive (arr) {
  let x;
   for(let i=0; i<arr.length; i++ ){
       if(arr[i]+1!=arr[i+1]){
           x=arr[i+1];
           break;
       }
   }
   return x!=undefined?x:null;
} 
