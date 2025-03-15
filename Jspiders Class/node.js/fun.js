//! Example 1
// exports.addition = function(a,b){
//     return a + b;
// }
// exports.subtraction = function(a,b){
//     return a - b;
// }
// exports.multiplication = function(a,b){
//     return a * b;
// }
// exports.divison = function(a,b){
//     return a / b;
// }
//! Example 2
// exports.addition = function(a,b){
//     return a + b;
// }
// exports.subtraction = function(a,b){
//     return a - b;
// }
// exports.multiplication = function(a,b){
//     return a * b;
// }
// exports.divison = function(a,b){
//     return a / b;
// }

//! Example 3

// function addition(a,b){
//     return a + b;
// }
// function subtraction(a,b){
//     return a - b;
// }

// function multiplication(a,b){
//     return a * b;
// }

// function division(a,b){
//     return a / b;
// }
// module.exports = {addition,subtraction,multiplication,division}

//! Example 4

// function addition(a,b){
//     return a + b;
// }
// function subtraction(a,b){
//     return a - b;
// }
// function multiplication(a,b){
//     return a * b;
// }
// function division(a,b){
//     return a / b;
// }

// module.exports.addition = addition;
// module.exports.subtraction = subtraction;
// module.exports.multiplication = multiplication;
// module.exports.division = division;


// //! expample 5
// function framework(...frem){
//     return frem;
// }
// function library(...lib){
//     return lib;
// }

// module.exports.framework = framework
// module.exports.library = library

// function api(){
//     fetch('https://api.github.com/users').then((f)=>{
//         f.json().then((m)=>{
//             m.map((sharuk)=>{
//                 console.log(sharuk)
//             })
//         })
//     })
// }
// module.exports = {api}

let moh = (a)=>{
console.log(a)
}
// console.log(moh())
module.exports= {moh}