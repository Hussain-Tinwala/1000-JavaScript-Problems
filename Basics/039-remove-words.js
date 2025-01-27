function removeWords() {
    const sentence = prompt("Enter a sentence:");
    if (!sentence.trim()) {
        console.log("Empty String");
        return;
    }

    const wordsToRemoveInput = prompt("Enter words to remove (comma-separated):");
    if (!wordsToRemoveInput.trim()) {
        console.log("Empty String");
        return;
    }

    const wordsToRemove = wordsToRemoveInput.split(",").map(word => word.trim());

    const updatedSentence = sentence
        .split(" ")
        .filter(word => !wordsToRemove.includes(word))
        .join(" ");

    console.log("Updated Sentence:", updatedSentence);
}

removeWords();
