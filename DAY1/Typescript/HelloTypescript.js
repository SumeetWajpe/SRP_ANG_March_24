var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// function PrintBook(
//   author: string = "Unknown",
//   title: string = "Unknown",
// ): void {
//   console.log(author, title);
// }
// PrintBook();
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");
// Arrays
// let cars: string[] = ["BMW", "AUDI", "FERRARI"];
// OR
// let cars: Array<string> = new Array<string>("BMW", "AUDI", "FERRARI"); // Using Generics
// let firstCar = cars[0];
// let secondCar = cars[1];
// destructuring
// let cars: string[] = ["BMW", "AUDI", "FERRARI"];
// let [firstCar, , secondCar] = cars;
// console.log(secondCar);
// With Objects
// let player = { lname: "Alcaraz", isSeededOne: true, country: "Spain" };
// let lname: string = player.lname;
// let country: string = player.country;
// OR
// let { lname, country } = player;
// function PrintPlayer({ lname, country }) {
//   console.log(lname + " represents " + country);
// }
// PrintPlayer(player);
// console.log(player.lname);
// Spread Operator
var cars = ["BMW", "AUDI"];
var moreCars = ["TATA", "MAHINDRA"];
var allCars = __spreadArray(__spreadArray([], cars, true), moreCars, true);
console.log(allCars);
// Spread Operator with Objects
var person = { name: "Djokovic", country: "Spain" };
var player = __assign(__assign({}, person), { sport: "Tennis" });
