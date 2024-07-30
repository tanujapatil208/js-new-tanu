const name = "Tanuja"
const repoCount = 50

console.log(name + repoCount + "value"); // connect as the keys is one line(Tanuja50value)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);// to add some keysvalue is statments we use ${name/----}/${repoCount}

const gameName = new String('Tanuja_Tp')

console.log(gameName[0]);// gives the first charater of string
console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));// gives the latter position(Tanuja:-gameName.indexod('a') answer:- 2]))

const newString = gameName.substring(0, 4) // gives the latters in between((0,4):- tanuja  answer:-(tanu))
console.log(newString);
const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Tanuja    "
console.log(newStringOne);
console.log(newStringOne.trim());//remove star and end space

const url = "https://tanuja.com/tanuja%20patil"
console.log(url.replace('%20','-')) //change karu shakto worlds kiva symbols by using replace
console.log(url.includes('tanuja')) // letter kiva symbol madhe ahe ka tya url madhe check karat.
console.log(gameName.split('%'));