
// ################### primitive data type 
// number string bool -----non mutable/ non-modify

// ---------- string 


// let studentName:string = 'shanto'

// studentName = 'das'

// console.log(studentName);

// ------------number

// let age:number = 100

// age = 210

// console.log(age);

// ------------ boolean

// let pass:boolean = true
// pass = false

// console.log(pass);




// ################## non primitive data type
// array  object function  ----- meutable/modify




// -------- arrays and tuples

// array

// let score:number[] = [20,52,4,33,44,77]

// console.log(score[0]);

// let score: Array<number> = [20,52,4,33,44,77]

// console.log(score[0]);

// let names: string[] = ['shanto', 'olori','dami']

// console.log(names[2]);


// -------------tuples

// let student: [string,string,number,boolean] = ['aton', 'rola', 21, true]

// console.log(student[0]);




// ################# any type 


// let randomvalue:any = 'ahnd'

// randomvalue = 52;

// randomvalue = true

// console.log(randomvalue);


// ############## unknown type

// let value:unknown = 'more'

// if(typeof value === 'string'){
//     console.log(value.toUpperCase());
// }


// ########## void

// function mass() :void {
//     console.log('void massage');  
// }

// function data(nam:string): string{
//    return `hello ${nam}`
// }
// console.log(data('more'));


// ########## null and undefine

// let not:null = null

// console.log(not);

// let unde:undefined;

// console.log(unde);

// ########### type inference

// let city = 'dhaka'


// ###################### student profile project
// ###################### student profile project
// ###################### student profile project




// type Student = {
//     name:string,
//     age:number,
//     address:string,
//     isEnroll:boolean,
//     course: string[],
//     scorcs: number[],
//     info: [string,number,boolean]
// }

// const student:Student = {
//     name:'shanto',
//     age: 25,
//     address:'dhaka',
//     isEnroll: true,
//     course:['js','react','tailwind'],
//     scorcs:[80,46,78,95],
//     info:['morad',24, true]
// }

// const num2:Student ={
//     name:'mita',
//     age:25,
//     address:'mirpur',
//     course:['react','vue'],
//     isEnroll: true,
//     scorcs:[54,21,64,74],
//     info:['mo',2,true]
// }


// function displayStu(student:Student):void{
//     console.log(`Name:${student.name}`);
//     console.log(`Name:${student.age}`);
//     console.log(`Name:${student.isEnroll}`);
// }

// displayStu(student)



// ################### Function in typescript 


// function great(fname: string, lname:string, title?: string ): string{
//     return `hello, ${fname} ${lname} he is a ${title}`
// }

// console.log(great('shanto','kumar'));
// console.log(great('shanto','kumar','more'));


// ############## function type signature #### optional


// let data: (name: string) => string;

// data = function(name: string): string{
//     return `more ${name}`
// }

//################ defualt value when i pass no argument 

// function wellcome(name: string = 'guest' ): string{
//     return `hello, ${name}`
// }

// console.log(wellcome());
// console.log(wellcome('shanto'));


// ################### Function return na korle void use kora hoy 
// function more(msg: string):void {
//     console.log('log:', msg);
// }
// more('helo or')

// ###############  error er jonno use kora hoy

// function throwError(): never{
//     throw new Error('something went wrong')
// }


//  ############ arrow function 



// const add = (a:number, b:number) : number => {
//     return a + b
// }

// console.log(add(5,5));


// #################### calculator project 

// function add(a:number, b:number) : number {
//     return a+b
// }

// const subtract = (a:number, b:number) :number =>{
//     return a - b
// } 
// const multi = (a:number, b:number) :number =>{
//     return a * b
// } 

// function divid(a:number,b:number):number {
//      if(b === 0){
//         throw new Error('give number gater then 0')
//     }
//     return a / b
// }

// function power (base: number, exponent: number) : number{
//     return Math.pow(base,exponent)
// }

// function calculate (oparation: string, a: number, b: number =1):number {
//     switch(oparation){
//         case'+': return add(a,b);
//         case'-': return subtract(a,b);
//         case'*': return multi(a,b);
//         case"/": return divid(a,b);
//         case"^": return power(a,b);
//         default: throw new Error('opartion invalid')

//     }
// }


// console.log("add: ", calculate('%',5,5) );

//  ################### Object Type

// const student = {
//     name: 'alice',
//     age: 21
// }
// function printUser(user:{name:string, age: number}) : void{
//     console.log(`my name is ${user.name} and my age is ${user.age}`)
// }

// printUser(student)


//###################### Type Aliases
// const data ={
//     name:'shant',
//     age: 25
// }

// type User = {
//     name: string;
//     age: number;
// }

// function printer(user: User) {
//     console.log(user.name);
//     console.log(user.age);
    
// }
// printer(data)

//################################## Blog post Project

// define alias

// type blog = {
//     title: string;
//     content: string;
//     author: string;
//     date?: string;
//     public: boolean;

// }

// create a blog post 


// const Post: blog = {
//     title:'more',
//     content:'lorem lorem lorem lorem',
//     author:'shanto',
//     public:true,
//     date: '2025'
// }
// const Post2: blog = {
//     title:'more',
//     content:'lorem lorem lorem lorem',
//     author:'shanto',
//     public:true,
//     date: ''
// }

// create a function

// const myBlog = (post: blog) =>{
//    console.log(post.title);
//    console.log(post.author);
//    console.log(post.content);
//    console.log(post.public);
//    if(post.date){
//     console.log(post.date);
    
//    }
// }

// myBlog(Post)

// myBlog(Post2)


