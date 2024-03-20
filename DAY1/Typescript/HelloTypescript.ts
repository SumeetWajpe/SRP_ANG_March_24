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
// function PrintBook(author: string, title?: string, noOfPages?: number): void {

//   console.log(author, title, noOfPages);
// }

// PrintBook("Dr. APJ Abdul Kalam", "", 200);

// Default Parameters
function PrintBook(
  author: string = "Unknown",
  title: string = "Unknown",
): void {
  console.log(author, title);
}

PrintBook();
PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

// Arrays

// let cars: string[] = ["BMW", "AUDI", "FERRARI"];

// OR
let cars: Array<string> = new Array<string>(); // Using Generics
