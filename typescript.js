var sum = function (a, b) {
    return a + b;
};
var answer = sum(7, 5);
console.log(answer);
//tsc --init
//tsc typescript.ts --watch
//boolean type
var isCool = true;
//number
var age = 25;
//string
var eyeColur = "brown";
var favoriteQaute = "im not old ,im just " + age + " ";
//array
var pets = ["cat", "dog", "bird"];
var pets2 = ["lion", "dragon", "lizard"];
//object
var wizard = {
    a: "john",
    b: "smith",
    c: "student",
    d: "26"
};
//null and undefined
var nothing = undefined;
var nothiingNull = null;
//tuple
var busket;
busket = ["basketball", 5];
//enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
console.log(sizeName);
//any
var anything = "whatever";
anything = busket;
//void
var sing = function () {
    console.log("hi");
};
//never
var error = function () {
    throw Error("problem");
};
var fightRobotArmy = function (robots) {
    console.log("fight");
};
var fightRobotArmy2 = function (robots) {
    console.log("fight");
};
