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
    document.getElementById("totalPrice").innerHTML = "";
    document.getElementById("korting").innerHTML = "";

    let totalPrice = 0
    let priceAbove50 = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - €${item.price} x ${item.quantity}`;
        document.getElementById("items").appendChild(li);

        totalPrice += item.price * item.quantity;
    }
    // Checkt of de totalprice over 50 is, zo ja dan een 15% korting

    // Laat de prijs en prijs met korting zien
    document.getElementById("totalPrice").innerHTML = `Totaal: €${totalPrice.toFixed(2)}`;
    document.getElementById("korting").innerHTML = `Prijs met korting: €${priceAbove50.toFixed(2)}`;
}

function clearCart() {
    // Clear items in storage
    localStorage.removeItem("shoppingCart");

    displayCart();
}


// Code met JSON heb ik van youtube