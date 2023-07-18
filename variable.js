// variable in js
//1.using var
//use to declare globel scoped variable


{
    var a=10

}
console.log(a)
var b=100   //declaration
console.log("value of b before re-initialisation",b)
b=200   //re-initialisation
console.log ("value of b after re-initialisation",b)
var b=420   //re-declaration
console.log ("value of b after re-declaration ",b)


//syntax error
// var 1a ="pyspider"
// console.log(1a)    




//rules to chose variable name
//1.alphabets a,1,_,$ can allowed
//2.must start with a,_,$
//3. var a1=22 possible
//var 1a =30 not possible
//var _a1=100 possible
//3.reserve kw if,else,for,console,log,name,pass
//5.it can sensitive



//is globle variable
//it support re initialisation and re declaration 









//------------------


//using let


console.log("\n 2.using let")

{
    let username ='majestic'
    console.log("user name is--",username)
}
// console.log ("user name is ",username)  //referenceerror:user name is not defined



//reinitialisation is posiblle
//re declaration is not possible





//-------------------


//usuing const


console.log('\n3. using const')
const gravity=9.8
console.log("value of gravity",gravity)


// gravity=10.8
// console.log("vale of gravity after re-intialisation",gravity)     //syntaxerror







//------------


//using nothing
course='python full stock'
console.log(course)


{
   var a=10
}

console.log(a)
var b=100
console






