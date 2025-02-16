function mostFrequentWord(paragraph) {
    const cleanedParagraph = paragraph.replace(/[^\w\s]/g, '').toLowerCase();

    const words = cleanedParagraph.split(/\s+/);

    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    let mostFrequent = '';
    let maxCount = 0;
    for (let word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostFrequent = word;
            maxCount = wordCount[word];
        }
    }

    return mostFrequent;
}

const paragraph = "Hello, world! Hello... everyone. This world is great, and the world says hello!";
const frequentWord = mostFrequentWord(paragraph);
console.log(frequentWord);
