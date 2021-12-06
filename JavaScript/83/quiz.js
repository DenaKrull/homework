(function() {
    'use strict';

    const display = $('#display');

    class Item {
        constructor(item, quantity, total) {
            this.item = item;
            this.quantity = quantity;

            // SL - we dont really need total in this class, but not a problem
            this.total = total;

            // SL - not a problem but simple enough to combine in one line for less code to read
            let num = (this.total / this.quantity);
            this.price = num.toFixed(2);

        }
    }
    class Order {
        constructor(name, address, items) {
            this.name = name;
            this.address = address;
            this.items = items;
        }
        get total() {
            let total = 0;
            this.items.forEach(item => {
                total += item.total;

                // SL - this does nothing since you dont save result - and even if it did, why not just do it once at end, why each time in forEach
                total.toFixed(2);
            });
            return total;

        }
    }

    // SL - doTheFetch, createArray, not the most descriptive names for fetching and processing orders...
    async function doTheFetch(file) {
        try {
            let response = await fetch(file);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText }`);
            }
            let data = await response.json();
            createArray(data);

        } catch (e) {
            console.error('Error ', e);
        }


    }

    // SL - function is async - but you dont await - which turns out to be ok since you dont do anything with the fetched data here
    // instead you do it inside doTheFetch.
    doTheFetch('quiz.json');

    function createArray(data) {
        data.forEach(orders => {
            let items = [];
            orders.items.forEach(item => {
                items.push(new Item(item.item, item.quantity, item.total));
            });

            // SL - new array for each order? why is this useful. You would want an array of all orders but your not getting that
            let order = [];
            order.push(new Order(orders.customer, orders.address, items));

            // SL - rather then displaying each order as processing, I would create all, then display all
            printOrder(order);
        });
    }


    // SL - print?
    function printOrder(orders) {
        orders.forEach(order => {
            display.append($(`<hr><p>Customer: ${order.name}</p>
            <p>Address: ${order.address}</p>
            <p>Total: ${order.total}</p> <br>`));
            printItems(order.items);
        });
    }

    function printItems(items) {
        display.append($(`<p>Items:</p>`));
        items.forEach(item => {
            display.append(`<p>Item: ${item.item}</p>
             <p>Quantity: ${item.quantity} </p>
              <p>Price: ${item.price}</p>
              <br>`);
        });
    }


}());

// SL - nice - 95