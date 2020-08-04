var john ={
    name:'John',
    yearOfBirth:1996,
    job :'teacher'
}

//function constructor starts with captial letters
var Person = function (name,yearOfBirth,job){
    console.log(this)
    this.name =name
    this.yearOfBirth= yearOfBirth
    this.job = job
    
}

Person.prototype.calculateAge=function(){
    console.log(2020-this.yearOfBirth)
}

Person.prototype.nationality ='Amarica'

var john =new Person('John',1996,'teacher')
var jane =new Person('Jane',1998,'student')
var mark =new Person('Mark',1988,'retired')
var smith =new Person('Smith',1976,'soilder')


john.calculateAge()
jane.calculateAge()
mark.calculateAge()
smith.calculateAge()



console.log(john.nationality)
console.log(jane.nationality)
console.log(mark.nationality)
console.log(smith.nationality)

