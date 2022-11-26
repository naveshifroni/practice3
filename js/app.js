const productUL = document.getElementById('product-list');
const btnSave = document.getElementById('save-product');
const inputTitle = document.getElementById('input-title');
const url ='http://localhost:3000/products'


btnSave.addEventListener('click', () => {
    const title = inputTitle.value
    const product = { title }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(json => {
            //alert(json)
            productUL.innerHTML = ''
            fetchProducts()
        }).catch(e => {
            alert(e)
        })
})

const fetchProducts = () => {
    fetch(url, { method: "GET" })
        .then(res => res.json())
        .then(products => {
            products.forEach(m => {
                const li = document.createElement('li')
                li.id = m.id
                li.classList.add('list-group-item')
                li.innerText = m.title
                productUL.appendChild(li)
            })
        }).catch(e => {
            alert("Error" + e)
        })
}

// upload a json item to the server:

//initial load:
fetchProducts()





