let form = document.getElementById("f_container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
 let login = document.getElementById("username").value;
  console.log(username);
  let logipwd = document.getElementById("password").value;
  console.log(password);
  if(login == '' || logipwd == ''){
    alert("Fields are mandatory😢😢")
  }else{
    alert("logged Successfully😁😁")
    window.location.reload()
  }
});


let pwdsharuk = document.getElementById("password");
let hidden_elemt = document.getElementById('show_pwd_img')
hidden_elemt.addEventListener("click",(e)=>{
    e.preventDefault()
    if(pwdsharuk.value != ""){
        if(pwdsharuk.type === "password"){
            pwdsharuk.type = "text"
            hidden_elemt.src = "./view (1).png"
        }else{
            pwdsharuk.type = "password"
            hidden_elemt.src = "./hide.png"
        }
    }else{
        alert('Please enter your password')
    }
});





