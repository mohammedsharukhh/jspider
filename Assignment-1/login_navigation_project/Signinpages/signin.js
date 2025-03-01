let form = document.getElementById("f_container");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email = document.getElementById('email').value
    console.log(email)
    let loginpassword = document.getElementById('pwd').value
    console.log(loginpassword)
    let username = localStorage.getItem('gmail')
    let password = localStorage.getItem('password')
    console.log(username,password)
    if(email == "" || loginpassword == ""){
      alert("Fields are mandatory😢😢")
    }
     else if(email == username && loginpassword == password){
      alert("logged Successfully😁😁")
      window.open("../Home_page/index.html")
    }
    else{
      alert("Incorrect Dtails😢😢")
    }
})

let pwdsharuk = document.getElementById("pwd");
let show_pwd = document.getElementById('show_pwd_img')
show_pwd.addEventListener("click",(e)=>{
    e.preventDefault()
    if(pwdsharuk.value != ""){
        if(pwdsharuk.type === "password"){
            pwdsharuk.type = "text"
            show_pwd.src = "./view (1).png"
        }else{
            pwdsharuk.type = "password"
            show_pwd.src = "./hide.png"
        }
    }else{
        alert('Please enter your password')
    }
});