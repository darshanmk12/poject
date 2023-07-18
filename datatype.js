//data type

//.string

let insti= 'pyspider'
console.log("institude is",insti)

let uname= "darshan"
console.log("institude is",uname)


let month=`july`
console.log(`current month ${month}`)




//.2number

let num=123
console.log(num)
console.log(`type of num: ${typeof num}`)


let decNum=123.45
console.log(decNum)

let numCapacity=1234567890123456789
console.log(numCapacity)



//3.bigint

let largeNum = BigInt('1234567890123467')
console.log(largeNum)
console.log(`type of num: ${typeof largeNum}`)


let largeNum2=1234567689012345678n
console.log(largeNum2)



//.4boolean

let a=10
let b=20
console.log('a==b',a==b)
console.log('a!=b',a!=b)
console.log("type of a==b",typeof (a==b))
console.log("type of a==b",typeof (a!=b))


//.5undefined

let age
console.log("age id:",age)
console.log("type of age:",typeof age)
a=25
console.log("type of a:",typeof a)
b="darshan"
console.log("type of b:",typeof b)




//.6null

let salary=null
console.log("salary",salary)
console.log("type of a:",typeof salary)

let sal=1200
console.log("salary",sal)
console.log("type of a:",typeof sal)



//.7 object

let car = {
    Model : 2020,
    Color : 'dark',
    Brand : 'tata'
    

}
    


console.log(car)


console.log('brand name',car['Brand'])




//add new value
car['fuel']='diesel/petro'
console.log("upadte car",car)



console.log()

console.table()