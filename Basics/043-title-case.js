let input= prompt("Enter a sentence: ")
console.log("Title Case: "+toTitleCase(input))

function toTitleCase(str){
    if(!str.trim())
    {
        return "Empty String!";
    }
    return str
            .toLowerCase()
            .split(" ")
            .map(word=>word.charAt(0).toUpperCase()+word.slice(1))
            .join(" ");


}