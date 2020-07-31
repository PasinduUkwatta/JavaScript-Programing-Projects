console.log(this)
//Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}
function calAge(year){
    console.log(2020-year)
    console.log(this)
}

calAge(1996)

var john ={
    name:'john',
    year:1996,
    calculateAge :function (){
        console.log(this)
        console.log(2020-this.year)

        /*
        function innerFucntion(){
            console.log(this)
        }
        innerFucntion()
        */
    }
}

john.calculateAge()


var mike ={
    name :'Mike',
    year :1990

}

mike.calculateAge=john.calculateAge
mike.calculateAge()