// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// input : number
// output : string

// input : 42 
// output : "42 is below boiling point"

// input : 350
// output : "350 is above boiling point"

// input : 212
// output : "212 is at boiling point"

// process : create a function that takes in a number called temp1, temp2, and temp3.
// if number is lower than 212 return temp1 is below boiling point
// if number is higher than 212 return the number is above boiling point
// if number is at 212 return the number is at boiling point
// string interpolation for the return statement


const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

const boiling = (value) => {

    if (value ===212){
        return `${value} is at boiling point`}
    else if (value< 212) {
        return `${value} is below boiling point`
    }
    else if (value > 212){
        return `${value} is above boiling point`
    }
    
   
}   
    
console.log(boiling(temp1))
// output : 42 is below boiling point

console.log(boiling(temp2))
// output : 350 is below boiling point

console.log(boiling(temp3))
// output : 212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
// process: combine two arrays using concat into a variable and return the length using .length in a console log.


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const padresRuns = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padresRuns.length)
// output: 9

// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: turn the string into an array and reverse using the built in mutator .reverse() and ,split("") in a single console log


const currentCohort = "Hotel 2022"
console.log(currentCohort.split("").reverse())

// Output: 2202 letoH
// Expected output: "2202 letoH"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// process : use the .lastIndexOf property in a console log to return the last index of givenValue1 within the array provided.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42

console.log(myNumbers.lastIndexOf(givenValue1))
// Expected output: 7

const givenValue2 = 10
console.log(myNumbers.lastIndexOf(givenValue2))
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code: process : use the mutators .reverse and .sort to sort the variables in the array from largest to smallest

// attempted to use it in the 
const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]

console.log(sanDiegoSummerTemperatures.sort().reverse())
// output: [82, 80, 79, 77, 76, 73, 72]

// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
console.log(sanDiegoWinterTemperatures.sort().reverse())

// Expected output: [68, 67, 66, 66, 62, 59, 59]
