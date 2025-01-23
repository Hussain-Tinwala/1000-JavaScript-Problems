let num=prompt("Enter num: ");

if(isNaN(num) || num<=0)
{
    console.log("Invalid input");
} else{
    num=Number.parseInt(num);

    for(let i=1; i<=num; i++)
    {
        isPrime(i);
    }


    function isPrime(num)
    {
        let isPrime=true;

        if (num == 1) {
            isPrime = false;
        }
    
        for(let i=2; i<=Math.sqrt(num); i++)
        {
            if(num%i==0)
            {
                isPrime=false;
                break;
            }
        }
        
        if(isPrime)
        {
            console.log(num+" is Prime");        
        } else{
            console.log(num+" is not Prime"); 
        }
    }
} 