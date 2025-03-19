document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault()      
    let username = document.getElementById('email').value
    let pwd = document.getElementById('password').value
    let gmail = window.localStorage.getItem('gmail')
    let passowrds = window.localStorage.getItem('password')
    if(username == "" || pwd ==""){
        alert("Bro smothing is empty😂😂")
    }
    else if(username !== gmail || pwd !== passowrds){
        alert("Bro data is not matching with the server😢😢")
    }
    else{
        alert("Logined sucessfully❤️❤️❤️")
        window.open("https://www.myntra.com/")
        window.location.reload()
        }

})                                      
document.getElementById('buttonhidden')
.addEventListener('click',()=>{
    let pwd = document.getElementById('password')
    if(pwd.value !=''){
        if(pwd.type === 'password'){
            pwd.type = 'text';
        }
        else{
            pwd.type = 'password'
        }
    }else{
        alert("please enter the password")
    }
})