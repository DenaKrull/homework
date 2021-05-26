class Vehicle:

    def __init__(self, color):
        self._color = color
        self._speed = 0

    def get_color(self):
        return self._color

    def go(self, speed):
        self._speed = speed
        print(f'Vehicle is now going at speed: {self._speed}')

    def __str__(self):
        return f'Color: {self._color} Current Speed: {self._speed}'


car = Vehicle('red')
car.go(5)
print(car)


class Plane(Vehicle):

    def __init__(self, color):
        super().__init__(color)

    def go(self, speed):
        self._speed = speed
        print(f'Vehicle is now flying at speed: {self._speed}')


plane = Plane('blue')
plane.go(10)
print(plane)
