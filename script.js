// Declare Variables with let and const:
// Use let to declare a variable named age and assign it the value 25.
// Use const to declare a variable named birthYear and assign it the value 1999.
// Use let to declare a variable named name and assign it the value "John Doe".
// Use const to declare a variable named isStudent and assign it the value true.

// let age = 25;
// const birthYear = 1999;
// let name = "john Doe";
// const isStudent = true;

// Reassign Values:

// Reassign the value of age to 26.
// Reassign the value of name to "Jane Doe".
// Try to reassign the value of birthYear to 2000 and observe what happens.
// Try to reassign the value of isStudent to false and observe what happens.

// age = 26;
// name = "Jane Doe";
// birthYear = 2000;
// isStudent = false;

// Print Variables:

// Use console.log to print the values of age, birthYear, name, and isStudent.

// console.log(age, name, birthYear, isStudent);

// Create and Modify a New Variable:

// Use let to declare a variable named favoriteColor and assign it the value "blue".
// Print the value of favoriteColor.
// Reassign the value of favoriteColor to "green".
// Print the new value of favoriteColor.

// let favoriteColor = "blue";
// console.log(favoriteColor);

// favoriteColor = "green";
// console.log(favoriteColor);

// Task2 objectives

// Addition with Mixed Types

// Create a variable that stores a number.
// Create a variable that stores a string representation of a number.
// Add these two variables and print the result.
// Explain the output.

// let number = 2;
// let numberSTring = "2";

// console.log(number, numberSTring);

// Subtraction with Mixed Types

// Using the same string and number variables, subtract the string from the number and print the result.
// Explain why the output differs from the addition.

// let number = 2;
// let numberSTring = "2";

// let b2 = console.log(numberSTring - number);
// console.log(typeof b2);

// Multiplication with a String

// Multiply the string variable by a new number and print the result.
// let number = 2;
// let numberSTring = "2";

// let b2 = console.log(numberSTring * number);
// console.log(typeof b2);
// Division by a String

// Divide a number by the string variable and print the result.
// let number = 2;
// let numberSTring = "2";

// let b2 = console.log(numberSTring / number);
// console.log(typeof b2);

// Modulus Operation

// Use modulus on two number variables and print the result.
// Change one of the numbers to a string and perform the modulus operation again. Print the result.
// let number = 25;
// let numberSTring = "6";

// let b2 = console.log(numberSTring % number);
// console.log(typeof b2);

// Perform a Series of Numeric Operations

// Define several new numeric variables.
// Perform and print the result of each operation: addition, subtraction, multiplication, division, and modulus.
// For each operation, include at least one example that uses more than two numbers.

// let number = 25;
// let numberSTring = "6";

// let b2 = console.log(numberSTring % number);
// console.log(typeof b2);

// task 3

// console.log('5 == "5": ', 5 == "5"); // Simple Equality, should be true
// console.log('5 === "5": ', 5 === "5"); // Strict Equality, should be false

// console.log('5 >== "5": ', 4 >= "5"); // Strict Equality, should be false

// task 4

// if elese

// Define a variable temperature and set it to any integer to represent the temperature in degrees Celsius.
// Use if/else to advise wearing a coat if the temperature is below 15 degrees.
// Use if/else if/else to give advice based on three temperature ranges:
// Below 15 degrees: suggest a coat.
// Between 15 and 25 degrees: suggest a sweater.
// Above 25 degrees: suggest a t-shirt.
// Use a switch statement to provide advice based on specific temperatures (just a few for example): 10, 20, and 30 degrees.
// Print the results for each task to the console.

// let temperature = 26;

// if (temperature < 15) {
//   console.log("get coat");
// } else if (temperature > 14 < 25) {
//   console.log("swater");
// } else {
//   console.log("shirt");
// }

// task 5 loop
// Use a for loop to count the total number of animals.
// Use a while loop to count animals whose names have five or more letters. You can check the length of a string
// Use a do...while loop to count animals until you encounter an animal whose name starts with 'm'

// const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "monkey"];

// for (let i = 0; i < 5; i++) {
//   text += "The number of animal is " + i + "<br>";
// }

// console.log(animals.length); // Gibt 6 aus

// // schleife
// let count = 0;
// for (let i = 0; i < animals.length; i++) {
//   count++;
// }

// console.log(count);

// schleife 2

// let count = 0;
// animals.forEach(() => count++);
// console.log(count);
