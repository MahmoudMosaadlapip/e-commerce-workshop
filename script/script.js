let shopbtn = document.querySelector(".shop-btn")
    shopbtn.addEventListener('click',()=>{
        window.location.href =('./products.html')
    })
    let Menubtn= document.querySelector(".menu-btn")
    let NavLinks= document.querySelector(".nav-links")

    Menubtn.addEventListener('click',()=>{
        NavLinks.classList.toggle("shownav")
    })
    

let CartBtn=document.querySelector(".cart-btn")
    CartBtn.style="display: none"

window.addEventListener('scroll',()=>{
    if(window.scrollY >= 400){
    CartBtn.style="display: flex"
    }else{
        CartBtn.style="display: none"
    }
})

let arrowbtn=document.querySelector(".arrow")

arrowbtn.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:"smooth"})
})

let productcart = document.querySelector(".product-cart")
let Viewbtn = document.querySelector(".View-btn")
let moredata;
Viewbtn.addEventListener('click',()=>{
    showMore();
    Viewbtn.style="display:none"
})

async function showMore(){
    moredata = await fetch('https://fakestoreapi.com/products')
    .then(resp=>resp.json())
    .then(resp=>resp)
    .catch(er=>console.log(er))

    moredata.map((p)=>{
        productcart.innerHTML += `
        <div class="product-cart">
            <div class="sells">
                    <img src="${p.image}" alt="">
                    <div>
                        <h1>${p.title}</h1>
                        <h5>${p.category}</h5>
                    </div>
                    <p>${p.rating.rate}</p>
                    <h4>${p.price} $</h4>
                    <a class="showmore-btn" href="/Pages/singleproduct.html?id=${p.id}">Show More</a>
                </div>
                
        `
    })
    
}


let log = document.querySelector(".login")
let signup = document.querySelector(".btn-logo")


let loggedinusers= JSON.parse(localStorage.getItem('loggeduser')) || null
if(loggedinusers){
    
    log.style='display:none'
    signup.style='display:none'
    
    NavLinks.innerHTML += `

        <a href='#'>${loggedinusers.username}</a>
        <a href='#' class='logout'>Logout</a>

    `

    
    
}
else{
    NavLinks.innerHTML += ``
}


let logout = document.querySelector(".logout") || ''

    logout.addEventListener('click',(s)=>{
        
        localStorage.removeItem('loggeduser')
        window.location.href = '/Pages/Home.html'


        

       
        

    })




