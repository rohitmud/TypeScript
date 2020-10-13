class Person2{
    fname: string
    lname: string
    constructor(fname: string, lname:string){
        this.fname=fname;
        this.lname=lname;
    }
}

///The below sing line constructor is same as above 4 lines of code. and is frequently ised in angular.
class Person3{
    constructor(public fname:string, public lname:string){

    }
}