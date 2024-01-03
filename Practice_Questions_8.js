//Q1) Create a function using the "function" keyword that takes a String as an argument and returns the 
//number of vowels in the string.

// Q1.b) Create an arrow function that does the same thing as above.

function myFunction(str)
{
let j = 0;  
for(let i = 0; i < str.length; i++)
{
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u')
    {
       j++;
    }
    else if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O'|| str[i] == 'U')
    {
        j++;
    }
}
    return j;
}
let abc = prompt("Enter a string: ").split("");

alert("Number of vowels in the string: " + myFunction(abc));

// let myFunction = (str) =>
// {
//     let j = 0;  
//     for(let i = 0; i < str.length; i++)
//     {
//         if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u')
//         {
//            j++;
//         }
//         else if (str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O'|| str[i] == 'U')
//         {
//             j++;
//         }
//     }
//        return j;
// };
// let abc = prompt("Enter a string: ").split("");
// alert("The number of vowels in the given string is : " + myFunction(abc));