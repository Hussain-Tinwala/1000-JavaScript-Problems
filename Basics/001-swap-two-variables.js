let a=prompt("Enter a: ");
let b=prompt("Enter b: ");


if(isNaN(a) || isNaN(b))
{
    console.log("Invalid input");
} else{
    a=Number.parseInt(a);
    b=Number.parseInt(b);
    console.log("Before Swap: "+" a: ",a+" b: "+b);
    
    let temp=a;
    a=b;
    b=temp;
    
    console.log("After Swap: "+" a: ",a+" b: "+b);    
}