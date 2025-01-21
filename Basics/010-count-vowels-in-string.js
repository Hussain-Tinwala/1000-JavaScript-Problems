let input = prompt("Enter string: ").trim();

if (!input) {
    console.log("Invalid Input")
} else {
    let vowels = "aeiouAEIOU"
    let count = 0

    for (let ch of input) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    console.log("Vowels in string " + input + ": " + count);

}

