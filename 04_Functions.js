function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " is a big dog");
    } else {
        console.log(name + " is a puppy dog");
    }
}

let dogname = "larry"
let weight = 12

bark(dogname, weight)


// Lets see through Scope
// Scope is the region of the program where a variable is defined. It determines the accessibility of variables
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// a will not print and b will not print but as c is variable var type. So, its printed. That's why var is prohibited in javascripted
console.log(c);

function one() {
    const username = "Bajwa"

    function two() {
        const website = "Apka Bajwa"
        console.log(username);

    }

    // console.log(website);
    // You cant access website here as its scope is in website

    two()
}

one()


// interesting example

function addone(value) {
    return value + 1
}

addone(6)

// This type of function is also known as EXPRESSIONS
const addtwo = function (num) {
    return num + 2
}

addtwo(7)

// Here you can do this
addthree(6)
function addthree(value) {
    return value + 3
}

// But in Expression, You can't
// addfive(7)
// const addfive = function (num) {
//     return num + 5
// }


// This And Arrow Functions
const user = {
    name: "Bajwa",
    price: 999,

    // So, this refers to current context of the object
    welcomeMessage: function () {
        console.log(`${this.name}, Welcome to Website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.name = "Ibrahim"
// user.welcomeMessage()

console.log(this)
// In node enviroment current context is empty but in browser when you console log this. You'll not get empty objects.
// You'll get window object
// console.log(this);

function chai() {
    let username = 'Mir'
    console.log(this);
    console.log(this.username);
}

// const chai = function () {
//     let username = 'Mir'
//     console.log(this);
//     console.log(this.username);
// }

chai()
// In browser you'll get window object
// In Node.js you'll get empty object
// When called inside funtion you'll get too much content. This only works with objects for now how much we have learnt asw username will be undefined as its given some value above.

const chaiArrow = () => {
    let username = "MIR"
    console.log(this);
    console.log(this.username);
}

chaiArrow()

const addten = (num1, num2) => {
    return num1 + num2 + 10
}

console.log(addten(5, 6));

// implicit return 
const addtwenty = (num1, num2) => num1 + num2 + 20

// one more method
const addthirty = (num1, num2) => (num1 + num2 + 30)

// So, When using Brackets don't use return but when Curly Braces then you will have to use return to return some value
// If you don't use return then it will return undefined. So, use return when you are
// using Curly Braces and don't use return when you are using Brackets.

// So, let's say we have to return an object now but using implicit return without braces
// const objectnameprinter = () => { name: "macha" }
// This will not work. As we'll have to add braces to print this object. So, we use this good practice and use braces.
const objectnameprinter = () => ({ name: "macha" })
console.log(objectnameprinter());

// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that is called immediately after it is defined. It is a function that
// is defined and called in the same statement. It is used to create a scope for the
// variables and functions that are defined inside it. It is also used to prevent the
// global namespace from being polluted with variables and functions that are only
// needed inside the IIFE.

// Simple Funtion
// function database() {
//     console.log(`DB Connected`);
// }

// database()

(function database() {
    console.log(`DB Connected`);
})();
// Their should be semi-final after iife funtions

(() => {
    console.log(`DB connected Again`);

})();

((name) => {
    console.log(`DB connected Again ${name}`);

})("Mir")