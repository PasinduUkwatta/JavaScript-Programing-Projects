//function expression
var whatDoYouDo = function (job,firstName){
    switch (job){
            case 'Teacher' :
            {
              return (firstName +' '+'is a teacher')
            }
            case 'Driver' :
            {
              return (firstName +' '+'is a driver')
            }
            case 'student' :
            {
              return (firstName +' '+'is a study')
            }
            default:
            {
                return 'please enter again'
            }
    }

}

console.log(whatDoYouDo('teacher','john'))
console.log(whatDoYouDo('student','amal'))
console.log(whatDoYouDo('Driver','kamal'))
console.log(whatDoYouDo('army','nimal'))