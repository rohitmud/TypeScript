//Regular function
var regFunValue=function(){
    return 10;
}

console.log(regFunValue())

const Arrowfunction =() => {
    return 10;
};

const shortArrowfunction =() => 100;

const ArrowfunctionParam =(m) => m*100;

const ArrowfunctionmultiParam =(m,bonus) => m*100+bonus;

console.log("From arrow function."+Arrowfunction())
console.log("From short arrow function."+shortArrowfunction())
console.log("From short param arrow function."+ArrowfunctionParam(10))
console.log("From short param arrow function."+ArrowfunctionmultiParam(10,5))



//this example in arrow function, it uses parents variables
var employee={
    id:1,
    greet: function(){
        setTimeout(()=>{console.log("Greeting employee"+this.id)},1000)

    }
}
employee.greet();