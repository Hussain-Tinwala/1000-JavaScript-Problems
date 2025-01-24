let inputArray = [1, 2, 3, 4, 2, 3, 5];
let duplicates = findDuplicates(inputArray);
console.log("Duplicates:", duplicates);

function findDuplicates(arr) {
    const frequency = {};
    const duplicates = [];

    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    for (const [key, value] of Object.entries(frequency)) {
        if (value > 1) {
            duplicates.push(Number(key));
        }
    }

    return duplicates;
}

