// return karun pn run kara yet (retrun : num1 + num2).
function sayMyName(){
    console.log("T");
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("J");
    console.log("A");
}

//sayMyName()    //execuation on function

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result  // returnchya nnather kahicha print honar nahi.
    return number1  + number2
}
const result = addTwoNumbers(3,5)
//console.log("result:",result);

function loginUserMessage(username = "Patil"){ // jar value undefined asel tr apan je pahile je taku shakto (username = "----")
    //if(username === undefined){ 
    if(!username){// jar value undefined asel tr as on lihata yet !

        console.log("plz enter a username");
        return
    }

    return `${username} just logged in`  //${} he use karun apan add karu shakto statement madhe
}
console.log(loginUserMessage("Tanuja"))
console.log(loginUserMessage()); // value pass kel mahi tr undefined yenae.


//************************


//ANOTHER VIDEO//


 //FUNCTION
                                                                                            //      1:-200      2:-400      500
function calculaateCartPrice(vall1,vall2, ...num1){ // (num1):-200 ,   (...num1):- 200,400,500 , (vall1,vall2...num1):- 500.
    return num1
}
console.log(calculaateCartPrice(200,400,500));

const user ={
    username:"Tanuja",     
    price: 199
}

function handleobject(anyobject){    
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject({                // direct objects pass
    username:"Patil",        //objects write as shown
    price:200
})

const myNewArray = [200,400,600,100]      // arrays objects pass

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,100]));


