people = [
    {name: "Matthew", age: 9},
    {name: "Josh", age: 18},
    {name: "James", age: 40},
    {name: "Eric", age: 32},
    {name: "Bob", age: 102}
]

people.sort(sortPeopleByName);

console.log(people);

// Custom callback function for the .sort function
// Expects -1 if first arg should be before the second; 1 if after; 0 if equal.
function sortPeopleByName(a, b) {
    console.log("A: " + a.name);
    console.log("B: " + b.name);
    console.log("------");
    if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
    } else if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
    } else {
        return 0;
    }
}