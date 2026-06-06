const products = [
{
    id:1,
    name:"Laptop",
    price:50000,
    image:"https://via.placeholder.com/250"
},
{
    id:2,
    name:"Smartphone",
    price:20000,
    image:"https://via.placeholder.com/250"
},
{
    id:3,
    name:"Headphones",
    price:3000,
    image:"https://via.placeholder.com/250"
},
{
    id:4,
    name:"Smart Watch",
    price:5000,
    image:"https://via.placeholder.com/250"
}
];

let cart = [];

const productContainer = document.getElementById("products");

products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart(${product.id})">
            Add To Cart
        </button>
    `;

    productContainer.appendChild(card);
});

function addToCart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    updateCart();
}

function updateCart(){

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const total = document.getElementById("total");

    cartItems.innerHTML = "";

    let totalPrice = 0;

    cart.forEach(item => {

        totalPrice += item.price;

        const li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;

        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    total.textContent = totalPrice;
}

function checkout(){

    if(cart.length === 0){
        alert("Cart is Empty");
        return;
    }

    alert("Order Placed Successfully!");

    cart = [];
    updateCart();
}