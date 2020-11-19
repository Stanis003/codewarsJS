
1) https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

2) https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

  function circleCircumference(circle) {
    return +(2*Math.PI*circle.radius).toFixed(6);
    }

3) https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, status);
      this.legs=0;
      this.species = "shark";
      this.status=status;
    }
  }
  
  class Cat extends Animal {
    constructor (name,age,status){
      super(name, age, status);
      this.legs=4;
      this.species="cat";
      this.status=status;
       }
     introduce(){
         return `${super.introduce()}  Meow meow!`;
       }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master){
      super(name, age,status);
      this.status=status;
      this.master=master;
      this.legs=4;
      this.species = "dog";
      }
      greetMaster(){
      return `Hello ${this.master}`;
      }
  }

4) 
