let string= prompt("Enter String: ")

if(!string.trim())
{
    console.log("Empty String");
} else{
    string=string.toLowerCase().replace(/[^a-z0-9]/gi, '');
    let rev= string.split("").reverse().join("");

    if(rev===string)
    {
        console.log("The String "+string+" is pallindrome");
    } else{
        console.log("The String "+string+" is not pallindrome");

    }


}