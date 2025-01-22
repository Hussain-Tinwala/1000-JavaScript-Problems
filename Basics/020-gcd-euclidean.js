let num1= prompt("Enter first number: ")
let num2= prompt("Enter second number: ")

if(isNaN(num1) || isNaN(num2))
{
    console.log("Invalid Input")
    
} else{
    num1=Number.parseInt(num1)
    num2=Number.parseInt(num2)

    if(num1<=0 ||num2<=0)
    {
        console.log("Enter Positive numbers!")
    } else{
        while(num2!=0)
        {
            let temp=num2;
            num2=num1%num2;
            num1=temp;
        }

        console.log("GCD: "+num1)
    }
}