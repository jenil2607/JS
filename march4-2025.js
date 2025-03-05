// single line comment

/*
Multi line comment
la 
la
la
*/

console.log("Hello World"); // equivalent of python print.

// Variable declaration

let fname = "Ayan";
var age = 2;

const age_limit = 18; // Values declared using this keyword cannot be changed during runtime.
// const - stands for constant

console.log("Welcome to Earth",fname); 

age++; // equivalent to age = age + 1; this is possible for var and let.
console.log(age);

// with var, we can also redeclare a variable, not possible with let.

var age = 10;
console.log(age);
// let fname = 'rashmi'; This will throw error.
// reassignment is okay.
fname = 'shivani';
console.log(fname);

console.log('a value:',a); // At this stage, a is declared, but value is not defined yet
a = 19; // defining value of a
console.log('a value',a); // Now, here, value of 'a' is defined.
console.log(a);

let b;
b = 10;
var c;
c = 10;

var a; // This declaration will be `hoisted` or pulled to the top while running
// so that it is run before initialization/assignment of the same.

// Scope in JS is declared using  curly braces : { }

{
    let v1 = 10; // variables declared with let and const will be available only in block scope
    const c1 = 15; 
    var v2 = 20; // variables declared with var will be available in global scope.

}
console.log(v2);
// console.log(v1); throws error as v1 is not available in this scope.
// console.log(c1); this also throws same error.

//----------------------------------------------------------------------------------------//
// Data Types
// Primitive
// 1. Number
let i = 0;

console.log(typeof i); // equivalent to print(type(i)) in python.

// 2. String
i = 'a';
console.log(typeof i);

// 3. Boolean
i = true;
console.log(typeof i);

// 4. Undefined
let j;
console.log(typeof j);

// 5. Null
let  k = null;
console.log(typeof k); // even though null datatype exists, it exists as an object

// 6. Symbol

let uniqueID = Symbol("abcabc");
console.log(typeof uniqueID)

// Non-primitive

// Objects

// There are built in and user-defined objects in JS.
// Built in objects => objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, etc

// User defined objects can be created with or without class.
// In JS, objects can be created without a predefined class to construct it from.
// The structure of declaration resembles the python dictionary datatype.
let user = { 
    name: "Alice", 
    age: 25 
};
console.log(typeof user); 
console.log('name : ',user.name);

// Operators in JS

// Arithmetic
let a1 = 10, b1 = 3;
console.log(a1 + b1); // 13
console.log(a1 - b1); // 7
console.log(a1 * b1); // 30
console.log(a1 / b1); // 3.333...
console.log(a1 % b1); // 1
console.log(a1 ** b1); // 1000 // ES2016

    // increment operator
    // post increment
    console.log(a1++); //10 --> increments the value of a1 after this statement has executed.
    // pre increment
    console.log(++a1); //12 --> increments the value of a1 before execution of current statement.
    // Similarly decrement operator exists --> --x, x--

    // Shorthand operators or assignment operator
    //  Just like in python, JS also supports shorthand operators
    let x = 1;
    // -> x = x + 1; => 
    x += 1;
    // -> x = x * 2; => 
    x *= 2;


// Comparison Operator
let y = 10, z = '10';

console.log(y == z); // true -> checks loose equality 
// -> checks only value, converts and checks if possible.

console.log(y === z); // false -> checks strict equality -> checks type

// Logical Operator

t1 = true;
t2 = false;

console.log(t1 && t2); // and operator // false
console.log(t1 || t2); // or operator // true

console.log(!t1);     // not operator // false