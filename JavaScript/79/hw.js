(function() {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }
        go(speed) {
            this.speed = speed;
            console.log(`now going at speed ${speed}`);
        }
        print() {
            console.log(` The ${this.color} vehicle is speeding at ${this.speed} mph`);

        }
    }
    const v = new Vehicle('red');
    v.go(50);
    v.print();

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log(`now flying at speed ${speed}`);
        }
    }
    const p = new Plane('blue');
    p.go(100);
    p.print();

    const v2 = new Vehicle('green');
    v2.go(100);
    v2.print();

}());