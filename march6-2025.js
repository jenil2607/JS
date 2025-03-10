// Functions  >> reusable blocks of code 
// >> Prevents need to repeat logic every time we need to use it.

// JS functions can be defined in 3 different ways

// 1. Regular functions

function function_name(parameter1, parameter2){
    // statements

    return value; // optional
}
//>> Just like any other language, functions need to be called for the logic to be run.

function greetPeople(full_name, language){
    switch(language){
        case 'hindi':
            console.log(`Namaste ${full_name}`);
            break;
        case 'english':
            console.log(`Hi, ${full_name} How are you???`);
            // This way of using backticks instead of quotations is called `template strings`
            // The way in which the variables are providing values into the string
            // is called `string interpolation`. ==> Introduced in 2015.
            // This supports multi-line string in JS.
            break;
        default:
            console.log("Bye");
    }
}
greetPeople("Rashmi",'hindi');

// 2. Anonymous functions
// Sometimes, a defined function need not have a name or an identifier.
// Such functions are called anonymous functions.
// Usually stored in variables or passed as arguments to another function

let s = function (a,b){
    console.log(a + b);
}
s(1,2);

function calculate(a,b, f){
    console.log(f(a,b));
}

calculate(1,2, function (a,b){return a + b;}); 

// 3. Arrow function

// Introduced as a new method for declaring anonymous functions
// But it is not exactly same as anonymous function

calculate(1,2, (a,b) => {return a + b;}); 

// Let's look at some built-in functions

// 1. Global functions
// Type casting functions
let i = "10.05";
console.log(`Value: ${i}; Type: ${typeof i}; Converted: ${parseInt(i)}; Type: ${parseInt(typeof i)}`);

i = "10.5px12345";
console.log(`Value: ${i}; Type: ${typeof i}; Converted: ${parseFloat(i)}; Type: ${parseFloat(typeof i)}`);

console.log(Number("3265789"));

i = "123"
console.log(isNaN(i));

// String functions
s = "Deepak";
console.log(s[0]); 
// >> Same can be done by
console.log(s.charAt(0));
s = s.toUpperCase();
console.log(s);
s = s.toLowerCase();
console.log(s);

// finding first matching index of character
console.log(s.indexOf('e'));

console.log(s.substring(0,4));
