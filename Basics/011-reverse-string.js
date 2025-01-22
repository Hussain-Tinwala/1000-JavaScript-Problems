let string= prompt("Enter String: ")

if(!string.trim())
{
    console.log("Empty String");
} else{
    let rev= string.split("").reverse().join("");

    console.log("Reversed String: "+rev);

}