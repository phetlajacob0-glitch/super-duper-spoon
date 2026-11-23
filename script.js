const products =
[
 { 
id: 1,
 name: "Smart Watch",
 price: 450,
 image: "OIP (1).webp"
 }, { 
id: 2,
 name: "Headphones",
 price: 650,
 image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
 }, { 
id: 3,
 name: "Sneakers", 
price: 850,
 image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
 }, { 
id: 4,
 name: "Backpack", 
price: 350,
 image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
 }
];
// Load saved cart let cart = 
JSON.parse(localStorage.getItem("cart")) || [];
 { const 
productList = document.getElementById("product-list");
 
 productList.innerHTML = products.map(product => `
 <div class="product">
 <img src="${product.image}" alt="${product.name}">
 <h3>${product.name}</h3>
 <p>R${product.price.toFixed(2)}</p>
 <button onclick="addToCart(${product.id})">
 Add to Cart
 </button>
 </div>
 `).join("");
}
 { const product = products.find(item => item.id === id);
 const existing = cart.find(item => item.id === id);
 if (existing) { 
existing.quantity++;
 } else { 
cart.push({ 
...product, 
quantity: 1
 });
 }
 saveCart();
}

 { 
localStorage.setItem("cart", JSON.stringify(cart)); 
updateCart();
}
 const cartItems = document.getElementById("cart-items"); let 
total = 0; let count = 0;
 cartItems.innerHTML = "";
 cart.forEach(item => { total += 
item.price * item.quantity; count 
+= item.quantity;
 cartItems.innerHTML += `
 <div class="cart-item">
 <div>
 <strong>${item.name}</strong>
 <p>R${item.price.toFixed(2)}</p>
 <button onclick="changeQuantity(${item.id}, -1)">-</button>
 ${item.quantity}
 <button onclick="changeQuantity(${item.id}, 1)">+</button>
 </div>
 <button onclick="removeItem(${item.id})">
 
 SHOPPING WEBSITE
 </button>
 </div>
 `;
 });
 {
document.getElementById("cart-count").textContent = count; 
document.getElementById("cart-total").textContent =
 total.toFixed(2);
 if (cart.length === 0) { cartItems.innerHTML = 
"<p>Your cart is empty.</p>";
 }
}
// Increase or decrease quantity function 
changeQuantity(id, amount) {const item = cart.find(item => item.id === id);
if

  (!item) return;
 item.quantity += amount;
 if (item.quantity <= 0){ cart = 
cart.filter(item => item.id !== id);
 }
 saveCart();
}

// Remove item function removeItem(id) 
{ cart = cart.filter(item => item.id !== 
id); saveCart();
}
// Open and close cart function toggleCart() 
{ document.getElementById("cart-sidebar")
 .classList.toggle("active");
if
(cart.length === 0){ alert("Your shopping cart is empty!"); return;
 }
 alert("Thank you for shopping with MyShop!");
 cart = []; 
saveCart(); 
toggleCart();
}
// Initialize website
displayProducts(); updateCart();