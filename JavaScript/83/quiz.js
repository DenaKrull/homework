(function() {
    'use strict';

    const display = $('#display');

    class Item {
        constructor(item, quantity, total) {
            this.item = item;
            this.quantity = quantity;
            this.total = total;
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
                total.toFixed(2);
            });
            return total;

        }
    }
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
    doTheFetch('quiz.json');

    function createArray(data) {
        data.forEach(orders => {
            let items = [];
            orders.items.forEach(item => {
                items.push(new Item(item.item, item.quantity, item.total));
            });
            let order = [];
            order.push(new Order(orders.customer, orders.address, items));

            printOrder(order);
        });
    }

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