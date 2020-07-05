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

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

