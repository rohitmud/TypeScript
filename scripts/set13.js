//A set contains only unique values.
//A set can contain any data type
let set = new Set();
set.add("Hello");
set.add(2);
set.add(2); //Wont be added to set, since its not unique.
let ob1 = {};
let ob2 = {};
set.add(ob1);
set.add(ob2); //Since the object are not converted to string the ob2 will be added. Empty object string =[object object]
console.log(set.size); //Output is 4
let newset = new Set([1, 2, 5, 3, 2, 1,]); //Added sme duplicate values to test.
console.log(newset.size); //duplicates are ignored and not counted. Output is 4
//Chaining sets
let addsets = new Set().add("Hello").add("Wordl");
console.log("Chanied size " + addsets.size);
//To check if a value exists in set
console.log(newset.has(1));
//To delete a value for a set
console.log(newset.delete(5));
console.log(newset.size);
//# sourceMappingURL=set13.js.map