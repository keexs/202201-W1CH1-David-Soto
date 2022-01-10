let inputs = "";
let decimalUsed = false;

let num1 = 0;
let num2;

let operatorValue;
let firstOperation = true;

const numInput = (n) => {
    if (inputs.length < 35) {
        inputs += n;
        document.getElementById("history").value = inputs;   
    }
}

const decimal = (dec) => {
    if (isNaN(inputs.charAt(inputs.length -1)) || inputs === "") {
        inputs += "0";
    }
    if (decimalUsed === false) {
        inputs += dec;
        decimalUsed = true;
    }
    document.getElementById("history").value = inputs;
}

const operator = (x) => {
    inputs += x;
    decimalUsed = false;
    document.getElementById("history").value = inputs;
}

const total = () => {
    if (firstOperation === true) {
        equal();
        equal();
        firstOperation = false;
    } else {
        equal();
    }
}

const equal = () => {
    for (let i = 0; i < inputs.length; i++) {

        if (!isNaN(parseInt(inputs.charAt(i))) || inputs.charAt(i) === ".") {
            if (num2) {
                num2 += inputs.charAt(i);
            } else {
                num2 = inputs.charAt(i);
            }
            
        } else {
            simpleOperation();

            operatorValue = inputs.charAt(i);
            num2 = "";
        }
    }
    simpleOperation();
    num1 = parseFloat(num1.toFixed(3));

    if (Number.isInteger(num1) === false) {
        num1 = num1.toString();
        for (let i = 2; i > 0; i--) {
            if (num1.charAt(0, -1) === "0") {
                num1 = num1.slice(0,-1);
            }
        }
    }

    document.getElementById("result").value = num1;

    operatorValue = "+";
    decimalUsed = false;
    num2 = "";
    num1 = 0;
}

const simpleOperation = () => {
    switch (operatorValue) {
        case "+":
            num1 = num1 + parseFloat(num2);
            break;

        case "-":
            num1 = num1 - parseFloat(num2);
            break;

        case "*":
            num1 = num1 * parseFloat(num2);
            break;

        case "/":
            num1 = num1 / parseFloat(num2);
            break;

        default:
            break;
    }
}

const ac = () => {
    document.getElementById("history").value = "Calculator is ready";
    document.getElementById("result").value = "0";

    inputs = "";
    num1 = 0;
    num2 = "";
    decimalUsed = false;
    operatorValue = "+";
    firstOperation = true;
}

const deleteLastInput = () => {
    if (inputs.charAt(inputs.length -1) === ".") {
        decimalUsed = false;
    }

    inputs = inputs.slice(0,-1);
    document.getElementById("history").value = inputs;
}