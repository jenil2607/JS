const age_limit = 18;
const heavy_licence_age_limit = 21;
let age = 20;

if (age >= heavy_licence_age_limit){
    console.log("you can drive heavy vehicale.")
}

else if (age >= age_limit){
    console.log("You can drive");
}
else {
    console.log("You cannot drive")
}

let choice = 1;

switch (choice){
    case 1:
        console.log("Milk");
        break;
    case 2:
        console.log("Tea");
        break;
    default:
        console.log("Yeay");
}

massage = age >= age_limit ? 'can drive' : 'canot drive' ;
console.log(massage);

for (let i = 0; i <= 4; i++){
    console.log(2," x ", i, '= ',i * 2);
}


let array1 = [1,2,3,4,5]

for (let item of array1){
    console.log(item);
}

for (let char of "hello World"){
    console.log(char);
}

students = ['jenil','swami','tin']
for (let student_index in students) {
    console.log(students[student_index]);
}



let count = 0;
while (count < 3){
    console.log(count);
    count++;
}


console.log("------")
let x= 10;
do{
    console.log(x--);
}
while(x > 5)

//  loop control
// break, continue
for (let i = 0; i  <= 10; i++){

    if (i == 6) break;
    if (i == 4) continue;
    console.log(i);
}