function countCharacterFrequency(inputString) {
    const frequency = {};

    for (const char of inputString) {
        if (char === ' ') continue;

        if (frequency[char]) {
            frequency[char] += 1;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

const inputString = prompt("Enter a string: ");
const frequency = countCharacterFrequency(inputString);
console.log(frequency);
