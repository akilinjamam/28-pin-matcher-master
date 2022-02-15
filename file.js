//generating pin using function

function getPin() {
    const pin = Math.round(Math.random() * 100000);
    const pinstring = pin + '';

    if (pinstring.length == 5) {
        return pin
    }

    else {
        return getPin();
    }
}




function generatePin() {
    const pin = getPin();

    document.getElementById('input').value = pin
}


// this is typing part to varify the pin which is created from pin generating code.


document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const displayValue = document.getElementById('displayed');
    if (isNaN(number)) {

        if (number == 'C') {
            displayValue.value = '';
        }
    }
    else {

        const previous = displayValue.value;
        const newValue = previous + number;
        displayValue.value = newValue;
    }

})


// matching part, pin with typed number

function veryfyPin() {
    // console.log('clicked')
    const pin = document.getElementById('input').value;
    const displayField = document.getElementById('displayed').value;

    const typeSuccess = document.getElementById('matched');
    const typeError = document.getElementById('notMatched');

    if (pin == displayField) {


        typeSuccess.style.display = 'block';
        typeError.style.display = 'none';


    }
    else {

        typeError.style.display = 'block';
        typeSuccess.style.display = 'none';

    }
}









