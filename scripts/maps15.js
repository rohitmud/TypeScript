//In ES2015, maps is an ordered list of key valuies
//In map, both key and value can be of any type.
let myMap = new Map();
//To set a value in map
myMap.set("fname", "Rohit");
myMap.set("age", 30);
myMap.set(30, 50);
console.log("Map values are: ");
console.log(myMap.get("fname"));
console.log(myMap.get("age"));
console.log(myMap.get(30));
//WE can also use object as keys in map
let obj1 = {};
let obj2 = {};
myMap.set(obj1, "object1");
myMap.set(obj2, "object2");
console.log(myMap.get(obj1));
console.log(myMap.get(obj2));
//WE can use size to get the size
console.log(myMap.size);
//We can use has to check if a key exist
console.log("Chjeck if map has object1: " + myMap.has(obj1));
//we can delete a key using delete
myMap.delete("fname");
console.log("Check if obj1 key exist after deleting: " + myMap.has("obj1"));
//We can clear a map using clear
myMap.clear();
console.log("Check size of map after clearning:" + myMap.size);
//# sourceMappingURL=maps15.js.map