// ################### type alias vs interface

// ################## type alias

// type User = {
//     name: string;
//     age: number;
//     email: string;
// }

// ############### define interface

// interface user2 {
//     name:string;
//     age: number;
//     email: string;
// }



// #####################  marge the interface of a person 

// interface Person{
//     name: string;
// }
// interface Person{
//     age: number
// }

// const person:Person = {name:'shanto', age:25}

// console.log(person);


// 1. public Api er jonno interface use kora hoy    
// 2. simple object er jonno both use 
// 3. union and intersection types: use type not use interface
// 4. primitive or function er jonno use type 
// 5. flexiblility: interface (extends) and type (union and intersection)



// ######################### Extending interface

// step 1: create a interface of an naimal

// interface Animal {
//     name:string;
// }

// step 2: create an interface of dog that extend the animal interface

// interface Dog extends Animal{
//     breed: string;
// }

// step 3: create 

// const myDog: Dog = {name:'tom',breed:'black and white'}

// console.log(myDog);


// ############################## project User profile system


// user interface 

// step 1: create user interface

// interface User {
//     id: number;
//     name: string;
//     email: string;

// }

// step 2: create an author interface

// interface Author extends User{
//     bio:string;
//     post: string[]
// }

// step 3: statas 

// type statas = 'active' | 'inactive' | 'banned'


// const biodata:Author = {
//     name:'shanto',
//     id:1,
//     email:'shan@gmai.com',
//     bio:'i am a developer',
//     post:['more','dorle']
// }

// const accountStatas:statas = 'active' 


// console.log(biodata.name);
// console.log(accountStatas);


// ########################## union types 

// let value: string | number;

// type User =  string | number


// function getData(id:User){
//     console.log(id);
    
// }
// getData('one')

// ########################### intersection type (type join)

// type user = {
//     id: string;
//     name: string;
// }

// type Admin = {
//     isAdmin: Boolean;
// }

// type adminUser = user & Admin

// const admin:adminUser = {
//     id: '5',
//     name: 'more',
//     isAdmin: true
// }

// console.log(admin.id);

// ############################ literal types

// type Action = 'start' | 'stop' | 'pause' | 'reset'


// function handle(action: Action) : void  {
//     console.log(action);
    
// }
// handle('start')
// handle('reset')


//  ############################# type narrowing

// function mod(value: string | number){
//     if(typeof value === 'string'){
//         console.log(value.toUpperCase());
        
//     }else{
//         console.log(value.toFixed(2));
        
//     }
// }

// mod(500.15456521)


// ####################### handle form input type narrowing

// function processInput(input: string | number) {
//     if(typeof input === 'number'){
//         console.log(input * 2);
//     }else{
//         console.log(input.trim());
//     }
// }

// processInput('   more   ')
// processInput(52)

// #####################  typeof type guard


// function display(value: string | number){
//     if(typeof value === "string"){
//         console.log(value.toUpperCase());
        
//     }else{
//         console.log(value * 2);
//     }
// }

// display(5)
// display('more')


// ################ in Operator type guard

// type Car = {
//     drive: () => void
// }
// type Boat = {
//     sail: () => void
// }

// function move(vehicle: Car | Boat){
//     if('drive' in vehicle){
//        vehicle.drive()        
//     }else{
//         vehicle.sail()
//     }
// }

// const car: Car = {
//     drive: () => {
//         console.log('car is driving....');
//     }
// } 

// move(car)


//  ###################### custom type guard


// type  Fish = {
//     swim: () => void;
// }

// type Bird={
//     fly: () => void
// }

// function isFish(pet: Fish | Bird) : pet is Fish {
//     return (pet as Fish).swim !== undefined
// }

// function move(pet: Fish | Bird) {
//     if(isFish(pet)){
//         pet.swim()
//     }else{
//         pet.fly()
//     }
// }

// const myFish:Fish = {
//     swim: () => console.log('my fish.......')
    
// }
// move(myFish)


// ########################### oop clss

// define class 

// class person {
//     name: string;
//     age: number;
//     constructor(name:string, age:number){
//         this.name = name;
//         this.age = age
//     }
//     nill() {
//         console.log('helo',this.name , this.age);
//     }
// }


// // create object using person clss

//     const user = new person('shanto',25)
//     user.nill()

//     const user2 = new person('kumar',20)
//     user2.nill()



// ############################ modifiers (public private protected)


// public : access from anywhere

//  private: only asscess from class

// protected: only asscess from class and subClass



// creat a bank clss 

// class BankAccount {
//    public owner: string;
//    private balance: number;
//    protected AccountType: string;
//    constructor(name: string, balance: number){
//     this.owner = name;
//     this.balance = balance;
//     this.AccountType = "savings"
//    }

//    public showBalnce(){
//     console.log(this.balance);
    
//    }

// }





// const user = new BankAccount('shanto',25000)
// console.log(user.owner);

// user.showBalnce()

// ###################################### inheritance 


// class Animal  {
//     constructor(public name:string){
//     }
//     move(){
//         console.log(this.name);    
//     }
// }

// // Child Class or subClass
// class Dog extends Animal{

//     bark (){
//         console.log('woof');
//     }
// }

// const myDog = new Dog('tomy')
// myDog.move()
// myDog.bark()


// ################## implements keyword (for interface add)

// interface Driver {
//     start: ()=>void;
//     stop: ()=>void;
// }

// class car implements Driver{
//     start(){
//         console.log('car is starting.....');
//     }
//     stop(){
//         console.log('car is stop.....');
//     }
// }

// const myCar = new car()
// myCar.start()
