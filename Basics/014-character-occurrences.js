let string= prompt("Enter string: ")
let charToCount= prompt("Enter character to count: ")

if(!string.trim())
{
    console.log("Empty String")
} else{
    let count=0;

    for(let i=0; i<string.length; i++)
    {
        if(string[i]===charToCount)
        {
            count++;
        }
    }
    console.log("Count of "+charToCount+" in "+string+": "+count)
}