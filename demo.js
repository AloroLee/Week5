
//  functional programming trat functions as values (a data type)

const car = {
    location:0,
    speed: 5,
    drive: (car)=> car.location += car.speed 
    // location = (location + speed)
};

console.log(car.location)
car.drive(car)
car.drive(car)
car.drive(car)
car.drive(car)
car.drive(car)
console.log(car.location)