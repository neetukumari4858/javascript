var  readlineSync=require("readline-sync");
var name= readlineSync.question("Enter your name:-")

var user=readlineSync.question("choose rock or paper or sc:-")
var list1=["rock","paper","sc"]
var computer=list1[Math.floor(Math.random()*list1.length)];
console.log(`computer Guessed ${computer}`)
console.log(`you entered ${user}`)

if (user==computer){
    console.log("Draw")
}
else if (user=="rock" && computer=="paper"){
    console.log(`${name} you win!!`)
}
else if (user=="rock" && computer=="sc"){
    console.log(`computer win!!`)
}
else if (user=="paper" && computer=="sc"){
    console.log(`computer win!!`)
}
else if (user=="paper" && computer=="rock"){
    console.log(`${name} you win!!`)
}
else if (user=="sc" && computer=="rock"){
    console.log(`computer win!!`)
}
else if (user=="sc" && computer=="paper"){
    console.log(`${name} you win!!`)
}




