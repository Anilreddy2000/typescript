interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrail: ()=> string
    startTrail():string
    getCoupon(couponname: string): number
}

interface User{ // re-opening of interface
    githubToken: string
}

interface Admin extends User{
    role: "admin" | "ta" | "learner"
}

const anil: Admin = {dbId:12,email:"ann@kd",userId: 44455,
role:"admin",
githubToken:"github",
startTrail:()=>{
    return "trail started"
},
getCoupon:(name: "Anil")=>{
    return 10
}
}

anil.email="anil@re.h"