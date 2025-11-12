/* 

what is Asynchronous in JS ? 
    :- Async in JS is the capability of the language to handle long running tasks without blocking the execution 
      of the main program thread . In-Short , JS is a single threaded language, which means that JS can 
      handle only 1 command at a time , if there were more than 1 command, JS would keep the UI unresponsive. 


      Async & Await :- is a Synctactic sugar over promises to handle Async operations, Async returns a promise 
                       while await is used to pause the execution until the promise is resolved

    promises :- Promise is an eventual completion of an asynchronous operation and its resulting
                value. It has 3 states, pending, fulfilled, rejected 

*/ 

async function hello(){
    return `Hello There , nice meeting you`
}

async function sayHello(){
    let world = await hello()
    console.log(world)
}

sayHello() 


async function sq(n){
    return n * n
}

async function squareRoot(n){
    let root = await sq(n)
    console.log(root)
}

squareRoot(255) 


let pro = new Promise((resolve, reject)=>{
    let success = true
    if(success === true){
        resolve("The Operation was a Success :) ")
    }
    else{
        reject("the Op was not a Success :( ")
    }
}).then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error)
}) 


async function vehicle(){
    return ` The vehicle is an expensive one , its name is BMW 7Series`
}

async function car(){
    let car = await vehicle()
    console.log(car) 

}
car() 


// No, async functions aren't always implemented exactly like the example you provided.
// While your example is a standard and perfectly functional demonstration of how to use async/await for a simple sequential operation, 
// the core concepts of async and await allow for much more flexibility and control over asynchronous flow.

// The difference lies in what the function returns and how you handle concurrent operations.

// Here are the different ways async functions can be implemented:

// 1. Standard (Sequential) Implementation (Like Yours)
// Your current implementation is the standard way to handle one asynchronous task immediately followed by another.

// JavaScript :-

// async function vehicle(){
//     // The return value of an async function is always wrapped in a Promise.
//     return `The vehicle is an expensive one, its name is BMW 7Series`;
// }

// async function car(){
//     // 'await' pauses execution until the Promise returned by vehicle() resolves.
//     let car = await vehicle(); 
//     console.log(car); 
// }
// car();
// Purpose: Ensures that the line following await (i.e., console.log(car)) only executes after the vehicle() Promise is resolved.
//  This is used when the second step depends on the result of the first.

// 2. Returning a Promise Directly
// Instead of returning a simple value, a
// n async function often returns the result of another Promise-based operation (like fetch, axios,
// or a database query).

// JavaScript :-

// async function fetchData(url) {
//     // This is the common real-world use case.
//     // 'await' pauses for the network request to finish.
//     const response = await fetch(url);
//     const data = await response.json(); // Awaiting the JSON parsing, which is also a Promise
//     return data;
// }

// // Usage:
// async function processData() {
//     try {
//         const userData = await fetchData('some-api-url');
//         console.log("Data loaded:", userData);
//     } catch (error) {
//         console.error("Failed to fetch data:", error);
//     }
// }
// Purpose: Handles I/O operations (like network or file access) where a Promise is natively returned by the underlying API.

// 3. Handling Concurrent/Parallel Operations
// If you have multiple asynchronous tasks that do not depend on each other, you should run them concurrently to save time. 
// You use Promise.all() for this, often paired with await.

// JavaScript :-

// async function fetchUser() { /* ... returns a Promise ... */ }
// async function fetchPosts() { /* ... returns a Promise ... */ }

// async function loadAllData() {
//     // The functions are executed in parallel (at the same time).
//     // The 'await' pauses only until *all* promises in the array resolve.
//     const [user, posts] = await Promise.all([
//         fetchUser(),
//         fetchPosts()
//     ]);

//     console.log(`Loaded user ${user.id} and ${posts.length} posts.`);
// }
// Purpose: Significantly improves performance by running independent tasks concurrently rather than waiting for one to finish before starting the next.

// 4. async Arrow Functions
// You can define async functions using arrow function syntax as well, which is very common in modern JavaScript.

// JavaScript :-

// const vehicle = async () => {
//     return 'The vehicle is an expensive one.';
// };

// const car = async () => {
//     let result = await vehicle();
//     console.log(result);
// };

// car();
// Purpose: Modern, concise syntax often preferred for callback functions, event handlers, or simple functional components.

// Key Takeaway :-
// The crucial takeaway is that the async keyword simply tells JavaScript to make the function return a Promise, 
// and the await keyword can only be used inside an async function 
// to pause execution until a Promise resolves. Beyond those two rules, 
// you have the flexibility to implement any control flow you need 
// (sequential, parallel, error handling with try...catch).