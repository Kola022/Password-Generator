// The characters array
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

// Get a reference to the button element in the HTML
const myButton = document.getElementById("my-button");

// Get references to the password elements
const passEl1 = document.getElementById("password-el1");
const passEl2 = document.getElementById("password-el2");

// Function to generate a random password
function getPass() {
    let randomPassword = '';

    for (let i = 0; i < 10; i++) {
        let randomPassIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomPassIndex];
    }

    return randomPassword;
}

// Add a click event listener to the button
myButton.addEventListener("click", function() {
    // Generate random passwords and display them
    const password1 = getPass();
    const password2 = getPass();
    passEl1.textContent = password1;
    passEl2.textContent = password2;
});
