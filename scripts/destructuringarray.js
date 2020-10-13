var emp = ["rohit", "mudgal", "male"];
//Use square brackets [] to destrucre array
var fname = emp[0], lname = emp[1], gender = emp[2];
//you can use rest operator to destructure array.
var fn = emp[0], ele = emp.slice(1);
console.log(fname);
console.log(lname);
console.log(fn + "inele");
for (var i in ele) {
    console.log(ele[i]);
}
//# sourceMappingURL=destructuringarray.js.map