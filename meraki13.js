let readlineaSync = require("readline-sync");
var age=readlineaSync.questionInt("enter age");
if(age>=5){
   console.log("You can go school");
}
if(age>=18){
   console.log("You can vote in elections.");
}
if(age>=21){
   console.log("You can drive a car");
} 
if(age>=24){
   console.log("You can marry");
}
if(age>=25){
   console.log("You can drink");
}