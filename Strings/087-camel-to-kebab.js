function camelToKebab(str)
{
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

}

let str=prompt("Enter str:")
if(!str.trim()){
    console.log("Empty Input")
} else{
    console.log(camelToKebab(str))
}