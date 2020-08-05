//premeitive
var a = 23
var b =a 
a =46

console.log(a ,b)




//objects
var obj1 ={
    name: 'John',
    age :26
}

var obj2 = obj1
obj1.age =30

console.log(obj1.age)
console.log(obj2.age)

//Functions
var age = 24
var obj = { 
    name :'Pasindu',
    country :'Sri Lanka'
}

function change(a,b){
    a=30
    b.country ='India'
}

change(age,obj)

console.log(age)
console.log(obj)