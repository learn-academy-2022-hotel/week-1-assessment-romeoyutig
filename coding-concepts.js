// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: ["tangerine", "magenta", "lilac", "daffodil" , "indigo"]
// b) Verify and explain: adds an aditional string named indigo into the array

// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: correct ; console log is verifying the number of characters of the string, starting at 1. 

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: output: o ;  console log is indexing the variable greeting and finding the 4th character left to right counting from zero.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: JavaScript
// b) Verify and explain: output :  ; console log is indexing the variable index which has a value of 1 indexing the first string of the array. I believed that the index would return the first string of the array.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())
// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: error, toUpperCase() is not a function. I believe toUpperCase() needs to be in a function, or possibly declared as a variable.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)
// console.log(dataTypes.length)
// a) Your answer: 4
// b) Verify and explain: incorrect, typeof outputs the data type. not sure if it overrides length accessor.
