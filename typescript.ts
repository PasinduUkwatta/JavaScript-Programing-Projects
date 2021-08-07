const sum =(a:number,b:number)=> {
    return a+b
}


const answer =sum(7,5)

console.log(answer)

//tsc --init

//tsc typescript.ts --watch

//boolean type

let isCool :boolean =true

//number

let age :number = 25


//string
let eyeColur :string ="brown"
let favoriteQaute : string =`im not old ,im just ${age} `


//array

let pets :string[] =["cat","dog","bird"]
let pets2 :Array<string> =["lion","dragon","lizard"]

//object
let wizard:object ={
    a:"john",
    b:"smith",
    c:"student",
    d:"26"
}


//null and undefined

let nothing :undefined =undefined
let nothiingNull :null =null

//tuple
let busket:[string,number]

busket=["basketball",5]

//enum
enum Size {Small=1,Medium =2,Large=3}

let sizeName :number =Size.Small

console.log(sizeName)

//any

let anything :any ="whatever"

anything=busket


//void

let sing =() :void=>{
    console.log("hi")
}

//never
let error =() :never=>{
    throw Error("problem")

}


//interface
interface RobotArmy {
    count :number,
    type:string,
    magic?:string
}

let fightRobotArmy =(robots:RobotArmy)=>{
    console.log("fight")
}

let fightRobotArmy2 =(robots: { count:number, type:string,magic:string})=>{
    console.log("fight")
}

//Type assetrion
interface CatArmy {
    count :number,
    type:string,
    magic:string
}

let dog ={} as CatArmy

dog.count



//function
let fightRobotArmy3 =(robots:{count:number,type:string,magic:string}) :void=>{
    console.log("Fight")
}


//class
class Animal{
    sing:string;
    constructor(sound:string) {
        this.sing=sound;
    }

    greet(){
        return `Hello ${this.sing}`
    }
}

let lion =new Animal('Roar')

lion.sing

//union
let confused :string | number |boolean =true

