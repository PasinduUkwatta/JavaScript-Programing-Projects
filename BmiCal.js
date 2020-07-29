var mark ={
    nameMark :'mark',
    massMark:'50',
    heightMark :'1.8',
     BmiMark: function (){
        return (this.massMark/(this.heightMark*this.heightMark))
    }
}

var john ={
    nameJhon :'john',
    massJohn:'50',
    heightJohn :'1.8',
    BmiJohn :function (){
        return (this.massJohn/(this.heightJohn*this.heightJohn))
    }

}

var markBMI= mark.BmiMark()
console.log(mark)
console.log("Mark BMI :"+markBMI)
var johnBMI= john.BmiJohn()
console.log(john)
console.log("John BMI"+johnBMI)

if(markBMI>johnBMI){
    console.log(mark.nameMark+" "+'is higher BMI :'+markBMI  )
}else if (markBMI<johnBMI){
    console.log(john.nameJhon+" "+'is higher BMI :'+johnBMI  )
}else {
    console.log('both have same BMI')
}



