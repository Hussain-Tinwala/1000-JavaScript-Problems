function mostFrequentWord(sentence) {
    const words = sentence.toLowerCase().match(/\b\w+\b/g);
    if (!words) return null;

    const frequency = {};
    let maxCount = 0;
    let mostFrequent = "";

    for (const word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
        if (frequency[word] > maxCount) {
            maxCount = frequency[word];
            mostFrequent = word;
        }
    }

    return mostFrequent;
}

console.log(mostFrequentWord("JavaScript is awesome and JavaScript is powerful.")); 

