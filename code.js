var markMass =prompt('what is Mark Mass ?')


var johnMass =prompt('what is John Mass ?') 
var markHeight =prompt('what is Mark Height ?')
var johnHeight=prompt('what is John Height ?')

var johnBMI = johnMass/(johnHeight*johnHeight)

var markBMI =markMass/(markHeight*markHeight)

console.log('John BMI IS :'+johnBMI)
console.log('Mark BMI IS :'+markBMI)

var comapreBMI =johnBMI>markBMI

console.log("is john BMI is greter than Mark BMI :"+comapreBMI)



