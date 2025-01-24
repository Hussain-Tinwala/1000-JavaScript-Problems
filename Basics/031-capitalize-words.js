let sentence= prompt("Enter sentence: ")
let capitalizeSentence= capitalizeWords(sentence)
console.log("Capitalized Sentence: "+capitalizeSentence)

function capitalizeWords(sentence)
{
    if(!sentence.trim())
    {
        console.log("Empty input")
    } else{
        return sentence.split(" ").map(word=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(" ");
    }
}