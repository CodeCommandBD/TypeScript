"use strict";
// TypeScript Basic Examples
// 1. Basic Types
let userName = "Shanto";
let age = 25;
let isStudent = true;
let hobbies = ["coding", "reading", "gaming"];
// 4. Functions with Types
function greetUser(user) {
    return `Hello ${user.name}, you are ${user.age} years old!`;
}
function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
// 5. Classes
class Calculator {
    constructor() {
        this.result = 0;
    }
    add(value) {
        this.result += value;
    }
    subtract(value) {
        this.result -= value;
    }
    getResult() {
        return this.result;
    }
    reset() {
        this.result = 0;
    }
}
// 6. Generics
function createArray(length, value) {
    return Array(length).fill(value);
}
// Example usage
const user = {
    id: "user123",
    name: "Shanto Das",
    age: 25,
    email: "shanto@example.com"
};
const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mouse", price: 500, inStock: true },
    { id: 3, name: "Keyboard", price: 1500, inStock: false }
];
// Running examples
console.log("=== TypeScript Examples ===");
console.log(greetUser(user));
console.log(`Total price: ${calculateTotal(products)}`);
const calc = new Calculator();
calc.add(10);
calc.add(5);
calc.subtract(3);
console.log(`Calculator result: ${calc.getResult()}`);
const numberArray = createArray(5, 0);
const stringArray = createArray(3, "hello");
console.log("Number array:", numberArray);
console.log("String array:", stringArray);
console.log("=== Setup Complete! ===");
//# sourceMappingURL=index.js.map