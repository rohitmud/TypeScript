//Just like weak sets we have weak maps in ES2015
//Means, the keys can only be objects and object references are weak same as sets. refer weakset14.ts/
//meaning they dont interfere with the garbage collection.
let myweakmap=new WeakMap();
let objc1={}
let objc2={}
myweakmap.set(objc1,1);
myweakmap.set(objc2,2);

console.log(myweakmap.has(objc1));
console.log(myweakmap.get(objc1));
console.log(myweakmap.get(objc2));

//there is no foreach loop in weakmap
