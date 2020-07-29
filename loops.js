for(var i = 0;i<=10;i++){
    console.log(i*2)
}

var john = ['john','Smith',1990,'teacher',false,67]
//we can  loop through the array
for (var i =0;i<john.length;i++){
    console.log(john[i])
}
var i =0
while(i<john.length){
    console.log(john[i])
    i++
}

//continue and break

for (var i =0;i<john.length;i++){
    if (typeof john[i]=='string'){
        console.log(john[i])
    }
    console.log('passed')
    continue
}

var john = ['john','Smith',1990,'teacher',false,67]
//we can  loop through the array