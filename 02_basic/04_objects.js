//const tinderUser = new Object()
const tinderUser = {}

//  tinderUser.id = "123abc"
//  tinderUser.name= "Tanuja"
//  tinderUser.isLoggedIn = false
 
//  console.log(tinderUser);

//  const regularUser = {
//     email: "patiltanuja@207.com",
//     fullname: {       //one bject into another object (in Loop).
//         userfullname: {
//         firstname: "Tanuja",
//         lastname: "Patil"   
//        }
//     }
// }
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}
// const obj4 = {5:"a", 6:"b"}

// // const obj3 = {obj1, obj2}
// // console.log(obj3);   // this will only combines the two objects.

// //const obj3 = Object.assign({},obj1,obj2,obj4) // marage 2{}{} objects into 1 objects{... ... } 

// const obj3 = {...obj1, ...obj2}
// //console.log(obj3);

// const users =[
//     {
//         id:1,
//         email: "patiltanuja@2364.com"
//     },
//     {
//         id:1,
//         email: "patiltanuja@2364.com"
//     },
//     {
//         id:1,
//         email: "patiltanuja@2364.com"
//     },
    
// ]
// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnPropperty('isLoggedIn'));


const course ={
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"Tanuja"
}

const {courseInstructor:instructor } = course // mothya navala lahan madhe convert karu shakto {old name:new name}

//console.log(courseInstructor); // called destructor.
console.log(instructor);


// {
//    "name": "Tanuja",           
//     "coursename":"js in hindi",   // look lokes objects.
//     "price": "free"
// }   

[
 {},
 {},  // it is looks like arrays.
 {}
]

