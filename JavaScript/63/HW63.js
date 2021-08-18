(function() {
    'use strict';

    const balance = 25;

    function Transaction() {
        console.log(this.balance);
    }

    const Account1 = {
        balance: balance,

        performTransaction: function(amount) {
            console.log(this.balance += amount);
        },
        print: function() {
            console.log(this.balance);
        }
    };

    const Account2 = {
        balance: balance,

        performTransaction: function(amount) {
            console.log(this.balance += amount);
        },
        print: function() {
            console.log(this.balance);
        }
    };


    Account1.print();
    Account1.performTransaction(5);

    Account2.print();
    Account2.performTransaction(-5);

    const thePrintfromAccount1 = Account1.print;
    const thePrintfromAccount2 = Transaction;

    thePrintfromAccount1.call(Account1);
    thePrintfromAccount2.call(Account2);

})();