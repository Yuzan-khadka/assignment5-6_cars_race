//creating class named Car with constructor
class Car{
constructor(brand, model, year, color, price, gas){
//properties of car class
this.brand = brand;
this.model = model;
this.year = year;
this.color = color;
this.price = price;
this.gas = gas;
}

//method of car class
honk(){
console.log('\nTuut tuut!!');
console.log(this.brand);
console.log(this.model);
console.log(this.year);
console.log(this.color);
console.log(this.price);
console.log(this.gas);
}
}

//creating instances of the Car class
let honda = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45)
let ford = new Car('Ford', 'F-150', 2020, 'Red', 25000, 30)
let bmw = new Car('BMW', 'X5', 2022, 'Red', 60000, 65)
let mazda = new Car('Mazda', ' CX-5', 2019, 'Red', 15000, 60)
let audi = new Car('Audi', 'Q7', 2018, 'Red', 52000, 47)
let kia = new Car('Kia', 'Forte', 2020, 'Red', 21000, 56)

//invoking the honk method for each instance
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();


//creating function for calculating the amount of fuel remained after race between cars
function carsRace(cars) {
  const currentYear = new Date().getFullYear();
  const turns = 7;

  for (let i = 0; i < turns; i++) {
    console.log("\nTurn", i + 1);
    cars.forEach((car) => {
      let gasUsed = 5 + (currentYear - car.year);
      car.gas -= gasUsed;
      console.log(car.brand, car.model, "gas:", car.gas + ' litres');
    });
  }
}

const cars = [honda, ford, bmw, mazda, audi, kia];
//calling function
carsRace(cars);

