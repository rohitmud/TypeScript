class Person {
    greet() { }
}
;
let p1 = new Person();
//The out put is function.
//In esse class are special function those which cannot be hoisted, like var
//You can use and call a function before defining it, the same cannot be done with classes.
//You cannot use a class before defining it.
console.log(typeof (p1));
console.log(p1.greet === Person.prototype.greet);
//# sourceMappingURL=classesinEs10.js.map