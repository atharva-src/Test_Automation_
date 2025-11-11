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