function factorial(n) {
    return n == 0 ? 1 : n * factorial(n - 1)
}

function isKrishnaMurthy(num) {
    const sum = num
        .toString()
        .split("")
        .reduce((acc, digit) => acc + factorial(Number(digit)),0);

    return sum === num;
}

let num = prompt("Enter num:")
num = Number.parseInt(num)
if (isKrishnaMurthy(num)) {
    console.log("It's KrishnaMurthy number")
    
} else{
    console.log("It's not a KrishnaMurthy number")
    
}