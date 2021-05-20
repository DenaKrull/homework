from typing import Union


def using_list():
    list_of_months = ['January', 'February', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November', 'Decmeber']
    list_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for month, days in zip(list_of_months, list_of_days):
        print(month, days)


using_list()
print()


def using_tupple():
    tupple_of_months = ('January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'Decmeber')
    tupple_of_days = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
    for month, days in zip(tupple_of_months, tupple_of_days):
        print(month, days)


using_tupple()
print()


def months_in_dictionary():

    months = {
        'January': 31,
        'February': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31,

    }

    # for month in months:
    #   print(month, months[month])

    for month, day in months.items():
        print(month, day)


months_in_dictionary()


def month_name(month):
    if month == 'February':
        print('28 days')
    elif month in ("April", "June", "September", "November"):
        print("30 days")
    elif month in ("January", "March", "May", "July", "August", "October", "December"):
        print("31 days")
    else:
        print("Wrong month name")


#month_name(str(input("pass me a month, I'll give you the days ")))


def get_days_in_month(month: str) -> Union[int, None]:
    months = {
        'January': 31,
        'February': 28,
        'March': 31,
        'April': 30,
        'May': 31,
        'June': 30,
        'July': 31,
        'August': 31,
        'September': 30,
        'October': 31,
        'November': 30,
        'December': 31,

    }
    # if months in month:
    # return months[month]

    # return -1

    return months.get(month.title())  # , -1)


month_to_get = str(input("pass me a month "))

print(f'{month_to_get} has {get_days_in_month(month_to_get)} days')
