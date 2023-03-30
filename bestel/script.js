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

function removeItem(name, price) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

    let existingItemIndex = cart.findIndex(cartItem => cartItem.name === name);
    if (cart[existingItemIndex].quantity > 0 ) {
        cart[existingItemIndex].quantity -= 1;
    } else {
        return
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
    let kortingPrijs = 0;

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - €${item.price} x ${item.quantity}`;
        document.getElementById("items").appendChild(li);

        totalPrice += item.price * item.quantity;
    }
    // Checkt of de totalprice over 50 is, zo ja dan een 15% korting
    if (totalPrice > 50) {
        kortingPrijs = totalPrice * 0.85;
        document.getElementById("korting").innerHTML = "Korting: 15%";

    } else {
        kortingPrijs = totalPrice;
    }
    // Laat de prijs en prijs met korting zien
    document.getElementById("totalPrice").innerHTML = `Totaal: €${totalPrice.toFixed(2)}`;
    document.getElementById("korting2").innerHTML = `Prijs met korting: €${kortingPrijs.toFixed(2)}`;
}

function clearCart() {
    // Clear items in storage
    localStorage.removeItem("shoppingCart");

    displayCart();
}

function Checkout() {
    window.location.href = "checkout.html";
}


function submitBestelling() {
    localStorage.removeItem("shoppingCart");
    displayCart();
}

// Code met JSON heb ik van youtube