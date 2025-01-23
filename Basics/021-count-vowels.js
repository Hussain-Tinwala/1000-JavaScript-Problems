let string = prompt("Enter string: ")
let count = 0
if (!string.trim()) {
    console.log("Empty String")
} else {
    let vowels = "aeiouAEIOU"
    for (let i of string) {
        // console.log(i)
        if (vowels.includes(i)) {
            count++;
        }
    }
    console.log("Count of Vowels: " + count)
}