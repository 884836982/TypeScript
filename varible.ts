// var a = [1,2,3];
// function f() {
//     var message = "Hello, world!";
//     return message;
// }

// function f1() {
//     var a = 10;
//     return function g() {
//         var b = a + 1;
//         return b;
//     }
// }
// var g = f1();
// g();
// function f2() {
//     var a = 1;
//     a = 2;
//     var b = g();
//     a = 3;
//     return b;
//     function g() {
//         return a;
//     }
// }
// f2();
// function f3(shouldInitialize: boolean) {
//     if(shouldInitialize) {
//         var x = 10;
//     }
//     return x;
// }
// f3(true); //returns '10'
// f3(false); //returns 'undefined'


// function sumMatrix(matrix: number[][]){
//     var sum = 0;
//     for (var i = 0;i < matrix.length; i++){
//         var currentRow = matrix[i];
//         for (var i = 0; i < currentRow.length; i++) {
//             sum += currentRow[i];
//         }
//     }
//     return sum;
// }

// for (var i = 0; i < 10; i++) {
//     setTimeout(function() { console.log(i); }, 100 * i);
// }

//10个10
// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i);
// }
//0
//1
//2
//3
//4
//5
//6
//7
//8
//9

// let Hello = "hello";

// function f5(input: boolean){
//     let a = 100;
//     if (input) {
//         let b = a + 1;
//         return b;
//     }
//     return b;
// }
//varible.ts(79,12): error TS2304: Cannot find name 'b'.

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well."); //Oh well.
}
console.log(e);
//varible.ts(88,13): error TS2304: Cannot find name 'e'.
function foo() {
    // okay to capture 'a'
    return a;
}
// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
let a;
//varible.ts(1,5): error TS2300: Duplicate identifier 'a'.

function f(x) {
    let x = 100;
}

function g() {
    let x = 100;
    var x = 100;
}