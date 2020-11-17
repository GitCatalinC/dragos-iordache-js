class Car {
  topReverseSpeed = -50;
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 160;
  }

  accelerate() {
    this.speed++;
  }
  deccelerate() {
    this.speed--;
  }
  stop() {
    this.speed = 0;
    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      return;
    }

    this.speed = speed;
  }
}

let audi = new Car('Audi', 'black', 4, 50);

console.warn('Ex1');

let opel = new Car('Opel', 'red', 4, 3);
