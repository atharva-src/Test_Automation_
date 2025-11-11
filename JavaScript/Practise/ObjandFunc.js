// Creating Objects, working around , ways to create , types of ways to create objs

const { join } = require("path")


// what is an Object :- An Object is an instance of a class 

/*
there are 4 ways to create an Object :-  
 
1 :- Object Literals
2 :- ES6 Classes 
3 :- constructor function 
4 :- Obj.create()

 */

//1 :-
let user = {
    name : "james dean",
    id : 1,
    email : "jamesd@gmail.com"
}
console.log(user)

//2 :-
class person {
    constructor( name, age, ethnicity ){
        this.name = name,
        this.age = age,
        this.ethnicity = ethnicity
    }

    getDetails (){
        console.log(`The person with name ${this.name} is of ${this.ethnicity} ethnicity`)
    }
}

const people = new person("Sam brielle", 28, "American")
console.log(people)
people.getDetails()

//3 :-
function vehicles(make, model, company){
    this.make = make, 
    this.model = model,
    this.company = company
} 


const car = new vehicles(2025, "Koinegsegg agera", "Koinegsegg")
console.log(car) 


//4 :-  
//Object.creeate()

const personPrototype =  {
    isHuman  : true
}; 

const John = Object.create(personPrototype,{
    name : {
        value : "John kennedy",
        writable : false,
        enumerable : true
    },
    age : {
        get(){
            return 29
        },
        set(NewAge){
            console.log(`Setting age to ${NewAge}`)
        },
        enumerable : true
    }
})

console.log(John.name)
console.log(John.age)


const carPrototype = {
    isUsable : true
}

const Mustang = Object.create(carPrototype, {
    name : {
        value : "Mustang GT ",
        writable : false,
        enumerable : true
    },
    specifications : {
        value : {
        model  : 2025,
        color : "Metallic Black",
        HorsePower : "795 BHP",
        Speed : "350 KmpH"
        }  
    },
    insurance : {
      value :{
        value : "2,25,000",
        validity : "5 years",
        enumerable : true
      }
    }
})

console.log(Mustang.name)
console.log(Mustang.specifications)
console.log(Mustang.insurance)  

// -----------------------------------------------------------------------------------------------///

/* 
Functions and its types :-  


types :- 

1 :- FUnc declaration 
2 :- Func expression
3 :- Arrow function 
4 :- IIFE [Immediately Invoked Function Expression]

 */ 


//1 :- function Declaration

function airPlane (){
    return `The Flight is very high in the sky right now`
}

console.log("----Function type 1-----")
console.log(airPlane())

// 2

const Gera = function builder(){
    return `THe name GERA in Real Estate Industry is so Hyped right now`
}

console.log(Gera())

// 3 

const sum = (a ,b) => (a + b)
console.log(sum(4,9)) 

const difference = (a,b) => (a -b)
console.log(difference(999,765))

const name = (firstName, lastName) => (firstName ,lastName)
console.log(name("penny","barber" ))  

/*
the output was only "Barber", not with the first name, reason is as follows :- 

When you use parentheses () to define the body of an arrow function without curly braces {}, JavaScript treats the content inside as a single expression to be implicitly returned.

🛑 The Problem: The Comma Operator
In your function:

JavaScript

const name = (firstName, lastName) => (firstName, lastName)
The expression being evaluated and returned is: (firstName, lastName).

This is using the comma operator (not to be confused with the comma used to separate function arguments). The comma operator evaluates each of its operands (expressions) from left to right and returns the value of the last operand.

It evaluates firstName (which is "penny").

It evaluates lastName (which is "barber").

It returns the result of the last evaluation, which is "barber".

That's why only the last name is printed.

✅ How to Fix It
If your goal is to return both names (or any set of values) from a concise arrow function, you must return them wrapped in a data structure, such as an array or an object.

1. Return an Array (Most Common Fix)
If you return an array, the function returns a single array containing both strings.

JavaScript

const nameArray = (firstName, lastName) => [firstName, lastName];

console.log(nameArray("penny", "barber"));
// Output: [ 'penny', 'barber' ]
*/


function printEvenNum(start,end){
    for(let i =start; i<=end; i++){
        if(i %2 ===0){
            console.log(i)
        }
    }
}
console.log("---Print Even----")
printEvenNum(1,10)


let evenNumb = function printEven(start,end){
    for(let i= start; i<=end; i++){
        if( i%2 === 0){
            console.log(i)
        }
    }
}
console.log("---even Num---")
evenNumb(2,20)


 //palindrome program 

//  let palindrome = function isPalindrome(str){
//     let reversed = str.split("").reverse().join('')
//     return reversed === str
//  }

//  console.log(palindrome("hello")) 

 const pal = (Str) => ( reversed = Str.split("").reverse().join(''), reversed === Str)
 console.log("--This is arrow function of Palindrome----")
 console.log(pal("malayalam")) 


 //fibonaci :- where each number is a sum of previous 2 number
 // prints first 10 Fibonacci numbers
function fibonacci(n){
    let a = 0, b = 1 
    for(let i = 0; i<n; i++){
        console.log(a);
        [a, b] = [b, a + b]
    }
}
console.log("---FIBONACCI---")
fibonacci(90)