"use strict"
/*
let hasDriversLisence = false
const passTest = true

if (passTest) {
    hasDriversLisence = true
}

if (hasDriversLisence) {
    console.log("I can drive😎🤗😛")
}
*/
//const interface = "audio"
//const private = "324"


/*
function logger() {
    console.log("My name is Pasindu")
}

//calling/running/invoking
logger()
logger()
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges)
    const juice = `juice with ${apples} apples and ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
const orangeJuice = fruitProcessor(0, 3)
const mixJuice = fruitProcessor(3, 2)

console.log(appleJuice)
console.log(orangeJuice)
console.log(mixJuice)

const num = Number("23")

console.log(num)
console.log(typeof (num))

*/

/*
function calcAge1(birthYear) {
    return 2020 - birthYear
}

const age1 = calcAge1(1996)

const calcAge2 = function (birthYear) {
    return 2020 - birthYear
}

const age2 = calcAge2(1996)

console.log(age1, age2)

*/

// const calcAge2 = function (birthYear) {
//     return 2020 - birthYear
// }


/*
const calcAge3 = birthYear => 2020 - birthYear

const age3 = calcAge3(1996)

console.log(age3)


const yearsUntilRetire = (birthYear, firstName) => {
    const age = 2020 - birthYear
    const years = 65 - age
    return `my name is ${firstName} , i have ${years} left to retire`
}

const age4 = yearsUntilRetire(1996, "pasindu")
console.log(age4)

const age5 = yearsUntilRetire(1990, "thiwanka")
console.log(age5)

*/

/*
function cutFruitPieces(fruit) {
    return `cut into ${fruit * 4}`
}

function fruitProcessor(apples, oranges) {

    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    console.log(apples, oranges)
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice
}


console.log(fruitProcessor(2, 3))
*/

/*
const calcAge = function (birthYear) {
    return 2020 - birthYear
}


const yearsUntilRetire = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const years = 65 - age

    if (years > 0) {
        return `my name is ${firstName} , i have ${years} left to retire`
    }
    else {
        return `my name is ${firstName} , i have already retire`
    }
}


console.log(yearsUntilRetire(1996, "pasindu"))
console.log(yearsUntilRetire(1946, "thiwanka"))
*/

/*

const friend1 = "michel"
const friend2 = "jane"
const friend3 = "philip"
const friend4 = "mark"

const friends = ["michel", "jane", "philip", "mark"]
console.log(friends)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends[3])

const years = new Array(1991, 1984, 2020, 2001)
console.log(years)

console.log(years.length)
console.log(years[years.length - 1])

friends[2] = "thiwanka"

console.log(friends)

const firstName = "Pasindu"
const lastName = "Thiwnaka"
const age = 2020 - 1996
const degree = "IT"
const pasindu = [firstName, lastName, age, degree, friends]

console.log(pasindu)

const calcAge = function (birthYear) {
    return 2020 - birthYear
}

const years1 = [1990, 1967, 2013, 2015]

const age1 = calcAge(years1[0])
const age2 = calcAge(years1[1])
const age3 = calcAge(years1[years1.length - 1])

console.log(age1)
console.log(age2)
console.log(age3)


const ages = [calcAge(years1[0]), calcAge(years1[1]), calcAge(years1[2]), calcAge(years1[3])]

console.log(ages)
*/

/*

const friends = ["michel", "jane", "philip", "mark"]

friends.push("pasindu")

console.log(friends)


const newLength = friends.push("thiwanka")

console.log(friends)
console.log(newLength)

friends.unshift("John")

console.log(friends)

const popped = friends.pop()

console.log(friends)
console.log(popped)

friends.pop()

console.log(friends)

friends.shift()

console.log(friends)

console.log(friends.indexOf("jane"))
console.log(friends.indexOf("mark"))
console.log(friends.indexOf("bob"))

console.log(friends.includes("cena"))
console.log(friends.includes("jane"))

if (friends.includes("jane")) {
    console.log("you have a friend")
} else {
    console.log("you does not have friend")
}

*/

