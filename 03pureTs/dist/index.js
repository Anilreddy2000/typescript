"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "hyderabad";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("Token Deleted !");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const anil = new User("anil@hf.com", "anil");
//anil.city = "hyderabad";
// console.log(anil.name)
// console.log(anil.email)
// console.log(anil.city)
