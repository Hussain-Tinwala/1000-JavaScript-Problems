function isUniqueNumber(num) {
    const digits = num.toString().split("");
    return new Set(digits).size === digits.length;
}

const num = Number(prompt("Enter a number: "));
console.log(isUniqueNumber(num)?"It's a Unique Number":"Not Unique")