class Employee{
    constructor(){
        console.log("Person 2 constructor called");
    }

    getID(){
        return 10;
    }
}

class Emp2 extends Employee{
    constructor(name){
        super();
        console.log("Name "+name);
    }
    getID()
    {
        return 20;
    }

}

let p2= new Emp2("Rohit");
console.log(p2.getID());