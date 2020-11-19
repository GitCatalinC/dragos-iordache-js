let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topspeed: 140,
  topReverseSpeed: -50,
  displaySpeed: function () {
    console.log(
      `Vehiculul ${this.make} se deplasa cu viteza ${this.speed}km/h`,
    );
  },
  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },
  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
    this.displaySpeed();
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;

console.log(audi);

// Adauga metoda setSpeed(), proprietatile topSpeed si topReverseSpeed si implementeaza protectiile deja cunoscute.
// Seteaza topSpeed la 140 apoi ruleaza metoda setSpeed() pentru a face viteza curenta 140.
// Ruleaza metoda accelerate().
