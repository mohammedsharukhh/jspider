//! example1
// let add = require("./add")
// console.log(add.addition(10,20))
// console.log(add.subtraction(10,20))
// console.log(add.multiplication(10,20))
// console.log(add.divison(10,20))

//! example2
// let fun = require("./add")
// console.log(`The addtion of two number is : `,fun.addition(10,20))
// console.log(`The subtraction of two number is : `,fun.subtraction(10,20))
// console.log(`The multiplication of two number is : `,fun.multiplication(10,20))
// console.log(`The division of two number is : `,fun.divison(10,20))

//! Example 3
// let fun = require('./add')
// console.log(fun.addition(100,200));

//! Example 4
// let fun = require('./add')
// console.log(fun)

//! Example 5

// let {addition,subtraction,multiplication,division} = require('./add')
// console.log(addition(10,20),subtraction(10,20),multiplication(10,20),division(10,20))

//! Example 6

// let {
//     framework,library
// } = require('./add')
// console.log(framework("express.js","Angalur","vanilla"));
// console.log(library("react.js","d3.js","next.js"));

// let mohameed = require('./fun');
// console.log(mohameed.moh(10))
// console.log(fun.api())


//! OS module

// let os = require('os')
// console.log(operating_system);
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.machine());
// console.log(os.version());
// console.log(os.release());
// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.userInfo());
// console.log(os.freemem());


//! path module 
// let path = require('path')
// console.log(path)

//& path.basename()
// let result = path.basename('c/users/admin/mohammedsharukms.text','text')
// let result2 = path.basename('c/users/admin/mohammedsharukms.text','.text')
// let result3 = path.basename('c/users/admin/mohammedsharukms.text','.js')
// console.log(result,result2,result3)

//* path.dirname()

// let result = path.dirname("c/users/admin/mohammed/sharuk")
// console.log(result)
// let result1 = path.dirname("c/users/admin/jspiders.js/sharuk/mohammed/sharuk.js")
// console.log(result1)

//~ path.extname
// let ext =
// path.extname('c/users/admin/sharuk/mohammed.js')
// console.log(ext)

// let ext = [
//     'c/users/admin/shruk.js',
//     'c/users/admin/shruk.html',
//     'c/users/admin/shruk.js',
//     'c/users/admin/shruk.html',
//     'c/users/admin/shruk.js'
// ]
// ext.map((f)=>{
//     if(path.extname(f) === '.js')
//     console.log(path.extname(f)
// )})

//! normalization
// let result = 
// path.normalize('c/users/admin/website///./sharuk')
// console.log(result)


//! format

// let result = require('path')
// console.log(result)

// let pathformat = path.format({
//     dir: "user/sharuk",
//     root: 'c/users',
//     base: 'sharuk.txt'
// })
// console.log(pathformat)

// let pathformat1 = path.format({
//     base: "user/sharuk",
//     ext: 'c/users',
//     name: 'sharuk.txt'
// })
// console.log(pathformat1)


//! asserts

// let assert = require('assert')
// console.log(assert)

// let sharuk = [10,20,30,40,50]
// let sharuk1 = [10,20,30,40,50]

// assert.equal(sharuk,sharuk1,"not equal") //~ checks both identifiers and the value
// assert.notEqual(sharuk,sharuk1,"not equal") //~ checks both identifiers and the value
// assert.strictEqual(sharuk,sharuk1,"not equal") //~ checks both identifiers and the value
// assert.deepEqual(sharuk,sharuk1,"not equal")//~ deep equal check the value only
// assert.deepStrictEqual(sharuk,sharuk1,"not equal")//~ deep equal check the value only
// assert.notDeepStrictEqual(sharuk,sharuk1,"not equal")//~ deep equal check the value only
// assert.notStrictEqual(sharuk,sharuk1,"not equal") //~checks both identifiers and the value


// const { error } = require('console');
// let path = require('path')
// // console.log(path)
// let arrya = 
// [
// path.extname("c/users/admin/sharuk.js"),
// path.extname("c/users/admin/sharuk.html"),
// path.extname("c/users/admin/sharuk.js"),
// path.extname("c/users/admin/sharuk.html"),
// path.extname("c/users/admin/sharuk.js"),
// ]
// arrya.map((f)=>{
//     if(arrya == ".html"){
//         console.log(error)
//     }
//     else{
//         console.log(f)
//     }
// })

//! url module


// let url = require('url')
// // console.log(url)

// let myurl = new URL('https://chatgpt.com/')

// let {
//     href,origin,protocol,username,password,host,hostname,port,pathnamesearch,searchParams,hash} = myurl
//     console.log(protocol)
//~ url module object methods
// console.log(myurl.toJSON())
// console.log(myurl.toString())


//! file System (fs)

const { isUtf8 } = require('buffer')
let fs = require('fs')
// console.log(fs)

//~ create file(Synchronus)
// fs.writeFileSync("sharuk.js","I am MERN Stacck Developer")

//~ creating the file in (asynchronus way)

// fs.writeFile("sharuk.txt","I am sharuk😂😂😂",(error)=>{
//     if(error) throw error;
//     console.log("File created Successfully")
// })

//~ reading the file using (Synchronus)
// let result = 
// fs.readFileSync("sharuk.js","utf-8")
// console.log(result)

//~ reading the file using (ASynchronus)

// let result = 
// fs.readFile("sharuk.txt","utf-8",(error,res)=>{
//     if (error)  throw error;
//     console.log("Files as successfully readed",res)
// })

//~ update the file using (Synchronus)
// fs.writeFileSync("sharuk.js","I am MERN  Developer")

//~ updating the file in (asynchronus way)

// fs.writeFile("sharuk.txt","I am sharuk😘😘",(error)=>{
//     if(error) throw error;
//     console.log("File created Successfully")
// })

//~ delete the file using (Synchronus)
// fs.unlinkSync("sharuk.js")

//~ delete the file in (asynchronus way)

fs.unlink("sharuk.txt",(error)=>{
    if(error) throw error;
    console.log("File deleted Successfully")
})

