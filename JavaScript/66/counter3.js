for (let i = 0; i < 10; i++) {
    window.app.counter.add();
}

const counter1 = window.app.counter2.createCounter();
const counter2 = window.app.counter2.createCounter();

for (let i = 0; i < 5; i++) {
    counter1.add();
}


for (let i = 0; i < 15; i++) {
    counter2.add();
}

window.app.counter.getCount();
counter1.getCount();
counter2.getCount();

window.app.counter2.getNumberOfCounters();