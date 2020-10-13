//Weak set is same as set, with difference being, the weak set contains only non-primite types.
//Also once the objet reference is removed, unlike set, weak set does not contains reference to the object
//Simple set Example.
let normalSet = new Set();
let key = { name: "Rohit" };
normalSet.add(key);
console.log("Size of normal set: " + normalSet.size);
console.log("Key value set to null: " + key.name);
key = null;
console.log("Size of normal set after removing key: " + normalSet.size);
console.log("Set has key after setting key to null: " + normalSet.has(key));
console.log("Key value set to null: " + key);
//Reference of key can be get back using the normal set
key = [...normalSet][0];
console.log("Key value got reference back from set: " + key.name);
//WEak Set Example. Only adavantage over normal set is, memory is handled properly in weak sets.
//WeakSets are collections of objects only
//The WeakSet is weak, meaning references to objects in a WeakSet are held weakly.
//If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.
//If you only ahve to trrack the references to object and nothing more. WEakset is iused
let weakset = new WeakSet();
weakset.add(key);
let key2 = key;
console.log("Key 2 value is: " + key2.name);
//There is no size property in weakset. So ou cannot check if the size has chagnd once refernce is set to null for key.
console.log("Does weak set has key: " + weakset.has(key));
//Now there is no way to know exactly if the reference is removed from weakset. because we atleast need one reference to key object.
//We have to believe in EC2015/6 that once key is set to null, the weakset does not contains reference to key values.
//So If we have to track only references to object 
key = null;
//Since key value is set to null, checking if the null key exist in weakset will give false.
//So it is futile to check if key exists once it is set to null.
//# sourceMappingURL=weakset14.js.map