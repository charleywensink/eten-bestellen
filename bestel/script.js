function addItem(name, price) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    let existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }

    //Save items
    localStorage.setItem("shoppingCart", JSON.stringify(cart));

    displayCart();
}

function displayCart() {
    // Load items
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    // Clear items
    document.getElementById("items").innerHTML = "";

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.textContent = `${item.name} - €${item.price} x ${item.quantity}`;
        document.getElementById("items").appendChild(li);
    }
}

function clearCart() {
    // Clear items in storage
    localStorage.removeItem("shoppingCart");

    displayCart();
}

displayCart();

// Code met JSON heb ik van youtube