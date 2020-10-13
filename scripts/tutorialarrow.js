//Regular function
var regFunValue = function () {
    return 10;
};
console.log(regFunValue());
var Arrowfunction = function () {
    return 10;
};
var shortArrowfunction = function () { return 100; };
var ArrowfunctionParam = function (m) { return m * 100; };
var ArrowfunctionmultiParam = function (m, bonus) { return m * 100 + bonus; };
console.log("From arrow function." + Arrowfunction());
console.log("From short arrow function." + shortArrowfunction());
console.log("From short param arrow function." + ArrowfunctionParam(10));
console.log("From short param arrow function." + ArrowfunctionmultiParam(10, 5));
//this example in arrow function, it uses parents variables
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log("Greeting employee" + _this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=tutorialarrow.js.map