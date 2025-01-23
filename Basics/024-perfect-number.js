let num = prompt("Enter num: ")
if (!num.trim() || isNaN(num) || num < 0) {
    console.log("Invalid Input")
} else {
    num = Number.parseInt(num)
    if(isPerfectNumber(num))
    {
        console.log("It's a Perfect Number")

    } else{
        console.log("Not a Perfect Number")
    }

    function isPerfectNumber(num) {
        let sum=0
        let org=num
        for(let i=1; i<=num/2; i++)
        {
            if(num%i===0)
            {
                sum+=i;
            }
        }
        return sum===num;
    }
}