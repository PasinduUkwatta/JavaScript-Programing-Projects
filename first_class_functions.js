var years =[1996,2003,1998,1987,1974]

function arrayCal(arr,func){
    var arrResult =[]
    for(var i=0;i<arr.length;i++){
        arrResult.push(func(arr[i]))
    }

    return arrResult
}

function calculateAge(el){
    return 2020 -el
}

function isFullAge(el){
    return el>=18
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9 -(0.67*el))
    }else{
    return -1
}
    }
    

var ages =arrayCal(years,calculateAge)
console.log(ages)

var fullAges = arrayCal(ages,isFullAge)
console.log(fullAges)

var heartRate = arrayCal(ages,maxHeartRate)

console.log(heartRate)