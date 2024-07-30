//***************** Primitive DataTypes **************** 

// 7 => String,Number,Boolearn,Null,undefined,Symbol,BigInt //

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
let myObj = {          // object create kel myObj navch.
name : "Tanuja",
age : 23,
}

const myFunction = function(){
    console.log("Hello World");
} 
console.log(typeof bigNumber); // number type ahe
console.log (typeof outsideTemp) ; //nullcha typeof "object" ahe
console.log(typeof scoreValue); // 100.3 typeof "number" ahe
console.log(typeof anotherId); // "symbol" typeof ahe

// Stack Memoey(Primitive), Heap (Non Primitive)

let myYoutubename = "tanujapatilcom"
let anothername = myYoutubename
anothername = "chaiaurcode"  

console.log(myYoutubename);
console.log(anothername); // string asel tr techa ghet  asel tr nnather je string ahe te ghet

let userOne = {
    email: "user@ggle.com",
    upi: "user@ybl"
}
let userTwo = userOne
 userTwo.email = "tanuja@google.com"  // updated values ghet te 

 console.log(userOne.email); // updated values ghet te (je lastla difine kel te.)
 console.log(userTwo.email);
