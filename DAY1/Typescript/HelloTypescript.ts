// var str = "Hello Typescript !"; // Type Inference
var str: string; // Type Annotation
str = "Hello Typescript !";
//str = 100; // Error !
console.log(str);

var b: boolean;
var n: number;
var o: object;

var a: any;
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
function PrintBook(author: string, title?: string, noOfPages?: number): void {
  console.log(author, title, noOfPages);
}

PrintBook("Dr. APJ Abdul Kalam","",200);
