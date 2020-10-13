let prsn = {
    name: "rohit",
    sname: "mudgal"
};
/* Wont work since there is no iterator method
for(let p of prsn){
}
*/
for (let p in prsn) {
    console.log(p);
    console.log(prsn[p]);
}
prsn[Symbol.iterator] = function () {
    let properties = Object.keys((prsn));
    let count = 0;
    let isDone = false;
    let next = () => {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: properties[count++] };
    };
    return { next };
};
for (let p of prsn) {
    console.log(p);
}
//# sourceMappingURL=iteratingObjects21.js.map