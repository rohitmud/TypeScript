let prsn={
    name:"rohit",
    sname:"mudgal"
}
/* Wont work since there is no iterator method
for(let p of prsn){
}
*/

prsn[Symbol.iterator]=function(){
    let properties=Object.keys((prsn));
    let count=0;
    let isDone=false;
    let next=() => {
        if(count>=properties.length){
            isDone=true;
        }
        return{done:isDone, value: this[properties[count++]]};
    }
    return {next};
}

//WE can use a generator function to iterate over object properties

prsn[Symbol.iterator] = function*(){
    let properties=Object.keys((prsn));
    for(let t of properties)
    {
        yield prsn[t];
    }
}
console.log("Iteratating through object");

for(let p of prsn){
    console.log(p);
}