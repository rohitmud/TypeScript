//built in symbol symbol.iterator
//There are a couple of  uilt in symbol other than symbol.iterator termed as well known symbols.
//for.. of loop works on all types of object
//for.. of -->iterator method --> symbol.iterator
let str = "Hello";
let staraayr = [1, 2, 34, 5];
let nm = 5;
let bject = {
    name: "rohit"
};
//Here we are checking if a method exist for the object "str" for this itertaor "symbol.iterator"
//If it does we can use the for.. of loop to iterate
console.log("For string: " + typeof str[Symbol.iterator]); //returns function
console.log("For staraayr: " + typeof staraayr[Symbol.iterator]); //return functiion
console.log("For nm: " + typeof nm[Symbol.iterator]); //returns undefined
console.log("For bject: " + typeof bject[Symbol.iterator]); //returns undefied.. so this cannot be used for..of
//this does not means objects are not iterable.
//We can define our own method to iterate through object.
//# sourceMappingURL=symboliterator20.js.map