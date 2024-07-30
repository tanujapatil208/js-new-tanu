//Singelton

//object litterals


const mySym = Symbol("Key1")

const JsUser = {   //object create kel
    name : "Tanuja",
    "Full Name": "Tanuja Patil",
    [mySym]: "myKey1",  // sumbol jar define karaych basel tr as kartat
    age: 23,
    location: "latur",
    email: "patiltanuja208@2234.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday","Saturday"]
}
// console.log(JsUser.age)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"]) // jar define key jar string asel tr "." use karta yet nahi te [] as lihav lagta
// console.log(JsUser[mySym]) // symbol declear karaychb asel tr as kartat.
// console.log(typeof JsUser)

JsUser.email = "patiltanuja@23934.com"
//Object.freeze(JsUser)   // using "freeze" apan keyvalues change karu shakt nahi(freezechya nanther je lihal te change honar nahi))
JsUser.email = "patiltanuja@1234.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // ${this.----} use for calling objects key in function.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


