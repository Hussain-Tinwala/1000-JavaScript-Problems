function removeDuplicateWords(sentence) {
    const words = sentence.split(" ");
    return [...new Set(words)].join(" ");
}

const sentence = prompt("Enter a sentence: ");
console.log(`Updated Sentence:`, removeDuplicateWords(sentence));
