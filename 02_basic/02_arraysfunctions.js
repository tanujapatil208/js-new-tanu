const marvel_heros = ["thor", "Iroman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);


const all_bew_heros = [...marvel_heros, ...dc_heros] // spride :- "..."
console.log(all_bew_heros);


const another_array = [1,2,3,[4,5,6],7,8,[1,2,3]]   
const real_another_array = another_array.flat(Infinity)  // flate:-
console.log(real_another_array);


console.log(Array.isArray("Tanuja"));
console.log(Array.from("Tanuja"));
console.log(Array.from({name:"Tanuja"})); //interesting

//additional// :- To copy the up/down line we can use shift alter up/down//

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); //to calculate all the string in array//
