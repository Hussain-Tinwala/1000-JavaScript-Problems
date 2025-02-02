function isAutomorphicNumber(num)
{
    const square=num*num;
    return square.toString().endsWith(num.toString());
}

let num=prompt("Enter num: ")
num=Number.parseInt(num)
if(isAutomorphicNumber(num))
{
    alert(`${num} is Automorphic Number`)
}
else{
    alert(`${num} is not an Automorphic Number`)

}