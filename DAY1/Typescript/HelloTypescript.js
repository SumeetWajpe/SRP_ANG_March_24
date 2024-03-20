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
// function PrintBook(author: string, title?: string, noOfPages?: number): void {
//   console.log(author, title, noOfPages);
// }
// PrintBook("Dr. APJ Abdul Kalam", "", 200);
// Default Parameters
function PrintBook(author, title) {
    if (author === void 0) { author = "Unknown"; }
    if (title === void 0) { title = "Unknown"; }
    console.log(author, title);
}
PrintBook();
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
// Arrays
// let cars: string[] = ["BMW", "AUDI", "FERRARI"];
// OR
var cars = new Array(); // Using Generics
