//interfaces are the most flexible ways of describing types in tupe script.
//and bvoz type information is erased from type script when we compile it
//we dont have to worry about the run time over head
//to define na interface
//The purpose to use an interface in type script is to describe a particlar type
//and speicyt properties and these are going toe be mandatory whne specieid and becomes optional when ? assinged

interface IPerson{
    fname:string;
    lname:string;
    age?:number;//adding question mark next to variable makes it optional
}
//the interface enforecses that all three params are present and assinged a value in object.
let employee1 : IPerson ={
    fname:"rohit",
    lname:"Mudgal",
    age:33
}

//lets assume a sceario where one of the params value is not sure about and you dont want to fill wrong valuye

let Employee3 :  IPerson ={
    fname:"anu",
    lname:"Mudgal"

}