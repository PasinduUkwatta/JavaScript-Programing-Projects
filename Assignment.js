"use strict"

/*
const calcAvarage = (avarage) => {
    return avarage / 3

}

function checkWinner(avgDolphins, avgKolas) {
    if ((avgDolphins > avgKolas) && (avgDolphins >= avgKolas * 2)) {
        console.log(`dolphins wins🐬 ${avgDolphins} vs . ${avgKolas}`)
    }

    if ((avgDolphins < avgKolas) && (avgKolas >= avgDolphins * 2)) {
        console.log(`kolas wins🐨 ${avgKolas} vs . ${avgDolphins}`)
    }
    else {
        console.log("No winner")
    }
}


const dolphinMarks1 = 44 + 23 + 71
const dolphinMarks2 = 85 + 54 + 41
const kolasMarks1 = 65 + 54 + 49
const kolasMarks2 = 23 + 34 + 27

console.log(calcAvarage(dolphinMarks1))
console.log(calcAvarage(dolphinMarks2))

console.log(calcAvarage(kolasMarks1))
console.log(calcAvarage(kolasMarks2))

const choice1 = checkWinner(calcAvarage(dolphinMarks1), calcAvarage(kolasMarks1))
const choice2 = checkWinner(calcAvarage(dolphinMarks2), calcAvarage(kolasMarks2))
checkWinner(5, 20)

*/

/*
function calcTip(billValue) {
    if (50 <= billValue <= 300) {
        return billValue * 0.15

    }
    else {
        return billValue * 0.2
    }
}


console.log(calcTip(100))

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

console.log(tips)


const total = [bills[0] + calcTip(bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])]

console.log(total)

*/

/*
const mark = {
    "weight": "78",
    "height": "1.69",

    calcBMI: function () {
        const BMI = (this.weight / (this.height * this.height))

        console.log(BMI)
        return BMI
    }

}

const john = {
    "weight": "92",
    "height": "1.95",

    calcBMI: function () {
        const BMI = this.weight / (this.height * this.height)
        console.log(BMI)
        return BMI
    }

}

const markBMI = mark.calcBMI()
const johnBMI = john.calcBMI()

console.log(markBMI)
console.log(johnBMI)

if (markBMI > johnBMI) {
    console.log(`mark BMI ${markBMI} is higher than john BMI ${johnBMI}`)
}
if (markBMI < johnBMI) {
    console.log(`mark BMI ${markBMI} is lower than john BMI ${johnBMI}`)
}

*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


const tips = []
const totals = []


function calcTip(billValue) {
    if ((50 <= billValue) && (billValue <= 300)) {
        return billValue * 0.15

    }
    else {
        return billValue * 0.2
    }
}
console.log(calcTip(bills[0]))

for (let i = 0; i <= bills.length - 1; i++) {
    tips.push(calcTip(bills[i]))
    totals.push((bills[i] + tips[i]))

}

console.log(tips)
console.log(totals)


function calcAvarage(arr) {
    let sum = 0
    let avarageBills = 0
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i]
        avarageBills = sum / (arr.length)

    }
    console.log(sum)
    console.log(avarageBills)
}
calcAvarage(bills)
calcAvarage(totals)
calcAvarage(tips)

*/
























































