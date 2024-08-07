// Q1 You are creating a website for your college. Create a class user with 2 properties, name and email.
// It also has a method called viewData() that allows user to view website data.

let DATA = "This is the website data for the college.";
class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = " + DATA);
    }
}

let student1 = new User("Sarthak", "sarthak@gmail.com");
let student2 = new User("Rishabh", "rishabh@gmail.com");

let teacher1 = new User("Ancy thomas", "teacher@gmail.com");


console.log(student1); //student1;
console.log(student2); //student2;
console.log(teacher1); //teacher1;

student1.viewData();
// student2.viewData();
// teacher1.viewData();





// Q2 Create a new class called Admin which inherits from User. Add a new method called editData() to Admin
// that allows it to edit the website data.

// class Admin extends User {
//     constructor(name, email) {
//           super(name, email);  
//     }
//     editData() {
//         console.log("Data has been edited.");
//     }
// }

// let admin1 = new Admin("admin", "admin@gmail.com");
// admin1.editData();


//Q3 create a function to find palindrome from an array
// create an array of words and find the palindrome words from it.
// run the function on each element of the array and print the palindrome words.

let arr = ["madam", "racecar", "hello", "world", "level", "python"];

function findPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let reversedWord = word.split("").reverse().join("");
        if (word === reversedWord) {
            console.log( `"${word}"` +" is a palindrome");
        }
        else{
            
            console.log(`${word}` +" is not a palindrome");
        }
    }
}
findPalindrome(arr);
