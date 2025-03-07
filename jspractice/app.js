//& 5 types output methods 
// console.log("hii")
// document.write("hii")
// alert("hii")
// confirm("hii")
// prompt("hii")

//* prompt

// let num1 = Number(prompt("Enter number 1 value"))
// let num2 = parseInt(prompt("Enter number 2 value"))

// function sharuk(a,b){
//     console.log(a + b);
// }
// sharuk(num1,num2)

//& strings

// console.log("hii")
// console.log(`hii`)
// console.log('hii')
// let a = String("hii");
// console.log(a)
// let b = new String("bye")
// console.log(b.valueOf())

//& array 

// let a = [10,20,30,40,50]
// console.log(a)
// let b = Array.of(10,20,30,40,50)
// console.log(b)
// let c = new Array(10,20,30,40,50)
// console.log(c)
// let result = (a[0] = "hii");
// console.log(result);
// console.log(a);

// console.log(typeof(delete a[0])); 
// console.log(a)

//* String Metthods
let sharuk = "iamadeveloper"
// let sharuk1 = "MERN"
// document.write(sharuk.length)
// document.write(sharuk.at(-1))
// document.write(sharuk.charAt(10))
// document.write(sharuk.charCodeAt(1))
// document.write(sharuk.slice(-4,-1))
// document.write(sharuk.substring(16,0))
// console.log(sharuk.trim())
// console.log(sharuk.trimStart())
// document.write(sharuk.trimEnd())
// console.log(sharuk.split())
// console.log(sharuk.indexOf('d'))
// console.log(sharuk.lastIndexOf('d'))
// console.log(sharuk.replaceAll("e","a"))
// console.log(sharuk.replace("e","a"))
// console.log(sharuk.repeat(100))
// console.log(sharuk.concat(sharuk1))
// console.log(sharuk.startsWith("i"))
// console.log(sharuk.endsWith("r"))
// console.log(sharuk.includes(" "))
// console.log(sharuk.toUpperCase());
// console.log(sharuk.toLowerCase());

//& array methodd

// let  array1 = ["mohammed ", "sharuk", "ms"]
// let  array = [10,20,30,40,50]

// let result = array.at(1)
// console.log(result)
// console.log(array)
// console.log(array.push(10))
// console.log(array.pop())
// console.log(array.unshift(20))
// console.log(array.shift(20))
// console.log(array.reverse())
// console.log(array.flat(22))
// let result = array.sort((a,b)=>{
//    return b - a;
// })
// console.log(result)
// let result1  = array.map((f)=>{
//   return f > 10;
// })
// console.log(array);
// console.log(result1);

// let result  = array.filter((f)=>{
//   return f > 10;
// })
// console.log(array);
// console.log(result);

// let result = array.find((f)=>{
//   return f > 10;
// })
// console.log(result);

// let result = array.findIndex((f)=>{
//   return f > 10;
// })
// console.log(result);


// console.log(array);
// array.forEach((m)=>{
//  console.log(m)
// })
// console.log(array);

// let result = array.reduce((a , b)=>{
//   return a + b;
// })
// console.log(result)

// let result = array.includes(10)
// console.log(result)

// let result = array.slice(0,2)
// console.log(result)
// console.log(array);

// let result = array.splice(0,3,"hii","hii")
// console.log(result)
// console.log(array);

//& type casting

// console.log( 2 + Number("2"));
// console.log( 2 - "2");


//& data types

//* two types of data type
//! mutable or primitive data type // immutable or non prmitive data types


//~ non primtive // immutable data types
// String
// Boolean
// BigInt
// Number
// Symbol
// undefined
// null
// NaN

//~primtive // mutable data types
// function
// array
// object


// let a = "sharuk"
// let result = a[0] = "hii"
// console.log(result)
// console.log(a);

// let array = ["sharuk"]
// let result = array[0] = "hii"
// console.log(result)
// console.log(array);


// console.log(typeof(Boolean()))
// console.log(typeof(Symbol()))
// console.log(typeof(null))
// console.log(typeof(NaN))

// console.log(typeof(typeof(typeof(typeof(2+2)))))

// ! functions 

// ~ anonymous function

// function(){
//     console.log("sharuk")
// }
// ()

//! name function
// function yesh(){
//     console.log("sharuk")
// }
// yesh()


//*  function with expression
// let a = function(){
//     return "sharuk"
// }
// console.log(a)


//*  IIFE
// let a = (function(){
//     console.log("sharuk")
// })()

//^ HOF

// function mohmmed(a,b,callback){
//     console.log(callback(a,b))
// }mohmmed(10,20,function(x,y){
//     return  x + y;
// })


// callback
// function mohmmed(a,b,callback){
//     console.log(callback(a,b))

// }mohmmed(10,20,function(x,y){
//     return  x + y;
// })

// // ~arrow function

// let a = (a) => {
//     return  sh = 10;}
//     console.log(a());


// function add(a, callback) {
//     return callback(a + 10, false)
// }
// function sub(a, callback) {
//     return callback(a - 10, false)
// }
// function mul(a, callback) {
//     return callback(a + 10, false)
// }
// function div(a, callback) {
//     return callback(a + 10, false)
// }
// add(10,(y,error) => {
//     if (!error) {
//         console.log("the addition of two number is", )
//     }
//     sub(10, (x, error) => {
//         if (!error) {
//          
// 
// 
//    console.log("the sub of two number is", x)
//         }
//         mul(10, (x, error) => {
//             if (!error) {
//                 console.log("the mult of two number is", x)
//             }
//             div(10, (x, error) => {
//                 if (!error) {
//                     console.log("the div of two number is", x)
//                 }
//             })
//         })
//     })
// })


//~ promises

// let pp = new Promise((resolved,rejected)=>{
//     resolved("i am resolved")
//     resolved("i am rejected")
// })
// console.log(pp)


//* promise chaining
// let pp = new Promise((resolved)=>{
//     resolved(10)
// })
// pp.then((f)=>{     
//     console.log(f)
// return (f * 10)
// })
// .then((f)=>{
//     console.log(f)
//     return (f * 100)
// })
// .then((f)=>{
//     console.log(f)
// })



// let pp = new Promise((res,rej)=>{
// res("hii")
//     rej("bye")
//  })

//  let pp1 = new Promise((res,rej)=>{
//     res("hii")
//     rej("bye")
//  })

//  let pp2 = new Promise((res,rej)=>{
//     res("hii")
//     rej("bye")
//  })

//  let pp3 = new Promise((res,rej)=>{
//     res("hii")
//     rej("bye")
//  })

//  let pp4 = new Promise((res,rej)=>{
//     res("hii")
//     rej("bye")
//  })

// let array =[pp,pp1,pp2,pp3,pp4]
// let result= Promise.race(array).then((f)=>{
//     console.log(f);
// })
// .catch((error)=>{
//     console.log(error)
// })

// console.log(result)





//! async and await //

let button = document.getElementById('button')
button.addEventListener("click", () =>{
    let data = fetch('https://dummyjson.com/products')
    data.then((f) => {
        let a = f.json()
        a.then((f) => {
            console.log(f);
            f.products.map((m) => {
                console.log(m);
                let a = document.getElementById('data')
                a.innerHTML += `
        <h1>${m.title}</h1>
        <img src='${m.images}' height="200px" width="200px">
        `
            })
        })
    })
})


















