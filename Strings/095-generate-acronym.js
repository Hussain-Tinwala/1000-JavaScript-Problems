function generateAcronym(phrase) {
    return phrase
        .split(" ")
        .map(word => word.charAt(0).toUpperCase())
        .join("");
}

const phrase = prompt("Enter a phrase: ");
console.log("Acronym:", generateAcronym(phrase));
