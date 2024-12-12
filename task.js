let username = prompt("Enter your username:");
let password;
let attempts = 5;

let resultElement = document.getElementById("result");

while (attempts > 0) 
{
    password = prompt("Enter your password:");

    if (password === "123") {
        resultElement.innerText = `Welcome, ${username}!`;
        break; 
    } else {
        attempts--;
        if (attempts > 0) {
            resultElement.innerText = `Incorrect password. You have ${attempts} attempts left.`;
        } else {
            resultElement.innerText = "Please try again later.";
        }
    }
}