//there are two ways to declare array in ts
let strarray1 = ["hello", "world"];
let strarr2 = ["hello", "World"];
let anyArray = ["hello", 1, 2,]; //Can hold any dta type
//In Ts, tupels are specail arrays, that lets you specify the type the array can contain.
//For eg. lets say we want an array that can hold only string and numbers.
let myTup = [];
myTup[0] = "hi";
myTup[1] = 10;
myTup.push(true);
console.log(myTup[0]);
console.log(myTup[1]);
myTup[2] = 100;
//# sourceMappingURL=arrayAndTuple.js.map