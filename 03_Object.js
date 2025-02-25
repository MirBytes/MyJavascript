const address = {
    jilani: "Motra",
    rana: "Kang",
    butt: "Daska",
    choi: "machi Khokhar"
}

console.log(address);

const person = {
    name: "Mir",
    age: 20,
    isStudent: true,
    hobbies: ["coding", "gaming", "reading"]
}

console.log(person);
console.log(person.isStudent);
console.log(person["age"]);

let key = "hobbies"
console.log(person[key]);

person.country = "Pakistan"

console.log(person);

person.age = 21;
console.log(person);

console.log("name" in person); // Output: true
console.log("salary" in person); // Output: false

console.log(person.hasOwnProperty("age"));  // Output: true
console.log(person.hasOwnProperty("salary")); // Output: false

const ANotherPerson = person

ANotherPerson.name = "Taimoor"

console.log(person);

// The reason why the person name was updated was because of the reason that the data for non-premiticve datatypes is being stored in the heap memory. So, we get the reference to the anotherperson from the same the memory of the person. so, that is why the updation caused the change in the person data also.

delete person.isStudent;
console.log(person);

person.isStudent = true

const user = {
    name: "Ali",
    address: {
        city: "Sialkot",
        country: "Pakistan"
    }
}

console.log(user);

const obj = { "full name": "Mir Mutabassim Ali" };
console.log(obj["full name"]);  // Works
// console.log(obj.full name);  // ERROR (because of space)

// Objects Merging
const obj1 = { name: "Mir" };
const obj2 = { age: 25 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { name: "Mir", age: 25 }

// Obejct Sealing
const userSettings = { volume: 50 };
Object.seal(userSettings);

userSettings.volume = 70; // Allowed
userSettings.brightness = 100; // Not Allowed
delete userSettings.volume; // Not Allowed
console.log(userSettings); // Output: { volume: 70 }

// Objects Frezzing
const settings = { theme: "dark" };
Object.freeze(settings);

settings.theme = "light"; // Won't change
console.log(settings.theme); // Output: dark

// Sealing vs Freezing: in sealing can modify current properties but not add new, but in freezing can't update current properties.

// Functions in Objects
const car = {
    brand: "Toyota",
    start: function () {
        console.log("Car is starting...");
    }
};

// Accessing the method
car.start(); // Output: Car is starting...

// Using varaibles as keys. Dynamic Keys
let Mykey = "email";
const Myuser = {
    [Mykey]: "mir@example.com"
};

console.log(Myuser.email); // Output: mir@example.com


// Converting Objects into Array
const carInfo = { brand: "Toyota", model: "Corolla", year: 2023 };
console.log(Object.keys(carInfo));
// Output: ["brand", "model", "year"]
console.log(Object.values(carInfo));
// Output: ["Toyota", "Corolla", 2023]
console.log(Object.entries(carInfo));
// Output: [["brand", "Toyota"], ["model", "Corolla"], ["year", 2023]]

const carsKEYarray = Object.keys(carInfo)
console.log(carsKEYarray);
const carsVALUESarray = Object.values(carInfo)
console.log(carsVALUESarray);
const carsENTERIESarray = Object.entries(carInfo)
console.log(carsENTERIESarray);
const flattenedCARSENTRIES = carsENTERIESarray.flat()
console.log(flattenedCARSENTRIES);

// Destruction of Objects
const laptop = { brand: "HP", model: "EliteBook", ram: "32GB" };

// Object destructuring is a feature in JavaScript that allows you to extract values from an object and store them in separate variables in a clean and readable way.
const { brand, model } = laptop;

console.log(brand); // Output: HP
console.log(model); // Output: EliteBook
// console.log(ram); // Output: Error because not deobjecrtified

const alaptop = { abrand: "Dell", amodel: "XPS" };

const { abrand, amodel, ram = "8GB" } = alaptop;

console.log(abrand); // Output: Dell
console.log(amodel); // Output: XPS
console.log(ram);   // Output: 8GB (default value used)

const employee = {
    myname: "Mir",
    job: {
        title: "Software Engineer",
        company: "Freightofy"
    }
};

const { myname, job: { title, company } } = employee;

console.log(myname);     // Output: Mir
console.log(title);    // Output: Software Engineer
console.log(company);  // Output: Freightofy

const mycar = { mybrand: "Toyota", mymodel: "Corolla", year: 2023, color: "White" };

const { mybrand, mymodel, ...otherDetails } = mycar;

console.log(mybrand); // Output: Toyota
console.log(mymodel); // Output: Corolla
console.log(otherDetails); // Output: { year: 2023, color: "White" }
