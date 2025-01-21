let num = prompt("Enter the number of terms: ");


if (isNaN(num) || num<=0) {
    console.log("Invalid input");
} else {
    num = Number.parseInt(num);
    let first = 0;
    let second = 1;

    let fibSeries=[first,second];

    let i = 2;
    while (i < num) {
        let next = first + second;
        fibSeries.push(next);
        first=second;
        second=next;
        i++;

    }
    console.log("Fibonacci Series: "+fibSeries.join(", "));
}