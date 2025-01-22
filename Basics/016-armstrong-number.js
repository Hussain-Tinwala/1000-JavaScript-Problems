let num = prompt("Enter num: ")

if (isNaN(num) || num<=0) {
    console.log("Invalid Input")
} else {
    num = Number.parseInt(num)
    let org=num;
    let temp=num;
    let digits=0;
    while(temp!=0)
    {
        temp=Math.floor(temp/10);
        digits++;
    }
    
    let sum=0
    while(num!=0)
    {
        let rem=num%10;
        sum+=Math.pow(rem,digits);
        num=Math.floor(num/10);
    }
    if(org===sum)
    {
        console.log("Armstrong Number!")
    } else{
        console.log("Not Armstrong Number!")
        
    }

}