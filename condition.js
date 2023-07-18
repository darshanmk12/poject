//1.if statement:
// let age= 10
// if(age<=18){
//     console.log("your kid")
// }

//.2 if else statement:
// let age= 20
// if(age<=18){
//     console.log("your kid")
// }
// else{
//     console.log("your matured")
// }


//.3 if else if :
// let age= 20
// if(age<=18){
//     console.log("your kid")
// }
// else if (age>=18){
//     console.log("your young")
// }
// else{
//     console.log("your matured")
// }


let prompt = require ("prompt-sync")({sigint:true})
// let age = prompt("enter your age")
let age = parseInt(prompt("enter your age"))

if(age>0 && age<=18){
    console.log("your kid")
}
else if(age>18 && age <=40){
    console.log("young")
}
else if(age>40 && age<=70){
    console.log("aged")
}
else if(age<0 && age70){
    console.log(god)
}
else{
    console.log("better luck nxt time")
}


//to get op: npm
