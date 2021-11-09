(function() {
    'use strict';


    function Vehicle(color) {
        this.color = color;

    }
    Vehicle.prototype.go = function(speed) {
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };
    Vehicle.prototype.print = function() {
        console.log(` The ${this.color} vehicle is speeding at ${this.speed} mph`);
    };


    function Plane(color) {
        Vehicle.call(this, color);
    }
    // Plane.prototype = new Vehicle();
    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.constructor = Plane;
    Plane.prototype.go = function(speed) {
        this.speed = speed;
        console.log(`now flying at speed ${this.speed}`);
    };


    const car = new Vehicle('blue');
    const plane = new Plane('orange');

    console.log(car);
    console.log(plane);

    car.go(56);
    plane.go(300);

    car.print();
    plane.print();
}());