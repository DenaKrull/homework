(function() {
    'use strict';

    const input = get("input");
    const messagebox = get('popup');
    const go = get('Go');
    const ok = get('ok');
    const message = get("message");
    const test = get("test");

    function get(id) {
        return document.getElementById(id);
    }

    test.addEventListener('click', () => {
        message.innerText = "This is a test of the emergency broadcast system";
        messagebox.style.display = 'block';


    });

    go.addEventListener('click', () => {
        message.innerText = input.value;
        messagebox.style.display = 'block';
    });


    ok.addEventListener('click', () => {
        reset();
        messagebox.style.display = 'none';
    });

    function reset() {
        message.innerText = "";
    }

})();