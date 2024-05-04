class Bus 
{
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) 
    {
      this.make = make;
      this.model = model;
      this.year = year;
    }
}
  
const myBus = new Bus("Volvo", "9400 B11R", 2019);
console.log("\nMake:", myBus.make);     
console.log("Model:", myBus.model);   
console.log("Year:", myBus.year,"\n");     
  