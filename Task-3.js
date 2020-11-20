
1) https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

2) https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

  function circleCircumference(circle) {
    return 2*Math.PI*circle.radius;
    }

3) https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript


    class Shark extends Animal {
        constructor(name, age, status) {
          super(name, age, 0, "shark", status);
          }
      }
      
      class Cat extends Animal {
        constructor (name,age,status){
          super(name, age, 4, "cat", status);
           }
         introduce(){
             return `${super.introduce()}  Meow meow!`;
           }
      }
      
      class Dog extends Animal {
        constructor(name, age, status, master){
          super(name, age, 4, "dog", status);
          this.master=master;
          }
          greetMaster(){
          return `Hello ${this.master}`;
          }
      }

4) https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

    function giveMeFive(obj){
        const arr=[];
        for (let key in obj){
          arr.push(key);
          arr.push(obj[key]);
          }
         return arr.filter(el=> el.length===5);
      }
