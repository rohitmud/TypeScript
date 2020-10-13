let emp = ["rohit", "mudgal", "male"];
//Use square brackets [] to destrucre array
let [fname, lname, gender] = emp;
//you can use rest operator to destructure array.
let [fn, ...ele] = emp;
console.log(fname);
console.log(lname);
console.log(fn + "inele");
for (let i in ele) {
    console.log(ele[i]);
}
//# sourceMappingURL=destructuringarray6.js.map