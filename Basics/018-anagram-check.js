let string1= prompt("Enter string1: ")
let string2= prompt("Enter string2: ")

if(!string1.trim() || !string2.trim())
{
    console.log("Empty String")

} else{
    let convertedString1= string1.replace(/\s+/g, '').toLowerCase();
    let convertedString2= string2.replace(/\s+/g, '').toLowerCase();

    if(convertedString1.length !== convertedString2.length)
    {
        console.log("Strings are not anagrams")
    } else{
        let sortedString1=convertedString1.split('').sort().join('');
        let sortedString2=convertedString2.split('').sort().join('');

        if(sortedString1===sortedString2)
        {
            console.log("Strings are anagrams")
        } else{
            console.log("Strings are not anagrams")
        }
    }
}

