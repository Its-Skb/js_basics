// Primitive

// 7 types; String, NUmber, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.1

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

// const bigNUmber = 1234567890123456789012345678901234567890n

// Reference (Non-primitive)

// Array, Object, Functions

const heros = ["Shaktiman", "Bheem", "Chhota Bheem", "Doremon"]

const myObj = {
    name: "Saurabh",
    age: 50,
}

const myFunction = function(){
    console.log("Hello World!");
    
}

console.log(typeof anotherId);