//In ES5, for each worked pretty well for arrays.
//So in ES6/ES2015, foreach was added for maps and sets
//For each example in array
let numbers = [1, 2, 3, 4];
numbers.forEach(arrayFunction);
function arrayFunction(element, index, array) {
    console.log("array[" + index + "]=" + element);
}
//For each example for maps
let mynewMap = new Map([
    ["fname", "rohitmap"],
    ["lname", "Mudgalmap"]
]);
mynewMap.forEach(mapArrayFunction);
function mapArrayFunction(value, key, callingmap) {
    console.log(`key is ${key} and value is ${value}`);
    console.log(mynewMap === callingmap);
}
//For each example for sets
let myset = new Set([1, 2, 3, 4, 4, 5, 6]);
myset.forEach(mysetfunction);
//Value 1 and value 2 are same, 3 parameters in function are defined to maintain the standard with map and array foreach function
function mysetfunction(value, value2, mynetset) {
    console.log("SEt values are");
    console.log(`value of value is ${value}, value of value2 is ${value2}`);
}
//# sourceMappingURL=foreachmapsets17.js.map