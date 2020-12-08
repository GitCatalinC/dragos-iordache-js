class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.domId = `${this.make.toLowerCase()}${this.color}${Date.now()}`;
    this.displayDomSpeed();
  }

  accelerate(speed = 1) {
    this.speed = this.speed + speed;
    this.displayDomSpeed();
    return this;
  }
  decelerate(speed = 1) {
    this.speed = this.speed - speed;
    this.displayDomSpeed();
    return this;
  }
  displayDomSpeed() {
    let speedDial = document.getElementById(this.domId);
    if (speedDial === null) {
      speedDial = document.createElement('div');
    }
    speedDial.id = this.domId;
    speedDial.innerText = `${this.speed}km/h`;
    document.body.append(speedDial);
  }
  setSpeed(value) {
    this.speed = value;
    this.displayDomSpeed();
  }
}

var audi = new Car('Audi', 'black', 4, 50);

audi.accelerate(12).decelerate(3).decelerate(4);

audi.setSpeed(4).accelerate(1);
