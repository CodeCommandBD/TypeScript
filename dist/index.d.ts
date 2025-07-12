declare let userName: string;
declare let age: number;
declare let isStudent: boolean;
declare let hobbies: string[];
type UserId = string | number;
type User = {
    id: UserId;
    name: string;
    age: number;
    email?: string;
};
interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
}
declare function greetUser(user: User): string;
declare function calculateTotal(products: Product[]): number;
declare class Calculator {
    private result;
    add(value: number): void;
    subtract(value: number): void;
    getResult(): number;
    reset(): void;
}
declare function createArray<T>(length: number, value: T): T[];
declare const user: User;
declare const products: Product[];
declare const calc: Calculator;
declare const numberArray: number[];
declare const stringArray: string[];
