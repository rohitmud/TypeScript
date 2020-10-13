//The spread operator takes an array and splits them into individual elements.
//Rest opertator takes n number of arguments and puts them in a single array
//Split/spread operator does the opposite
//The rest operator is defined in the function declaration.
//The spread operator is defined while calling the ffunction
let displayColorsSpread = function (msg, ...colors) {
    console.log(msg);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let msg1 = "Colors are";
let colorArray = ['yello', 'green', 'brown', 'orange'];
displayColorsSpread(msg1, ...colorArray);
//# sourceMappingURL=spreadoperator4.js.map