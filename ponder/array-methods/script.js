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
let filteredArray = names.filter(name => {
    // filter returns booleans. If true, keep this item, if false, drop
    return (name[0] === "J");
})
console.log(filteredArray);


// TODO: .reduce(), .indexOf, template literals

// .reduce repeatedly calls the given function, passing in each array item one at a time to affect a cumulative result
//      The first parameter of the callback function will always be implied to be the cumulative value and starts at 0
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumValues = values.reduce(sumArray);
// The reduce function will call this function, passing its own return value in for the first parameter with the next array item until all have been used
function sumArray(runningTotal, newValue) {
    return runningTotal + newValue;
}
console.log(sumValues);


// .indexOf() returns the index value (i.e. position) of a given item in the array.
const seniority = names.indexOf("James");


// Template literals are strings using backticks (`) which can use ${variableName} to insert vdynamic values into the string content.
const myString = `My favorite Bible character, besides Jesus, is ${names[0]}. He's ${sumValues} years old.`;
console.log(myString);

