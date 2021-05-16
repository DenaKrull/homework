from math import e
import random
name = 'Dena Krull'
address = '5 Hastings Road'
people = ['Sarala', 'Moshe', 'Aaron', 'Dena', 'Avraham', 'Miriam', 'Reuvy']
print(f'Name: {name} \nAddress: {address}')
print(people)
print(name[::3])  # every third variable
print(people[1:-1])  # from second to second to last
print(people[-2][1:-1])  # slicing in the second to last word


# multiplication tables
for i in range(1, 11):
    line = ' '
    for j in range(1, 11):
        # line += ' {:3d} '.format(i * j)
        line += f'{i * j :3d} '
        # print(i, 'x', j, '=', j * i)
    print(line)


# guess the number game
begin_num = 1
end_num = 100
random_number = random.randint(begin_num, end_num)
guess_number = -1
counter = 0

print('Guess a number 1 - 100')

while guess_number != random_number:

    try:
        guess_number = int(input('Guess: '))
        counter += 1
    except ValueError:
        print('Please enter a valid value')

    if guess_number < begin_num or guess_number > end_num:
        print(f"please enter a valid number between {begin_num} and {end_num}")
    elif guess_number > random_number:
        print('You guessed too high')
    elif guess_number < random_number:
        print('You guessed too low')

print(f'Yay you won!, it took you {counter} tries!')
import this 
