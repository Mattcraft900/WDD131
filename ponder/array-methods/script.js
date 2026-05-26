// 1. JS arrays
let names = ["Peter", "James", "John"];
console.log(names);
console.log(names[1]);
// Returns 'undefined' (which is not enough to stop JS in its tracks)
console.log(names[4]);
// These both also work in JS
let ages = [28, 26, 22];
let mixedTypes = ["Peter", "James", 24, "John", 20, 30];


// 2. JS objects
// Literal objects
let student = {
    // key/value pairs
    name: "Bob",
    age: 16,
    grade: "A"
};
console.log(student);
console.log(student.name);


// 3. Array methods
// For each
names.forEach((whateverIWantToCallItemsInThisArray) => {
    // This code executes once for each item in the array
    console.log("hey");
    console.log(whateverIWantToCallItemsInThisArray);
});

// .map() returns a new array with values returned from an iterated callback function
let newNames = names.map((name) => {
    return name + " the Apostle";
});
console.log(newNames);

// .filter()
let filteredArray = name.filter(name => {
    // filter returns booleans. If true, keep this item, if false, drop
    return (name[0] === "J");
})
console.log(filteredArray);


// TODO: .reduce(), .indexOf, template literals
