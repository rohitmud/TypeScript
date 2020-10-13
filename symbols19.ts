//In ES5, existing primitive data types are string, num, boolean, null and undfined
//ES2015, And new data type symbol is defined.
//Purpose of a symbol is to generate unqiue id, but funny thing is you cannot access this unwique id

//Since symbol are unique, a good place to use symbols is to use in object properties.
let nsy= Symbol("firstSymbol");
console.log(typeof(nsy));
console.log(nsy.toString());
console.log(nsy.valueOf());
console.log(nsy);
//A symbol always creates new id
//No two symbols can be same.

let s2= Symbol("firstSymbol");
console.log(s2);
console.log(s2===nsy)


//Now to use a symbol again in same file or another file
//We have to register a symbol in symbol registry
//For regsotring a symbol. symbol.for method is used while creating the symbol
//Symbol.for doesnt adds the symbol right away. it checks whehter the key passed already exists in the registry
//If it does it returns the symbo;.if it doesnt exists it will create new symbol in the GLOBAL REGISTRY
let syr= Symbol.for("RegSymbol");
console.log("Symbol for register: "+ syr.toString());

let syr2= Symbol.for("RegSymbol");
console.log("New reg sym and old are same: "+(syr2===syr));

//To identofy with which key symbol was created and registed.
console.log("Getting key for symbol syr2: "+Symbol.keyFor(syr2));


//Since symbol are unique, a good place to use symbols is to use in object properties.
//This will ensure that the object properties are not overwritter
//WE have created a unqiie property inside obj
//we never have to worry about or code with existing methods because this property will always be unquie.
let fna= Symbol("fna");
let persn={
    [fna]:"rohit using symn"
}

console.log(Object.getOwnPropertyNames(persn));//Ther property name will not be listed out as it is symboll

console.log(Object.getOwnPropertySymbols(persn));//Use static method symbols.. added in ES2015 to get property.

