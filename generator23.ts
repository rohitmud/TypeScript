//Generally once a function has started execution it cannot be paused.
//ES6 introduced a new type of fucntion which can be paused in the middle of execution
//Runs some other code and resume the same function where it was paused.
//This pausing of the function is done using a keyword "yield"

//the syntax of a generator function is same as of a normal function but with a * in name.

function *createGenFun(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
    console.log("After 2nd yield");
    
}

//Create reference for the generator function
let MyGen=createGenFun();
//To invoke the function, we have to use the next mehtod on the generator.
console.log(MyGen.next());
console.log(MyGen.next());

//Only when there are no more yields value is undefined and done is set to true.
console.log(MyGen.next());

//Generator is a speical funcation capable of pausing and resuming execution with the help of yield keyword

//Uses of generator
//A generator returns an object that provides the same next method as expcted by a for of loop.
//Generators can be used to simplify our code the custom iterator to iterator over object.