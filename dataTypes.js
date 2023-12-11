let age = 24;
console.log(age); 
const student  = {
    fullName : "Sarthak Kaushik",
    age : 24,
    course : "B.Tech",
    cgpa : 8.5,
    college : "AIT Bangalore",
    isPass : true,
};
console.log(student);   
console.log(student.college);
student.age = student.age + 1;
console.log(student["age"]);