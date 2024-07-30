//array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Yuvraj", "Swapnil"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // 1 anser al kaean array start from 0.

//****************************** Array methods **************************** 

 myArr.push(6)
 myArr.push(7)// add the number to the given array
myArr.pop() // remove last value from the array 


myArr.unshift(5) //add the value in the starting.
myArr.shift()//  the value in the

console.log(myArr.includes(4));
console.log(myArr.indexOf(3)); // staing from 0 .

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

//slice 
//splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,4) // cut the value from array[0,1,2,3,4,5]:- slice(0,4)("0 to value-1"):-[1,2,3]

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,4) // cut the value from array[0,1,2,3,4,5]:- splic2(1,4):-[0,5] 
console.log("C ",myArr);
console.log(myn2);