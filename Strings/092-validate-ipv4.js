function isValidIPv4(ip) {
    const regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1?[0-9]?[0-9])){3}$/;
    return regex.test(ip);
}

const ip = prompt("Enter an IPv4 address: ");
console.log(`${ip} is ${isValidIPv4(ip) ? "a valid" : "an invalid"} IPv4 address`);
