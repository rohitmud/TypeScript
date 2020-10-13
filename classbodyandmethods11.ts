class Person1{

//There are three types of method in classes.
//Constructor, static method and protytype method.

    name;
    static cont=0;
    //There can be only one constructor
    constructor(name){
        this.name=name;
        console.log(this.name + " Constructor");
    }

    //Static method can be used without creating a object
    static StaticMethod(){
        this.cont++;
        console.log("Count incremented: "+this.cont);
    }


    //Prototype Method
    grettPerson(){
        console.log("Welcome person prto: "+this.name);
    }

}
console.log("Classes with method script loaded");
let p3=new Person1("rohit");
Person1.StaticMethod();
Person1.StaticMethod();
p3.grettPerson();