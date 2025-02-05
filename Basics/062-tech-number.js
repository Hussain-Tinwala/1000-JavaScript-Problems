function isTechNumber(num)
{
    const numStr=num.toString();
    if(numStr.length%2!==0) return false;

    const half=numStr.length/2;
    const part1=Number(numStr.slice(0,half))
    const part2=Number(numStr.slice(half))

    return Math.pow(part1+part2, 2)===num;
}

const num=Number(prompt("Enter num:"))
if(isTechNumber(num))
{
    console.log("It's a Tech Number")
} else{
    console.log("It's not a Tech Number")
}