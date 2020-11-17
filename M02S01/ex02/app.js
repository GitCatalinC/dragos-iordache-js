class Vehicle {
  constructor(make, color, wheels, speed, topSpeed, topReverseSpeed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}`);
  }

  getSpeed(format) {
    let speed = format === true ? `${this.speed}km/h` : this.speed;
    return this.speed;
  }
  accelerate() {
    let newSpeed = this.speed + 1;
    this.setSpeed(newSpeed);
    this.displaySpeed();
  }
  decelarate() {
    let newSpeed = this.speed - 1;
    this.setSpeed(newSpeed);
    this.displaySpeed();
  }
  stop() {
    this.setSpeed(0);
  }
  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      this.displaySpeed();
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();
      return;
    }
    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
  decelerate() {
    if (--this.speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }

    this.displaySpeed();
  }
}

let bike = new Bicycle('Pegas', 'red', 8, 20);
bike.setSpeed(2);
bike.decelerate();
bike.decelerate();
bike.decelerate();
bike.setSpeed(-10);

// Creeaza o noua clasa care extinde Vehicle in mod similar cu Bicycle, numita Tricycle. Diferenta fiind ca o tricicleta are trei roti.
// Instantiaza o tricicleta (marca Tryke, culoare red, viteza curenta 2, viteza minima -2, viteza maxima 9). O poti stoca intr-o variabila numita trike.
// Seteaza viteza instantei trike la 0
// Foloseste metoda decelerate() de trei ori, ce observi?
// Seteaza viteza instantei trike la -10, ce observi?

class Tricycle extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    super(make, color, 3, speed, topSpeed, topReverseSpeed);
  }
}

let trike = new Tricycle('Tryke', 'Red', 2, 9, -2);
trike.setSpeed(0);
trike.decelarate();
trike.decelarate();
trike.decelarate();

let audi = new Car('Audi', 'blue', 3, 140, -50);
audi.setSpeed(140);
audi.accelerate();
