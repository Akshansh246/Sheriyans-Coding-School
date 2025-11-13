let attempts = 0
let password = "akshubhai";
let khulgya = false;

let pass = prompt("password btao !!")
attempts++;
if (pass === password) khulgya = true

while (password !== pass) {
    if (attempts === 3) {
        console.error("Account Blocked");
        break;
    }
    if(pass === password) khulgya = true
    pass = prompt("password btao !!")
    attempts++;
}

if (khulgya === true) {
    console.log("Account unlocked")
}