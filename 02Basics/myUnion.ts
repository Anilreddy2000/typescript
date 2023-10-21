let score: number | string  =33

score=44;
score="55"

type User ={
    name: string;
    id: number
}

type Admin ={
    username: string;
    id: number
}


let anil: User | Admin ={name:"Anil",id: 344}

anil ={username:"an",id: 334}



getDBId(3);
getDBId("34");


function getDBId(id:number | string){
    //making an API calls
    if(typeof id === "string"){
        id.toLowerCase()
    }
    console.log(`DB id Is: ${id}`);
}


//arrays


const data: number[]=[1,2,3,4,5]
const data2: string[]=["1","2","3","4","5"]
const data3: (string | number | boolean)[]=[1,2,"3",4,5,true] 


let searAllotment : "aisle" | "middle" | "window"