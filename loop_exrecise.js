var john ={
    fullName :'John Smith',
    bills :[124,48,268,180,42],
    calcTips:function () {
        this.tips =[]
        this.finalValues =[]

        for(var i =0;i<this.bills.length;i++){
            var persentage;
            var bill =this.bills[i]
            if(bill<50){
                persentage=0.2

            }
            else if (bill>=50 && bill<200){
                persentage =0.15

            }else{
                persentage=0.1

            }
            this.tips[i]=bill*persentage
            this.finalValues[i]=bill+bill*persentage
        }
    }
}



var mark ={
    fullName :'Mark Miller',
    bills :[77,475,110,45],
    calcTips:function () {
        this.tips =[]
        this.finalValues =[]

        for(var i =0;i<this.bills.length;i++){
            var persentage;
            var bill =this.bills[i]
            if(bill<100){
                persentage=0.2

            }
            else if (bill>=100 && bill<300){
                persentage =0.1

            }else{
                persentage=0.25

            }
            this.tips[i]=bill*persentage
            this.finalValues[i]=bill+bill*persentage
        }
    }
}

function calcAvarage(tips){
    var sum =0
    for(var i=0;i<tips.length;i++){
        sum =sum +tips[i]

    }
    return sum/tips.length
}


john.calcTips()
mark.calcTips()
console.log(john,mark)
john.avarage=calcAvarage(john.tips)
mark.avarage=calcAvarage(mark.tips)

console.log(john.avarage)
console.log(mark.avarage)

if (john.avarage>mark.avarage){
    console.log('john gives more tips')
}else if (john.avarage<mark.avarage){
    console.log('mark gives more tips')
}else{
    console.log('both give same ')
}