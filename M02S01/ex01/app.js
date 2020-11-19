class Car {
  topReverseSpeed = -50;
  constructor(make, color, wheels, speed, isTrunkOpen, areLightsOn) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = 160;
    this.isTrunkOpen = false;
    this.areLightsOn = false;
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
  openTrunk() {
    this.isTrunkOpen = true;
  }
  closeTrunk() {
    this.isTrunkOpen = false;
  }
  turnLightsOn() {
    this.areLightsOn = true;
  }
  turnLightsOff() {
    this.areLightsOn = false;
  }
  flashLights() {
    if (this.areLightsOn === true) {
      this.turnLightsOff();
      window.setTimeout(() => {
        this.turnLightsOn();
      }, 5000);
    } else {
      this.turnLightsOn();
      window.setTimeout(() => {
        this.turnLightsOff();
      }, 5000);
    }
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

var cars = [opel, audi];
// for (i = 0; i < cars.length; i++) {
//   console.log(
//     `Masina este marca ${cars[i].make} si se deplaseaza cu viteza ${cars[i].speed}`,
//   );
// }
cars.forEach((item) => {
  console.log(`Masina este marca ${item.make} si are viteza ${item.speed} `);
});
