const User ={
    name:"Anil",
    email:"anil@email.com",
    isActive:true
}

// function createUser({name: string,isPaid: boolean}){}

// let newUser= {name:"anil",isPaid: false,email:"etdvdv@hbf"}

// createUser(newUser)

// function createCourse():{name: string,price: number}{
//     return {name:"anil",price: 3999};
// }


// Type alias

// type User ={
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User):User{
//     return {name:"",email: "",isActive:true}
// }

// createUser({name:"",email: "",isActive:true})

type User ={
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    creditcardDetails?: number
}

let myUser: User ={
    _id: "1234",
    name:"h",
    email:"h@j.com",
    isActive:false
}

type cardNumber ={
    cardNumber: string
}

type cardDate ={
    cardDate: string
}

type creditcardDetails =cardNumber & cardDate & {
    cvv : number
}

myUser.email="anil@gamil.com"

//myUser._id="223"  not possible be`cause  readonly

export {}