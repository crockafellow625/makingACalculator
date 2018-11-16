function calculator() {
    // Variables
    var valueOne = parseInt(document.querySelector('#valueOne').value);
    var valueTwo = parseInt(document.querySelector('#valueTwo').value);
    var operator = document.querySelector('#operator').value;
    var calculate;

    // Calculator Functions
    if (operator == "add") {
        calculate = valueOne + valueTwo;
    } else if (operator == "min" ) {
        calculate = valueOne - valueTwo;
    } else if (operator == "div") {
        calculate = valueOne / valueTwo;
    } else if (operator == "mul") {
        calculate = valueOne * valueTwo;
    }
    
    // Fill Answer
    document.querySelector('#result').innerHTML = calculate;
}