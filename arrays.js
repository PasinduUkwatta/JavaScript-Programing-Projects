var names =['amal','kamal','nimal']

console.log(names)

var marks =[10,2,0,30,3,0,2]

console.log(marks)
console.log(marks.length)

names[3]='sunil'

console.log(names)

//we can  use lenght method to add the elements to the last index
marks[marks.length]= 100
console.log(marks)

var john = ['john','Smith',1990,'teacher',false]

john.push('blue')

//this will add the element to the 0 index
john.unshift('mr')

console.log(john)

//this will remove the last element of hte array
john.pop()
console.log(john)

console.log(john.indexOf(1996))

//we can  check about the availabilty of the array
//if it is not available ,then we get -1
var isDesigner =john.indexOf('designer')===-1 ?'john is not a designer':'john is a designer'

console.log(isDesigner)