let sentence= prompt("Enter sentence: ")

if(!sentence.trim())
{
    console.log("Invalid Input")
} else{
    let words= sentence.split(" ");
    words.sort();
    let sortedSentence= words.join(" ")
    console.log("Sorted Sentence: "+sortedSentence)
}