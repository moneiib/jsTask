let username = prompt("Enter your username:");
let password;
let attempts = 5;

while (attempts > 0) 
{
    password = prompt("Enter your password:");

    if (password === "123") 
    {
        alert(`Welcome, ${username}`);
        break; 
    } 
    else 
    {
        attempts--;
        if (attempts > 0) 
        {
            alert(`Incorrect password. You have ${attempts} attempts left.`);
        } 
        else 
        {
            alert("Please try again later.");
        }
    }
}
