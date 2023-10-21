class User{
    private _courseCount: number=1
    public email: string
    private name: string
    readonly city: string="hyderabad"
    constructor(email: string,name: string){
        this.email = email;
        this.name = name;
    }

    private deleteToken(){
        console.log("Token Deleted !")
    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courseCount(): number{
        return this._courseCount
    }
    set courseCount(courseNum){
        if(courseNum <=1 ){
            throw new Error("course count should be more than 1")
        }
        this._courseCount=courseNum
    }
}

const anil=new User("anil@hf.com","anil");
//anil.city = "hyderabad";
// console.log(anil.name)
// console.log(anil.email)
// console.log(anil.city)
