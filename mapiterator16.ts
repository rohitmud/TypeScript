let myarraymap=new Map([
    ["fname","Rohit"],
    ["lastname","Mudgal"]
])

//To iterate through keys
console.log("key");
for(let key of myarraymap.keys())
console.log(key);

//To iterate through values
console.log("Values");
for(let value of myarraymap.values())
console.log(value);

//If we need both key and values
console.log("Bothe keys and values")
for(let m of myarraymap.entries()){
    console.log(`keys are ${m[0]} and values are ${m[1]}`);
}

//WE can also use destructing 
console.log("Key value destructinrg");

for(let [key,value] of myarraymap.entries()){
    console.log(`keys are ${key} and values are ${value}`);
}
