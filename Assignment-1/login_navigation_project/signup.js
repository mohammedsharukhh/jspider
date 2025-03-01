let data = document.getElementById('form')
console.log(data)

data.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username = document.getElementById('fname').value
console.log(username)
    let gmail = document.getElementById('email').value
    let password = document.getElementById('pwd').value
    let repassword = document.getElementById('rpwd').value
    if(username == '' || password == '' || repassword == '' || gmail == ''){
        alert("Please enter the details")
    }
    else if(password != repassword){
        alert('Password is not matching')
    }
    else{
        window.open('')
        window.location.reload() 
        localStorage.setItem('gmail',gmail);
        localStorage.setItem('password',password);
    }
})

