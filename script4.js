

const student = {
    name : "jenil",
    age : 10,
    learn : function (subject) {
        console.log(`I'm ${this.name} and I'm lerning ${subject}.`);
    },
    applyLeave : function (n) {
        console.log(`student : ${this.name} is taking ${n} days leave`)
    } 
}
student.learn('physics');
student.applyLeave(2);


// 2. using the object constructer

const s2 = new Object
s2.name = "jenil";
s2.age = 21;
s2.learn = function () {
    console.log(`I am ${this.name} adn i am not available at the momment......`)    
}
s2.learn();



// 3. using oriented progrsmming in JS

class Student {
    constructor(anme,age){
        this.name;
        this.age;
    }
    learn(sub) {
        console.log(`I'm ${this.name} and I'm lerning ${sub}.`);
    }

    applyLeave(n) {
        console.log(`student : ${this.name} is taking ${n} days leave`);
    } 
} 
s = new Student();
s.learn('physics');