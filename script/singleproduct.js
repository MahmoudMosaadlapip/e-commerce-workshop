


let productID = window.location.href.split('id=')[1]


let productCont=document.querySelector(".singleproduct-container")

async function getproducts(){
    let loadData = await fetch(`https://fakestoreapi.com/products/${productID}`)
    .then((resp)=>resp.json())
    .catch(er=>console.log(er))


    productCont.innerHTML = `
        <div class="pic">
            <img src="${loadData.image}" alt="sora">
        </div>

        <div class="info">
            <h1>${loadData.title}</h1>
            <p>${loadData.description}</p>
            <h3>category: ${loadData.category}</h3>
            <h4>price: ${loadData.price} $</h4>
        </div>
    `

}


getproducts()


