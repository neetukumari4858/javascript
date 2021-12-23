let readlineSync = require("readline-sync");
var water=readlineSync.questionInt("enter water level");
if (water<1){
   console.log("more water needs to fill");
}
else if (water>=1 && water<=10){
   console.log("no need to fill water");
}
else{
   console.log("overflow");
}
