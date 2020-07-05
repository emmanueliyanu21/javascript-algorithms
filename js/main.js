// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);

// The new Set will implicitly remove duplicate elements.
// Then, convert the set back to an array

// The indexOf() method returns the index of the first occurrence of an element in an array.

// let chars = ['A', 'B', 'A', 'C', 'B'];
// chars.indexOf('B');

// console.log(chars.indexOf('C'));

// let chars = ['A', 'B', 'A', 'C', 'B'];

// chars.forEach((c, index) => {
//     console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
// });

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);

//Remove duplicates from an array using forEach() and include()

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = [];
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars);

// Merge objects using the spread operator (...)

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...person,
    ...job
};

console.log(employee);

