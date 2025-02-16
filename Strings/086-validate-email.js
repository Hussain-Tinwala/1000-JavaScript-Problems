let email=prompt("Enter email: ")
if(!email.trim())
{
    console.log("Empty Input")
} else{
    let emailPattern=/^[a-zA-Z0-9.+-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailPattern.test(email))
    {
        console.log("Valid Email address")
    } else{
        console.log("Invalid Email address")

    }
}