//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
   constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
   }

   maintenceCheck() {
    if (this.mileage > 30000) {            
        this.scheduleService = true
        return this.scheduleService;                       
    }
}

start() {
    if (this.fuel > 0) {            
        console.log("engine has started.");
        return this.started = true
    } else {
        console.log("go gas your car!");
        return this.started = false;
    }
}

loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
        if ((num + this.passenger) <= this.maxPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " is at full occupancy.");

        }
    } else {
        console.log(this.model + " " + this.make + " " + "has no more room!");
    }
}


}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.maintenceCheck()

console.log(myCar)












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:

let myCar2 = new Car('prius', 'sedan', '2016', 'white', 65000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.maintenceCheck()

console.log(myCar2)

let myCar3 = new Car('miata', 'sedan', '2019', 'silver', 20000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.maintenceCheck()

console.log(myCar3)