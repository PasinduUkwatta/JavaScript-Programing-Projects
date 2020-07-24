var johnScore = 100+120+100
var mikeScore = 100+120+100
var maryScore = 97+134+105

var avg_mike_score = mikeScore/3
var avg_jhon_score = johnScore/3
var avg_mary_score = maryScore/3

console.log('mike avarage score'+' '+avg_mike_score)
console.log('john avarage score'+' '+avg_jhon_score)
console.log('mary avarage score'+' '+avg_mary_score)

if(avg_jhon_score>avg_mike_score&&avg_jhon_score>avg_mary_score){
    console.log('john avarage is high :'+' '+avg_jhon_score)
}else if(avg_jhon_score<avg_mike_score&&avg_mary_score<mikeScore){
    console.log('mike avarage score is high :'+' '+avg_mike_score)
}else if(avg_jhon_score< avg_mary_score&&avg_mary_score>mikeScore){
    console.log('mary avarage score is high :'+' '+avg_mary_score)
}
else{
    console.log('someone have same avarage marks')
} 