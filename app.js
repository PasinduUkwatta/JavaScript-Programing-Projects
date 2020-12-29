var budjetController =(function (){
   var x=23
    var add =function(a){
       return x+a
    }

    return{
       publicTest :function(b){
          return (add(b))
       }
    }
})()

var UIController =(function(){

})()

var controller =(function(budjetCtrl,UICtrl){
   var z =budjetCtrl.publicTest(5)

   return{
      anotherPublic :function(){
         console.log(z)
      }
   }

})(budjetController,UIController)


