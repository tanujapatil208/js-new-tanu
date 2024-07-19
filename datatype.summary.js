//***************** Primitive DataTypes **************** 

// 7 => String,Number,Boolearn,Null,undefined,Symbol,BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 25534364572634562763n    //  (n) means BigInt 


// **************  Non Primitive DataTypes ************

// 3 => Array,object,functions


const heros = ["shaktiman","naagraj","doga"]
let myObj = {
name : "Tanuja",
age : 23,
}

const myFunction = function(){
    console.log("Hello World");
} 
console.log(typeof bigNumber);
console.log (typeof outsideTemp) ;
console.log(typeof scoreValue);
console.log(typeof anotherId);

