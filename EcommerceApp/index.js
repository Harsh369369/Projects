const main = document.getElementById('body');
const sortSelect = document.getElementById('sort');
const filterSelect = document.getElementById('filter');
const cartTotal = document.getElementById('cart-total-display');
const addToCartBtn = document.getElementById('addToCart');
let productData;

fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products')
    .then(res => res.json())
    .then(data => {
        productData = data.data;
        console.log(data);
        loadData(productData);
    })  
    .catch(err => {
        console.log(err);
    });
    



    sortSelect.addEventListener('click', () => {
        let sortedData;
        console.log('selected');
        if(sortSelect.value === 'increasing'){
            sortedData = productData.sort((a,b) => a.price - b.price);
            loadData(sortedData);
        } else if (sortSelect.value === 'decreasing') {
            sortedData = productData.sort((a,b) => b.price - a.price);
            loadData(sortedData);
        }
    });

    filterSelect.addEventListener('click', () => {
        let filteredData;
        if(filterSelect.value != ''){
            filteredData = productData.filter((a) => a.category === filterSelect.value);
            console.log(filteredData);
            if(filteredData != ''){
                loadData(filteredData);
            }else {
                loadData('');
            }
        } else {
            loadData(productData);
        }
    });



function loadData(data) {
    main.innerHTML = '';
    data.forEach(element => {
        const item = document.createElement('div');
        item.setAttribute('class', 'item');
        item.innerHTML = (`
        <img src="${element.image}" alt="product image">
        <div>
            <p>${element.title}</p>
            <p>Category: ${element.category}</p>
            <p>Brand: ${element.brand}</p>
            <h5>Price: ${element.price}</h5>
            <button id='addToCart' onclick="addToCart(${element})">Add to Cart</button>
        </div>`);
        main.append(item);
        

    });
        
}

function addToCart(element){
    let noOFItems = localStorage.getItem('noOfItems') || 0;
    let total = localStorage.getItem('total')+element.price || 0;
    localStorage.setItem(noOFItems+'',json.stringify(element));
    localStorage.setItem('total',total);
    localStorage.setItem('noOfItems',noOFItems+1);
}
