import random


class Die:

    def __init__(self, sides):
        self._sides = sides
        self._value = 1

    def value(self):
        return self._value

    def roll(self):
        self._value = random.randint(1, self._sides)
        return self._value

    def __str__(self):
        return f'sides: {self._sides} value: {self._value}'


play_die = Die(int(input('How many sides? ')))
print(play_die)

play_die.roll()
print(play_die)


class six_sided_die(Die):

    def __init__(self):
        super().__init__(6)


play_six_sided = six_sided_die()
print(play_six_sided)

play_six_sided.roll()
print(play_six_sided)


# selection sort
def selection_sort():
    numbers = [54, 67, 23, 78, 34, 29]
    print(numbers)
    for i in range(len(numbers)):
        lower_number = i
        for j in range(i + 1, len(numbers)):
            if numbers[j] < numbers[lower_number]:
                lower_number = j

        #temp = numbers[lower_number]
        #numbers[lower_number] = numbers[i]
        #numbers[i] = temp
        numbers[i], numbers[lower_number] = numbers[lower_number], numbers[i]
    print(numbers)


selection_sort()
