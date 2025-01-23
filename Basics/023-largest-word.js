let sentence= prompt("Enter a sentence: ")

if(!sentence.trim())
{
    console.log("Empty String")
} else{
    let words= sentence.split(" ");
    let largestWord= words.reduce((longest, current)=>{
        return current.length> longest.length? current: longest;
    },"");

    console.log("Largest word: "+largestWord);
}