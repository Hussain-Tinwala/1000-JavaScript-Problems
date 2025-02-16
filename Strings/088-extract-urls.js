function extractUrls(str)
{
    const urlRegex=/https?:\/\/[^\s]+/g;
    return str.match(urlRegex) || [];

}

let str=prompt("Enter str:")
if(!str.trim()){
    console.log("Empty Input")
} else{
    console.log(extractUrls(str))
}