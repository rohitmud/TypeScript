let user="user rohit"
let greet="welcome "+ user + " to ES2015";

//The ${} interpolates the user variable value.
//also using backtick` allows seamless use of single and double quotes without messing up the syntax
//Also you can direct enter the string in new line.
//Be careful with white spaces, they are outputted as is.
let newGreet=`Welcome 'single' "double" ${user} to ES2015
This is the second line
This is the third and so on...
`
console.log(greet);
console.log(newGreet);