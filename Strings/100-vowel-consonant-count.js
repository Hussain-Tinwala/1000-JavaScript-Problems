function countVowelsConsonants(str) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0, consonantCount = 0;

    for (const char of str.replace(/[^a-zA-Z]/g, "")) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

console.log(countVowelsConsonants("Hello World!")); 
