let displayColors = function () {
    for (let i in arguments) {
        console.log("Arguments: " + i + " " + arguments[i]);
    }
};
displayColors('Red');
displayColors('Red', 'Blue');
displayColors('Red', 'Blue', 'Green');
///...colors is a rest opertor. 
//Rest opertator takes n number of arguments and puts them in a single array
//Split/spread operator does the opposite
//The rest operator is defined in the function declaration.
//The spread operator is defined while calling the ffunction
let displayColorsNew = function (msg, ...colors) {
    console.log(msg);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let msg = "Colors are";
displayColorsNew(msg, 'Red');
displayColorsNew(msg, 'Red', 'Blue');
displayColorsNew(msg, 'Red', 'Blue', 'Green');
//# sourceMappingURL=restOperator3.js.map