//       OBJEECTS


// const employee = {
//     calcTax() {                                       // This is a way to define a function in an object
//         console.log("Tax rate is 10%");
//     },
//     valcTax2 : function() {                           // This is also a way to define a function in an object
//         console.log("Tax rate is 10%");
//     }
// };

// const karanArjun = {
//     salary: 50000,
// };

// karanArjun.__proto__ = employee;


//        CLASS


// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("Creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("Car Started");
//     }
//     stop() {
//         console.log("Car Stopped");
//     }
//     // setBrand(brand) {
//     //     this.brand = brand;      // Here, "this" keyword is used to refer to the current object. 
//     }                            // It is used to access the current object's properties and methods.

// let fortuner = new ToyotaCar("Fortuner", 10);
// // fortuner.setBrand("Fortuner");  // Here, fortuner is the current object and setBrand is the method of the current object.
// console.log(fortuner);
// let lexus = new ToyotaCar("Lexus", 12);    
// // lexus.setBrand("Lexus");        // Here, lexus is the current object and setBrand is the method of the current object.
// console.log(lexus);



// INHERITANCE


// class parent {
//     hello() {
//         console.log("Hello from parent class");
//     }
// }

// class child extends parent {
// }

// let obj = new child();
// obj.hello();


// class Person {
//     constructor()  {
//         this.species = "Homo - Sapiens";
//     }
//     eat() {
//         console.log("Eat");
//     }

//     sleep() {
//         console.log("Sleep");
//     }

//     work() {
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person{
//     work() {
//         console.log("solve problem, build something");
//     }
// }
// let sarthak = new Engineer();
// sarthak.eat();
// sarthak.sleep();
// sarthak.work();

// class Doctor extends Person{
//     work() {
//         console.log("Treat patients");
//     }
// }

// let kanika = new Doctor();
// kanika.eat();
// kanika.sleep();
// kanika.work();


// SUPER KEYWORD

class Person {
    constructor(name) {
        this.name = name;
        this.species = "Homo-Sapiens";
    }

    jaat() {
        return 'Hi, my name is ' + this.name;
    }

    eat() {
        return 'eat';
    }

    sleep() {
        return 'sleep';
    }
}

class Engineer extends Person {
    constructor(name) {
        super(name);
    }
    work() {
        return'solve problems, build something.';
    }
    show() {
        // return super.jaat() + 'I am an Engineer, my work is ' + this.work() + 'I ' + super.eat() + ' & ' + super.sleep();
         console.log(`${super.jaat()} I am an Engineer, my work is ${this.work()} I ${super.eat()} & ${super.sleep()}`);
    }
}

let obj = new Engineer("Sarthak");
// console.log(`${obj.show()}`);
obj.show();