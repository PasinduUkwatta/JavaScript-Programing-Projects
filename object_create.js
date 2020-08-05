var personProto ={
    calculateAge : function () {
        console.log(2020-this.yearOfBirth)
    }
}

var john = Object.create(personProto)
john.name ='john'
john.age =1996
john.job ='teacher'


var jane = Object.create(personProto,{
    name :{value :'Jane'},
    yearOfBirth:{value:1990},
    job:{value:'designer'}
}) 