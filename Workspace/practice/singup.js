document.getElementById('button').addEventListener('click',(e)=>{
    e.preventDefault()
    let gmail = document.getElementById('email').value
    let password = document.getElementById('password').value
    let re_password = document.getElementById('re_password').value
    console.log(gmail);
    console.log(password);
    console.log(re_password);
    if(gmail == "" || password == "" || re_password == ""){
        alert("Details are empty😢😢😒")
    }
    else if(password !== re_password){
        alert("passowrds are not matching😢😢")
    }
    else{
        alert("logedin successfully🤞🤞😁")
        window.localStorage.setItem('gmail',gmail)
        window.localStorage.setItem('password',password)
        window.open('./singin.html')
        window.location.reload()
    }
})