function retirement(retirementAge){
    var a ='years left until retirenmnet'
    return function(yearOfBirth){
        var age =2020 -yearOfBirth
        console.log(retirementAge-age+a)
    }
}

var retirementUs = retirement(66)
retirementUs(1996)

retirement(57)(2000) 