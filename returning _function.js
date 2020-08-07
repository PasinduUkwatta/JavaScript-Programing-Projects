function interviewQuestions(job){
    if (job==='designer') {
        return function(name){
            console.log(name+ ', can you expalain about ux design')
        }
    }else if (job='teacher'){
        return function (name) {
            console.log(name+' , can you tell about subjects you teach')
        }
    }else{
        return function (name){
            console.log(name+' , hello what do you do ')
        }
    }
}


var teacherQuestion = interviewQuestions('teacher')
var designerQuestion = interviewQuestions('designer')
var otherQuestion = interviewQuestions('other')

teacherQuestion('John')
designerQuestion('Smith')
otherQuestion('Mark')

interviewQuestions('teacher')('Roy')