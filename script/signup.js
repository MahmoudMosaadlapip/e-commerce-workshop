let error = document.querySelector(".errors")
let username = document.querySelector(".user")
let email = document.querySelector(".email")
let password = document.querySelector(".pass")
let cpassword = document.querySelector(".cpass")
let form = document.querySelector("form")


let data2 = {
    username,
    email,
    password
};



let users=[]


form.addEventListener('submit',(f)=>{
    f.preventDefault()

    if(password.value === cpassword.value){
        error.innerHTML=""
        data2.username=username.value
        data2.email=email.value
        data2.password=password.value

        let oldusers = JSON.parse(localStorage.getItem('users')) || []

        users = [...oldusers,data2]

        localStorage.setItem('users',JSON.stringify(users))
        
        window.location.href =('/Pages/login.html')
        
    }else{
        error.innerHTML="password does't match"
        error.style.color="red"

    }
})




