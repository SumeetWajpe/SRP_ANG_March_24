// var str = "Hello Typescript !"; // Type Inference
var str; // Type Annotation
str = "Hello Typescript !";
//str = 100; // Error !
console.log(str);
var b;
var n;
var o;
var a;
a = 10;
a = "Hello";
a = true;
a = [];
a = {};
// functions
// function Add(x: number, y: number): number {
//   return x + y;
// }
// Add("Hello", "World !"); // Error !
// var result: number = Add(20, 30);
// Add();// Error ! Parameters are not optional
// Optional Parameters
function PrintBook(author, title, noOfPages) {
    console.log(author, title, noOfPages);
}
PrintBook("Dr. APJ Abdul Kalam", "", 200);
