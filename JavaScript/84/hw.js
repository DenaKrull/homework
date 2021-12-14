let clickCount = 0;

$('#button').click(() => {
    $('#result').text(`I was clicked ${++clickCount} times`);

});