/*
const pasindu = {
    "firstName": "pasindu",
    "lastName": "thiwanka",
    "age": 24,
    "birthYear": 2020 - 24,
    "job": "student",
    "friends": ["michel", "jane", "philip", "mark"]

}

console.log(pasindu)

console.log(pasindu.lastName)
console.log(pasindu["lastName"])

const nameKey = "Name"

console.log(pasindu["first" + nameKey])
console.log(pasindu["last" + nameKey])


const interestedIn = prompt("what is your name ? choose your option")




pasindu.location = "Sri Lanka"

pasindu["twitter"] = "@pasindu96"


if (pasindu[interestedIn]) {
    console.log(pasindu[interestedIn])
}
else {
    console.log("Not Available")
}

console.log(`${pasindu.firstName} has ${pasindu.friends.length}  and  his best friend is ${pasindu.friends[0]}`)

*/

/*
const pasindu = {
    "firstName": "pasindu",
    "lastName": "thiwanka",
    "birthYear": 1996,
    "job": "student",
    "friends": ["michel", "jane", "philip", "mark"],
    "hasDriverLisence": true,

    information: function () {
        return (`${this.firstName} is ${(2020 - this.birthYear)} years old .He is a ${this.job}.He have ${this.friends.length} friends`)
    },

    // calcAge: function (birthYear) {
    //     return 2020 - birthYear
    // }

    // calcAge: function () {
    //     return 2020 - this.birthYear
    // }

    calcAge: function () {
        this.age = 2020 - this.birthYear
        return this.age
    }

}

console.log(pasindu.calcAge())
// console.log(pasindu["calcAge"](1996))


console.log(`${pasindu.firstName} is ${pasindu.age} years old .He is a ${pasindu.job}.He have ${pasindu.friends.length} friends`)


const details = pasindu.information()

console.log(details)

*/

/*
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting the weights reps : ${i}  🏋️‍♂️🏋️‍♀️`)
}


const pasindu = [
    "pasindu",
    24,
    true,
    ["michel", "jane", "philip", "mark"]
]

const friends = ["michel", "jane", "philip", "mark"]
const types = []
const types1 = []



for (let i = 0; i <= friends.length - 1; i++) {
    console.log(friends[i], typeof (friends[i]))
}


for (let i = 0; i <= pasindu.length - 1; i++) {
    console.log(pasindu[i], typeof (pasindu[i]))

    //filling the types array
    types[i] = typeof (pasindu[i])
    types1.push(typeof (pasindu[i]))

    console.log(types)
    console.log(types1)
}


const years = [1991, 2020, 2002, 1978, 2000, 1996]
let ages1 = []
for (let i = 0; i <= years.length - 1; i++) {
    ages1.push(2020 - years[i])
    console.log(ages1)

}

for (let i = 0; i <= pasindu.length - 1; i++) {
    if (typeof (pasindu[i] !== "Number")) continue;
    console.log("-----ONLY STRINGS-----")
    console.log(pasindu[i], typeof (pasindu[i]))


}

*/

/*
const pasindu = [
    "pasindu",
    "thiwanka",
    24,
    true,
    ["michel", "jane", "philip", "mark"]
]

for (let i = pasindu.length - 1; i >= 0; i--) {
    console.log(i, pasindu[i])
}


for (let execrsice = 1; execrsice <= 3; execrsice++) {
    console.log(`STARTING THE EXERCISE ${execrsice} 😋😎`)
    for (let rep = 1; rep <= 10; rep++) {
        console.log(`${execrsice * rep}  exersice ${execrsice}🏋️‍♂️🏋️‍♀️ : rep  ${rep}🤗😉`)
    }
    console.log("")
}

*/


/*

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting the weights reps : ${i}  🏋️‍♂️🏋️‍♀️`)
}

let count = 1
while (count <= 10) {
    console.log(count)
    count++
}


let dice = Math.trunc(Math.random() * 6) + 1
console.log(dice)

while (dice !== 6) {
    console.log(`you rolled ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if (dice === 6) {
        console.log("Loop stopped")
    }

}


*/

















































































