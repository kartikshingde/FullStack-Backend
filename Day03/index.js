const fs=require("fs")


let a=10;
let b="Hello ji!"

console.log(b)

function sum(a,b){
    return a+b;
}

fs.readFile("./data.json","utf-8", (err,res)=>{
    console.log(res)
})

setTimeout(()=>{
    console.log("Hello timeout !")
},3000)

console.log(a)
console.log(sum(3,8))






// setTimeout(() => {
//   console.log("Hello!");
// }, 3000);

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3)); 




// libuv is a multi-platform C library that provides
//support for asynchronous i/o based on event loop