let num = prompt("Enter num: ");
num = Number.parseInt(num)

if (isNaN(num) || num < 0) {
    console.log("Invalid Input")
} else {
    let rem = 0, sum = 0;
    let org = num;
    let rev = 0;

    while (num > 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    if (rev === org) {
        console.log(org + " is a Pallindrome");
    } else {
        console.log(org + " is not a Pallindrome");
    }
}