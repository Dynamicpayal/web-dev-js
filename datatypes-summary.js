// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('345')
const anotherId = Symbol('345')

console.log(id == anotherId); // false

const bigNumber = 223456787654323456789n


// Reference / Non Primitive

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "payal",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); // number
console.log(typeof myFunction); // function(object function)
console.log(typeof bigNumber); // bigint
console.log(typeof heros); // object
