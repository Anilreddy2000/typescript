function addTwo(num: number):number{
     return num+2;
    //return "hello";
}

function getUpper(val: string):string{
    return val.toUpperCase();
}

function signUpUser(name: string,email: string,isPaid: boolean){

}

let loginUser = (name: string,email: string,isPaid: boolean=true) => {}

let myvalue=addTwo(5)

getUpper("shd")

signUpUser("Anil","anil@email.com",false);
loginUser("h","dfhf@fhf");

// function getValue(myval: number){
//     if(myval > 5){
//         return true
//     }
//     return "200 OK";
// }

const hetHello = (s: string):string=>{
    return "";
}

const heros = ["thor","spiderman","ironman"];
//const heros = [1,2,3];


heros.map((hero: string) => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}


export {}