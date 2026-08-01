// A function when passed to another function as a argument is Callback function
// A callback is never called it executions depednds on parent function
// callback function is possible because a function can be stored in variable

// let sum = function (a, b) {
//   return a + b;
// }
// function sub(a, b) {
//   return a - b;
// }
// function mult(a, b) {
//   return a * b;
// }
// function div(a, b) {
//   return a / b;
// }

// function calc(a, b, cb) {
//   return cb(a, b);
// }

// console.log(calc(1, 3, mult));

// Higher Order Functions --  A function which takes one or more function
// as argument/parameter and also can return a function

// forEach , map , filter , reduce

// let arr = [100, 200, 300, 400];

// const print = function (ele, index, arr) {
//   console.log(ele, index, arr);
// };

// arr.forEach(print);

// arr.forEach(function (ele, index, arr) {
//   console.log(ele, index, arr);
// })

// arr.forEach(function (ele, index, arr) {
//   arr[index] = ele + 1;
// });

// console.log(arr);

// arr.forEach(function (ele, index, arr) {
//   arr[index] = ele + 1;
// });
// console.log(arr);

// Pure Functions -- the function  that gives same output for same input is pure functions
// pure functions have no side effects means they do not interfare with outer scope

// MAP --

let arr = [1, 2, 3, 4];

// let ans = arr.map(function (ele, index, arr) {
//   return ele * 2;
// });

// console.log(ans);

// filter --

// let ans = arr.filter(function (ele, index, arr) {
//   return ele % 2 == 0;
// });

// console.log(ans);

// reduce --

// let ans = arr.reduce(function (acc, currEle) {
//   return acc + currEle;
// }, 10 );

// console.log(ans);

// Question 1  -- make a array of products which are in stock and have price greater than 50

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 25, inStock: true },
  { name: "Keyboard", price: 75, inStock: false },
  { name: "Monitor", price: 300, inStock: true },
];

// const ans = products.filter(function (obj) {
//   // return  obj.inStock && obj.price > 50
//   const { price, inStock } = obj;
//   return inStock && price > 50;
// });

// console.log(ans);

// Question 2  A database migration left user accounts with messy usernames.
// Convert an array of raw strings into standardized lowercase names prefixed with an @ symbol.

const rawNames = ["  Alice ", "bOB", "  ChArLiE  "];

// Expected Output: [ '@alice', '@bob', '@charlie' ]

// const ans = rawNames.map(function (name) {
//   return "@" + name.trim().toLowerCase();
// });

// console.log(ans);

// Question 3 --  Calculate the final checkout price of a user's shopping cart, accounting for the quantity of each item

const cart = [
  { item: "Book", price: 15, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 },
  { item: "Bag", price: 40, quantity: 1 },
];

// const ans = cart.reduce(function(acc, obj){
//     return acc + obj.price * obj.quantity;
// },0);

// console.log(ans);

// question 4 -- Given a list of user profiles, extract a unique list of all hobbies listed across all users.

// Expected Output: [ 'coding', 'cooking', 'gaming', 'reading' ]

// const users = [
//   { name: "Alex", hobbies: ["coding", "cooking"] },
//   { name: "Sam", hobbies: ["cooking", "gaming"] },
//   { name: "Jamie", hobbies: ["reading", "coding"] },
// ];

// const HashSet = new Set();

// const ans = users.reduce(function(acc,obj){
//     acc.add(currObj.hobbies[0]);
//     acc.add(currObj.hobbies[1]);
//     return acc;
// },HashSet);

// const HashSet = new Set();

const books = [
    {title: "Dune", genre:"SCI-Fi"},
    {title: "The Hobbit", genre:"Fantasy"},
    {title: "Neuromancer", genre:"SCI-Fi"},
];

// const ans = books.reduce(function(acc, obj){
//     let{genre, title} = obj;
//     if(acc[genre]){
//         acc[genre].push(title);
//     }
//     else{
//         acc[genre] = [title];
//     }
//     return acc;
// },{});

//question 6

// const employees = [
//     {name: "Alice", dept: "Engineering", salary: 95000},
//     {name: "Bob", dept: "HR", salary: 50000},
//     {name: "Charlie", dept: "Engineering", salary: 85000},
//     {name: "Alex", dept: "Engineering", salary: 120000},
// ];

// const ans = employees.filter(function(obj){
//     return obj.dept == "Engineering" && obj.salary > 90000;
// }).map(function(obj){
//     return obj.name;
// })

//Question 7 .
// const products = [
//     {id:1, name:"laptop", rating:4.2},
//     {id:2, name:"keyboard", rating:4.0},
//     {id:3, name:"mobile", rating:4.5},
// ]

// const ans = products.reduce(function(acc, obj){
//     return acc.rating > obj.rating ? acc : obj;
// });


// question 8
// const usersList = [
//   { id: "u1", name: "Emma", role: "Admin" },
//   { id: "u2", name: "Liam", role: "User" },
// ];


// const ans = usersList.reduce(function(acc, obj){
//   acc[obj.id] = obj;
//   return acc;
// }, {});
// Expected Output
// {
//   "u1": { id: "u1", name: "Emma", role: "Admin" },
//   "u2": { id: "u2", name: "Liam", role: "User" }
// }

// Question 9 -- find the average score of students who passed (scored 50 or above).

const students = [
  { name: "Tom", score: 45 },
  { name: "Sara", score: 80 },
  { name: "Ben", score: 90 },
  { name: "Lucy", score: 30 },
];

const filteredArray= students.filter(function(obj){
  return obj.score > 50;
});

const avg = filteredArray.reduce(function(acc,obj){
  return acc + obj.score;
},0) / filteredArray.length;

console.log(avg);

// Expected Output: 85

// Question 10 Given a string of text, split it into words, and use reduce to count how many times each word appears.
// Convert all words to lowercase so the count is case-insensitive.

//Input: "The cat chased the mouse and the mouse ran away"

// Expected Output -- { the: 3, cat: 1, chased: 1, mouse: 2, and: 1, ran: 1, away: 1 }
// console.log(ans);