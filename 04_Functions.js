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
addfive(7)
const addfive = function (num) {
    return num + 5
}


// This And Arrow Functions