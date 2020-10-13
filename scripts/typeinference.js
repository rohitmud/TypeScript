var x = 10;
var x = 10; //this is explicityly telling that x should be of type number. String value cannot be assigned
//a new data type any was introducted in tyrpe script which can hold a number, string, boolean and iundefined
var info;
info = 10;
info = "Hello";
info = true;
//there is no constarint while assigning the value to this variable
//enum
var eyecolors;
(function (eyecolors) {
    eyecolors[eyecolors["Brown"] = 0] = "Brown";
    eyecolors[eyecolors["Black"] = 1] = "Black";
    eyecolors[eyecolors["Blue"] = 2] = "Blue";
})(eyecolors || (eyecolors = {}));
//This declarion will assign  numeric value to brown, nblack and blue as 0,1,2. howver over it to check value. you can assing new values as well
var myelecolor = eyecolors.Blue;
console.log(myelecolor); //will show numeric value
console.log(eyecolors[myelecolor]); //this will show color name
//# sourceMappingURL=typeinference.js.map