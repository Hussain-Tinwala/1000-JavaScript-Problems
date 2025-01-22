let num= prompt("Enter range num to generate random number: ");
num=Number.parseInt(num)

if(isNaN(num) || num<0)
{
    console.log("Invalid Number")
} else{
    let randomNum= Math.floor(Math.random()*num)+1;
    console.log("Random number between 1 and "+num+": "+randomNum);

}
