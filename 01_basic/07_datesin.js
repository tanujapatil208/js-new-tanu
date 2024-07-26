// Dates 

let myDate = new Date()
console.log(myDate.toString());      //wed Jul 24 2024 08:00:58 GMT+0000 :-day/month/date/year/time
console.log(myDate.toDateString());   // wed/ jul / 24 / 2024 :- day/month/date/year
console.log(myDate.toISOString());     // 2024-07-24T07 :- year/month/date
console.log(myDate.toLocaleDateString());    //7/24/2024  :- month/date/year

console.log(typeof myDate);  //object.

//let myCreatedDate = new Date(2024, 6, 24, 1, 39) // mm/dd/yy/Time :- 7/24.2024, 1:39
let myCreatedDate = new Date("2024-07-24") // yy/mm/dd :- 7/24/2024
console.log(myCreatedDate.toLocaleString());  

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));// atachi date deta (in milisecond)

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());



newDate.toLocaleString('default',{
    weekday: "long",
})

