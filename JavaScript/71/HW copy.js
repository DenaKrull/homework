(function() {
    'use strict';

    const form = $("<form></form>").append();
    const InputName = $("<input placeholder='name'>").append();
    const InputAddress = $("<input placeholder='address'>").append();
    const submitButton = $("<button>Submit</button>").append();
    const checkbox = $("<input type = checkbox>");
    const FormInfo = $("<div> </div>").append();
    const okButton = $("<button>ok</button>").append();

    InputName.appendTo(form);
    InputAddress.appendTo(form);
    checkbox.appendTo(form);
    submitButton.appendTo(form);
    okButton.appendTo(FormInfo);

    form.appendTo($("body"));
    FormInfo.appendTo($("body"));


    FormInfo.css("background-color", 'lightblue');
    FormInfo.css("padding", "1em");
    FormInfo.css("paddingBottom", '36px');
    FormInfo.css('boxSizing', 'border-box');
    FormInfo.css('width', '300px');
    FormInfo.css('height', '160px');
    FormInfo.css('position', 'absolute');
    FormInfo.css('top', '50%');
    FormInfo.css('left', '50%');
    FormInfo.css('marginTop', '-80px');
    FormInfo.css('marginLeft', '-150px');
    FormInfo.css('border', '1px solid black');
    FormInfo.css('display', 'none');




    okButton.click(() => {
        FormInfo.remove();
        FormInfo.style.display = 'none';
    });

    submitButton.prop("disabled", true);

    checkbox.change(function() {
        submitButton.prop("disabled", false);
    });




    form.submit(function(event) {
        if (checkbox.prop("checked")) {
            submitButton.prop("disabled", false);
            event.preventDefault();
            let name = InputName.val();
            let address = InputAddress.val();
            FormInfo.text(name + " " + address);
            FormInfo.css('display', 'block');


        }
    });


}());