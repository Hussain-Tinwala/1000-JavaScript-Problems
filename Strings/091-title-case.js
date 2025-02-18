function toTitleCase(sentence) {
    return sentence
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

const sentence = prompt("Enter a sentence: ");
console.log("Tile Case: "+toTitleCase(sentence))
