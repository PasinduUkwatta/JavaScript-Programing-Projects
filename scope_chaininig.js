var a ='hello'
first()

function first() {
    var b ='hey '
    second()

    function second() {
        var c ='hi'
        third()
    }
} 

function third() {
    var d ='John'
    console.log(a+d)
}