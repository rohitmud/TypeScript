let firstname='rohit';
let lastname='mudgal';
let person={
    firstname,//this is equal to firstname:firstname
    lastname

}
console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname, lastname, age){
    let fullname=firstname+ " "+lastname;
    return {firstname,lastname,fullname,
    issenior:function(){
       return age>60
    }
    }
}

let p=createPerson('anu','mudgal',30);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.issenior());

let ln="Last name";
let NewPerson={
    "first Name":"Rohit",
    [ln]:"Mudgal"
}
console.log(NewPerson["first Name"]);
console.log(NewPerson[ln]);
console.log(NewPerson);
ln="last";
console.log(NewPerson);