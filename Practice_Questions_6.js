//Q1) Prompt the usser  to enter their full name. Generate a username for them based on the input. Start
// username with @, followed by their full name and ending with the full namme length.
// e.g user name = "Sarthak kaushik", username should be "@Sarthak kaushik15"

///METHOD 1

    // let userName = prompt("Enter your full name");
    // let length = userName.length;  // length of the string
    // let output = "@" + userName + length.toString(); // concatenate the string
    // alert(output);

//METHOD 2

let userName = prompt("Enter your full name");
let length = userName.length;  // length of the string
let output = alert(`@${userName}${length}`); // concatenate the string