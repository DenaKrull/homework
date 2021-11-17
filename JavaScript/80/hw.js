(function() {
    'use strict';
    class Student {
        constructor(first, last, age, grade) {
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;

        }
    }

    const students = [new Student('John', 'Doe', 15, 2),
        new Student('Dena', 'Krull', 20, 4),
        new Student('Ayelet', 'kerstein', 23, 6),
        new Student('Yael', 'Levi', 18, 4),
        new Student('Danny', 'Groovy', 18, 8),

    ];

    function printStudents(...students) {

        for (let i = 0; i < students.length; i++) {
            console.log(`${students[i].first} ${students[i].last} is ${students[i].age} years old and is in grade ${students[i].grade}`);

        }


    }

    const [...rest] = students;
    printStudents(...rest);

    function copy(...students) {

        const copy = {};
        let { first, last, ...rest } = students;
        Object.assign(copy, new Student(last, first, rest));
        return copy;

    }
    const {...all } = students;

    console.log(copy(all));
    // printStudents(true, ...copy(...students));
}());