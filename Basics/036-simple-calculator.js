function performCalculation() {
    let num1 = prompt("Enter num1: ")
    let num2 = prompt("Enter num2: ")

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
    }
    else {
        num1=Number.parseInt(num1)
        num2=Number.parseInt(num2)
        let operator= prompt("Enter operator: ")
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    alert("Cannot divide by zero!");
                    return;
                }
                result = num1 / num2;
                break;
            default:
                alert("Invalid operation!");
                return;
        }

        alert("Result: " + result);
    }

}
performCalculation();