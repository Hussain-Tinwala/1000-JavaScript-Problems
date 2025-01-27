function reverseWords() {
    const sentence = prompt("Enter a sentence:");
    if (!sentence.trim()) {
        console.log("Empty String");
        return;
    }

    const reversedSentence = sentence
        .split(" ")
        .reverse()
        .join(" ");

    console.log("Reversed Sentence:", reversedSentence);
}

reverseWords();
