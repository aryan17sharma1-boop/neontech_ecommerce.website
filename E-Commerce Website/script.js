let count = 0;
let total = 0;
let paymentMethod = "";

function addToCart(price, productName){

    count++;
    total += price;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("items").innerText = count;
    document.getElementById("total").innerText = total.toLocaleString();

    const cartItems = document.getElementById("cart-items");

    const item = document.createElement("li");

    item.innerHTML = `
        ${productName} - ₹${price.toLocaleString()}
        <button class="remove-btn" onclick="removeItem(this, ${price})">
            Remove
        </button>
    `;

    cartItems.appendChild(item);

    showPopup(`✅ ${productName} added to cart`);
}

function removeItem(button, price){

    button.parentElement.remove();

    count--;
    total -= price;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("items").innerText = count;
    document.getElementById("total").innerText = total.toLocaleString();
}

function selectPayment(method){

    paymentMethod = method;

    document.getElementById("selected-payment").innerText =
    "Selected Payment: " + method;

    showPopup("💳 " + method + " selected");
}

function checkout(){

    if(count === 0){
        showPopup("🛒 Your cart is empty!");
        return;
    }

    if(paymentMethod === ""){
        showPopup("⚠️ Please select a payment method!");
        return;
    }

    showPopup("🎉 Order Placed Successfully!");

    document.getElementById("cart-items").innerHTML = "";

    count = 0;
    total = 0;

    document.getElementById("cart-count").innerText = 0;
    document.getElementById("items").innerText = 0;
    document.getElementById("total").innerText = 0;

    paymentMethod = "";

    document.getElementById("selected-payment").innerText =
    "No payment method selected";
}

function showPopup(message){

    const popup = document.getElementById("popup");

    popup.innerHTML = message;

    popup.style.opacity = "1";

    setTimeout(() => {
        popup.style.opacity = "0";
    }, 2500);
}