//ES2015 introducced iteration which is anew way to traverse data
//And iteration revoles around two key concepts
//Iterables and iterators
//what are iterables and iterators/
//An iterable is an object that implements an mehtod whose key an symbol.iterator
/*
Iterable{
    [Symbol.iterator](): Iteraotr
}

//An iterator is an object that is going to implement the next method.
Iterator{
    next(): IresultObject//This knows how to access an element in a collection be it an array, string or map or set and it returns an object
}

//This IresultObject contains two properties.
IresultObject{
    value: any//Tis will be the actual value in the collection
    done: bool //This indicates if the iteration is complete. if true iteration is cmplete.
}*/
let iteratorarray = [1, 2, 3, 4];
function CreateIterator(array) {
    let count = 0;
    return {
        next: function () {
            return count < array.length ?
                { value: array[count++], done: false } :
                { value: undefined, done: true };
        }
    };
}
let myIterator = CreateIterator(iteratorarray);
console.log(myIterator.next());
//# sourceMappingURL=iterablesIterator.js.map