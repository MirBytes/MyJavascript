const Myarray = [5, 5, 43, 23, [43, 23, 90], { name: "Mir", age: 21 }, "WWE", true, null, undefined]

console.log(Myarray);
console.log(Myarray.length);

const Yourarray = ["A", "d", [32, 44, 1], false]
const YourFlattedarray = Yourarray.flat;
console.log(Yourarray);

// Using Spread Operator
const OurArray = [...Myarray, ...Yourarray];

console.log(OurArray);
console.log(OurArray.length);

// Using slice(): Extract elements from index 4 to 8 (end index is exclusive)
const SlicedArray = OurArray.slice(4, 8);
console.log("Sliced Array:", SlicedArray);
console.log("A", OurArray);

// Using splice(): Remove 3 elements starting from index 2 and insert new elements
const SplicedArray = OurArray.splice(2, 3);
// Now also Try this
// const SplicedArray = OurArray.splice(2, 3, "Inserted1", "Inserted2");
console.log("After splice:", SplicedArray);
console.log("B", OurArray);