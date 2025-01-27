console.log("Random Hex color: "+generateRandomHexColor())

function generateRandomHexColor(){
    const randomNum= Math.floor(Math.random()*16777216)
    const color= "#" + randomNum.toString(16).padStart(6,"0")
    return color;
}
