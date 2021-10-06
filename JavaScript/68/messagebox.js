window.pcs = window.pcs || {};
window.pcs.messagebox = (function() {
    'use strict';

    const offsetIncrement = 30;
    let leftOffset = -150;
    let topOffset = -80;
    const width = 300;
    const height = 160;
    let nextZIndex = 1;

    const modalDiv = document.createElement('div');
    modalDiv.style.position = 'fixed';
    modalDiv.style.top = '0';
    modalDiv.style.left = '0';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.backgroundColor = 'lightgray';
    modalDiv.style.opacity = '.5';
    modalDiv.style.display = 'none';
    document.body.appendChild(modalDiv);

    function showMessageBox(msg, modal, buttons, callback) {

        const messageDiv = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageDiv.appendChild(span);

        const buttonDiv = document.createElement('div');
        messageDiv.appendChild(buttonDiv);
        document.body.appendChild(messageDiv);

        messageDiv.style.backgroundColor = 'lightblue';
        messageDiv.style.padding = '1em';
        messageDiv.style.paddingBottom = '36px';
        messageDiv.style.boxSizing = 'border-box';
        messageDiv.style.width = `${width}px`;
        messageDiv.style.height = `${height}px`;
        messageDiv.style.position = 'absolute';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.marginTop = `${topOffset}px`;
        messageDiv.style.marginLeft = `${leftOffset}px`;
        messageDiv.style.border = '1px solid black';

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttonDiv.style.position = 'absolute';
        buttonDiv.style.position = 'absolute';
        buttonDiv.style.bottom = '8px';
        buttonDiv.style.left = 0;
        buttonDiv.style.textAlign = 'center';
        buttonDiv.style.width = '100%';

        messageDiv.className = 'messageBox';

        if (modal) {
            modalDiv.style.display = 'block';
            modalDiv.style.zIndex = nextZIndex++;
        }
        messageDiv.style.zIndex = nextZIndex++;

        messageDiv.addEventListener('click', () => {
            messageDiv.style.zIndex = nextZIndex++;
        });

        topOffset += offsetIncrement;
        leftOffset += offsetIncrement;

        if (parseFloat(getComputedStyle(messageDiv).top) + topOffset + height > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }

        if (parseFloat(getComputedStyle(messageDiv).left) + leftOffset + width > window.innerWidth) {
            leftOffset -= window.innerWidth - width;
        }

        const okButton = document.createElement('button');
        okButton.addEventListener('click', () => {
            messageDiv.remove();
            modalDiv.style.display = 'none';
        });

        if (Array.isArray(buttons)) {
            let innerButton;

            buttons.forEach(element => {
                innerButton = document.createElement('button');

                buttonDiv.appendChild(innerButton);
                innerButton.addEventListener('click', () => {
                    messageDiv.remove();
                    if (callback) {
                        callback(element);
                    }
                });
                innerButton.innerText = element;
            });

        } else {
            okButton.innerText = 'ok';
            buttonDiv.appendChild(okButton);
        }
    }

    return {
        show: showMessageBox
    };

}());