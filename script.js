console.log("HEllo World"); 

// variable declaration

let fname = "jenil";
var age =2;
const age_limit = 18;  // values delcared using this keyword cannnot be cahnge during runtime.
// const - stands for cinstant

console.log("Welcome To Earth",fname);

age++; // equivalent to age = age + 1;
console.log(age);

// with var, we can declare a variable, nit possible with let.

var age = 10;
console.log(age);
// let fname = 'jenil'; This will throw error.
// ressignment is okey.
fname = 'swami';
console.log(fname);

console.log('a value:',a); // at this satge
a = 19; // definding value of a
console.log('a value',a);
console.log(a);


let b;
b = 10;
var c;
c = 10;

var a; // this declaration will eb `hoisted` or pulled to the top while running
// so that it is run before assigement of same.


// Scope in JS declaring using curly braces : {}

{
    let  v1 = 10;
    const c1 = 15;
    var v2 = 20;
 
}

console.log(v2);
// console.log(v1); Tho=rows error as v1 is not available in this scope.



// ----------------------------------------------------------------------------------------------------------------------------//
// Data Types
// Primitiv
// 1. Number
let i = 0;
console.log(typeof  i); // equivalent to print(type(i)) in pyython.

// 2. String
i = 'a';
console.log(typeof  i); 

// 3. Boolean
i = true;
console.log(typeof  i); 

// 4. Undefined
let j;
console.log(typeof  j); 

// 5. Null
let k = null;
console.log(typeof k);

// 6. symbol


//  Non-primitive

// objects
let user = {
    name: "jenil",
    age: 25
};

console.log(typeof user);
console.log('name :' ,user.name);  


// Oprators in JS

// Arithmatic
let a1 = 10, b1 = 3;
console.log(a1 + b1); // 13 
console.log(a1 - b1); // 7
console.log(a1 * b1); // 30
console.log(a1 / b1); // 3.333..
console.log(a1 % b1); // 1
console.log(a1 ** b1); // 1000 // ES2016
console.log(a1++); // 10
console.log(++a1); // 12
