let num = prompt("Enter num: ")
if (!num.trim() || isNaN(num) || num < 0) {
    console.log("Invalid Input")
} else {
    num = Number.parseInt(num)
    console.log(factorial(num))

    function factorial(num) {
        if (num === 0 || num === 1) {
            return 1
        } else {
            return num * factorial(num - 1)
        }
    }
}