let form = document.querySelector("form")
let email = document.querySelector(".email")
let pass = document.querySelector(".pass")
let error = document.querySelector(".error")


let users = JSON.parse(localStorage.getItem('users')) || []


form.addEventListener('submit',(f)=>{
    f.preventDefault()

    let emailvalue = email.value
    let passwordvalue = pass.value

    let findusers = users.find((u)=>{
        if(u.email === emailvalue){
            return u
        }
    })

    if(!findusers){
        error.innerHTML= 'user not found'
    }
    else{
        if(findusers.password === passwordvalue){
            localStorage.setItem('loggeduser',JSON.stringify(findusers))
            window.location.href=('/Pages/Home.html')

        }
        else{
            error.innerHTML='Wrong Password'
        }
    }







     
})
