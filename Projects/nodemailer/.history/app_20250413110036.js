let http = require('http')
let path = require('path')
let fs = require('fs');
const { parse } = require('path');
let nodemailer = require('nodemailer')
let server = http.createServer((req,res)=>{
    if(req.method === 'POST'){
        Data(req, (email,pass)=>{
            console.log(email);
            console.log(pass);
        })
        res.end()
    }else{
         res.writeHead(200,{'content-type': 'text/html'})
         fs.createReadStream('./index.html',"utf-8").pipe(res)
    }
})

server.listen(5000,(err)=>{
    if(err) throw err
    console.log("http://localhost:5000")
})

function Data(request,callback){
    let form = 'application/x-www-form-urlencoded'
    if(request.headers['content-type'] === form){
        let body = "";
        request.on('data',chunk=>{
            body += chunk.toString()
        })
        request.on('end',()=>{
            let urlparse = new URLSearchParams(body)
            let email = urlparse.get("email")
            let password = urlparse.get("password")
            callback(email,password)
        let transport = nodemailer.createTransport({
            service : "gmail",
            auth:{
                user: "sharuk3668@gmail.com",
                pass: "dacjwteocwvbsdro"
            }
    })
        let mailOptions = {
            form: "sharuk3668@gmail.com",
            to: `${email}`,
            subject: "Thankyou for showing interest",
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Hello, ${email}</h1>
        <p>Thank you for showing interest in our website. We truly appreciate you taking the time to explore our website❤️❤️😁.</p>
        <p>Here is your password: <strong>${password}</strong></p>
        <b>Looking forward for your feedback in the comment section on LinkedIn</b>
        <p>Best regards,</p>
        <p><strong>Sharkbytes Team</strong></p>
    </div>
`

        }
        transport.sendMail(mailOptions,(error)=>{
            if(error) throw error
            console.log("Mail sent successfully")
        })
    })
}
else{
    callback(null)
}
}