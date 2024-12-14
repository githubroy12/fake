const menuItems = [
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 7 },
    { id: 3, name: 'Pasta', price: 8 }
];

const cart = [];

// Render menu items
const menuList = document.getElementById('menu-items');
menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.onclick = () => addToCart(item);
    li.appendChild(button);
    menuList.appendChild(li);
});

// Add item to cart
function addToCart(item) {
    cart.push(item);
    renderCart();
}

// Render cart items
function renderCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
}

// Smooth scroll to sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}