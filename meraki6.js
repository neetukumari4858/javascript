var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num2=readlineSync.question("enter a number");
if(num1==num2){
   console.log("equal hai")
}
else{
   console.log("not equal")
}