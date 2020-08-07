function calculator(num){
    if (num==0) {
        return function (constrain) {
            console.log(num*constrain)
        }
    } else if (num%2==1) {
        return function (constrain) {
            console.log(num+constrain)
        }
    }else if (num%2==0) {
        return function (constrain) {
            console.log(num-constrain)
        }
    }else{
        console.log(num)
    }
}

var oddNum =calculator(3)
var evenNum =calculator(4)
var zeroNum =calculator(0)
var negativeNum =calculator(-1)

oddNum(5)
evenNum(5)
zeroNum(5)
negativeNum(5)

