// Create a file called cheer.js that performs a cheer, using a named 
//passed to it. Use as many of these as you can, even if the code you 
//write isn't as compact or 'efficient' as you would like. This is more 
//about trying out some ES6 than being succinct.

// const and/or let - Y
// Object literal shorthand - Y
// Destructuring assignments - Y
// Fat arrow function(s) - Y
// Spread operator 
// Template literals
// Execute the file by typing node cheer.js inside the file's directory.

// Expected:

// $ node cheer.js
// Give me a J!
// Give me an O!
// Give me an H!
// Give me an N!
// Give me a D!
// Give me an O!
// Give me an E!
// What does that spell?
// JOHN DOE!
let firstName = "John";
let lastName = "Doe";
const name = {firstName, lastName};

let cheer = (name) => {
    let firstNameArr = name.firstName.toUpperCase().split("");
    let lastNameArr = name.lastName.toUpperCase().split("");
    let fullName = [...firstNameArr, ...lastNameArr];
    for (value of fullName) {
        if(value.match(/a|e|i|o|u/gi) >= 0) {
            console.log(`Give me a ${value}!`);
        } else {
            console.log(`Give me an ${value}!`);
        }
    }
    console.log(`What does that spell?\n${firstName.toUpperCase()} ${lastName.toUpperCase()}!`);
};

cheer(name);