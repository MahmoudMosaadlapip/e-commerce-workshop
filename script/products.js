let Menubtn2= document.querySelector(".menu-btn")
    let NavLinks2= document.querySelector(".nav-links")

    Menubtn2.addEventListener('click',()=>{
        NavLinks2.classList.toggle("shownav")
    })

    
    let leftbtn=document.querySelector(".left")
    let rightbtn=document.querySelector(".right")
    let cardcontainer=document.querySelector(".cardcontainer")
    let data;


    async function getproducts(){
        data = await fetch('https://fakestoreapi.com/products?limit=10')
        .then(resp=>resp.json())
        .then(resp=>resp)
        .catch(er=>console.log(er))


        repeatloop()

            rightbtn.addEventListener('click',()=>{
               let deleteitem = data.splice(0,1)
               data.push(...deleteitem)
                cardcontainer.innerHTML = ``
                repeatloop()
            })

            leftbtn.addEventListener('click',()=>{
                let lastitem=data.pop()
                data.splice(0,0,lastitem)
                cardcontainer.innerHTML = ``
                repeatloop()
                
            })
    }

    function repeatloop(){
        for(let x=0; x<4; x++)
            {
                cardcontainer.innerHTML += `
                    <div class="cardcontainer">
                    <div class="card">
                    <img src="${data[x].image}" alt="Tshirt">
                    <div>
                        <h1>${data[x].title}</h1>
                        <h5>${data[x].category}</h5>
                    </div>
                    <p>${data[x].rating.rate}Customer Reviews</p>
                    <h4>${data[x].price} $</h4>
                    </div>
                </div>
                `
            }
    }

    getproducts()

