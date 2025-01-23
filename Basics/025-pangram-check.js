let string= prompt("Enter string: ")
if(!string.trim())
{
    console.log("Invalid Input")
} else{
    if(isPangram(string))
    {
        console.log("The string is Pangram")
    } else{
        console.log("The string is not Pangram")
    }

    function isPangram(str)
    {
        let alphabets="abcdefghijklmnopqrstuvwxyz"
        str=str.toLowerCase();

        for(let char of alphabets)
        {
            if(!str.includes(char))
            {
                return false;
            }
        }
        
        return true;

    }
}