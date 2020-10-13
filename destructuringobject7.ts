let emplo={
    fname1:"rohit",
    lname1:"mudgal",
    gender1:"male"
}


//In case of object destructing use curly brackets {}
//Use the same name variable as property name to correctly destrucrre object
let {lname1,fname1,gender1} = emplo;
console.log("Object destrucre");
console.log(lname1);
console.log(fname1);
console.log(gender1);

//using alias for varibaale name
let {lname1:l,fname1:f,gender1:g} = emplo;
console.log("Object destrucre alis");
console.log(f);
console.log(l);
console.log(g);




