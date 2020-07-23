var firstName = 'john'
var age = 15

age>=18 ? console.log('he can drink beer'):console.log('he can drink juice')

var drink = age>=18? 'beer' :'juice'

console.log(drink)

if (age>=18){
    var drink ='beer'
}else{
    var drink = 'juice'
}

console.log(drink)


var job = 'teacher'

switch (job){
    case 'teacher':{
        console.log('teaches in school');break;}
    case 'student':{
        console.log('learn in school');break;}

    case 'cleaner':{
        console.log('clean in school');break;}
    case 'driver':{
        console.log('drive in school');break;}
    default:{
        console.log('do nothing')}
}






















