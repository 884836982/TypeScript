function greeter(person) {
    return "Hello," + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
//定义变量
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// let name: string = `Gene`;
var age = 37;
var sentence = "Hello, my name is " + name + ". \nI'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
var list1 = [1, 2, 3];
var x;
x = ['hello', 10];
// x = [10, 'hello'];//Error
console.log(x[0].substr(1));
// console.log(x[1].substr(1));
// x[3] = 'world';// OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString());//OK, 'string' 和 'number' 都有 toString
// x[6] = true;//Error, 布尔不是(string | number)类型
// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
