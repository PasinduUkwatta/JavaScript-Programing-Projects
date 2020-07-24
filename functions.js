
function add_two(num1,num2){
    return num1 + num2
}

console.log(add_two(20,30))

function ageCalculator(birthday){
    return 2020 -birthday
}

console.log(ageCalculator(1996))

function retirenmentCalculator(birthYear,firstName){
    var age =ageCalculator(birthYear)
    var retirenment = 65 -age
    if(retirenment<0){
        console.log(firstName+' is already retired' )
    }else{
        console.log(firstName+' retire in '+retirenment+' '+' years')
    }
    

}
retirenmentCalculator(1996,'pasindu')
retirenmentCalculator(1946,'amal')
retirenmentCalculator(1986,'kamal')
retirenmentCalculator(1926,'kamal')

