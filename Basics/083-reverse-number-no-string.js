function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

const num = Number(prompt("Enter a number: "));
console.log("Reversed Number: "+reverseNumber(num))

