let cartCount = 0;
const cartItems = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productName = productElement.querySelector('h3').textContent;
        const productPrice = productElement.querySelector('p').textContent;

        // Update cart
        cartCount++;
        cartItems.push({ name: productName, price: productPrice });
        document.querySelector('.cart span').textContent = `Cart (${cartCount})`;

        // Display cart items
        displayCartItems();
        alert(`${productName} added to cart!`);
    });
});

function displayCartItems() {
    const cartItemsDiv = document.querySelector('.cart-items');
    cartItemsDiv.innerHTML = '';

    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - ${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
    });
}

document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
});
