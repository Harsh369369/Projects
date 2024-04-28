const main = document.getElementById('body');
const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');
const cartTotal = document.getElementById('cart-total-display');
let productData;

loadData();
    


function loadData() {
    main.innerHTML = '';
        for(let i = 0; i<10; i++){
            let element = json.parse(localStorage.getItem(i+''));
            const item = document.createElement('div');
            item.setAttribute('class', 'item');
            item.innerHTML = (`
            <img src="${element.image}" alt="product image">
            <div>
                <p>${element.title}</p>
                <p>Category: ${element.category}</p>
                <p>Brand: ${element.brand}</p>
                <h5>Price: ${element.price}</h5>
                <button onclick="addToCart(element)">Remove</button>
            </div>`);
            main.append(item);
        }

    }


    function RemoveFromCart(element){
        let total = localStorage.getItem('total')-element.price || 0;
        localStorage.removeItem(json.parse(element));
        localStorage.setItem('total',total);
        cartTotal.textContent = `Cart Total Amount: ${localStorage.getItem('total')}`;
    }
        
