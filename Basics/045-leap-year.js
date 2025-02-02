let year=prompt("Enter year: ");
year=Number.parseInt(year);
function isLeapYear(year)
{
    return (year%4==0 && year%100!=0) || year%400==0;
}

if(isLeapYear(year))
{
    console.log("It's a leap year");
} else{
    console.log("It's not a leap year");
    
}