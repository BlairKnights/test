export class Student {
    constructor(public name: string, public age: number) 
    {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  