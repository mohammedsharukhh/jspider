const http = require('http');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    handleFormData(req, (email, password) => {
      if (email && password) {
        sendEmail(email, password);
      }
    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Email sent successfully!");
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle form data from POST
function handleFormData(request, callback) {
  const formType = 'application/x-www-form-urlencoded';

  if (request.headers['content-type']?.includes(formType)) {
    let body = '';
    request.on('data', chunk => (body += chunk.toString()));
    request.on('end', () => {
      const params = new URLSearchParams(body);
      const email = params.get('email');
      const password = params.get('password');
      callback(email, password);
    });
  } else {
    callback(null, null);
  }
}

// Nodemailer function
function sendEmail(email, password) {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sharuk3668@gmail.com',
      pass: 'dacjwteocwvbsdro' // Consider storing this securely
    }
  });

  const mailOptions = {
    from: 'sharuk3668@gmail.com',
    to: email,
    subject: 'Thank you for showing interest',
    html: 
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h1 style="color: #4CAF50;">Hello, ${email}</h1>
        <p>Thank you for showing interest in our website. We truly appreciate you taking the time to explore it!</p>
        <p>Here is your password: <strong>${password}</strong></p>
        <b>Looking forward to your feedback in the comment section on LinkedIn</b>
        <p>Best regards,</p>
        <p><strong>Sharkbytes Team</strong></p>
      </div>
    
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Email failed:", error);
    } else {
      console.log("Mail sent successfully");
    }
  });
}