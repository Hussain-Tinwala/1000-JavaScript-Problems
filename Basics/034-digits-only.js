const input = prompt("Enter a string: ");
const result = containsOnlyDigits(input);
console.log(result ? "The string contains only digits" : "The string does not contain only digits");

function containsOnlyDigits(str) {
    const regex = /^\d+$/;
    return regex.test(str);
}

