//
try {
	// Check if storage is actually persisting between pages
	const testValue = localStorage.getItem('cartDebug');
	console.log('Previous cart debug value:', testValue);
	localStorage.setItem('cartDebug', Date.now().toString());
	
	// Check if cart data exists
	const rawCartData = localStorage.getItem('cart');
	console.log('Raw cart data:', rawCartData);
	
	// Check if cart object is properly initialized
	console.log('Cart object:', cart);
	console.log('Cart products:', cart?.products?.());
} catch (e) {
	console.error('Storage/cart access error:', e);
}
// generate items, quantities, etc. for cart page
let items_ele = document.querySelector("#items");
let total_price = 0;  // in cents

console.log('Cart products:', cart.products()); 
console.log('Cart contents:', cart);

// Helper function to find a product in the catalog
function findInCatalog(productName) {
	return catalog.reduce((found, section) => {
		const item = section.items.find(item => item.name === productName);
		return item || found;
	}, null);
}

for (let product of cart.products()) {
	let quantity = cart.get(product);
	let item_info = catalog.get(product);
	//let item_info = findInCatalog(product);
	console.log('Product:', product);
	console.log('Catalog:', catalog);  // Check if catalog is defined
	console.log('Item info:', item_info);  // Check what we're getting back
	
	if (!item_info) {
		console.error(`Product ${product} not found in catalog`);
		continue;  // Skip this item if not found
	}

	let price = item_info.price * quantity;
	total_price += price;
	
	items_ele.append(`\$${price/100} ${product} x${quantity}`);
	items_ele.append(document.createElement("br"));
}

// update price
document.querySelector("#total-price").innerHTML = `${total_price/100}`;

// event listeners
document.querySelector("#clear-cart").addEventListener("click", event => {
	cart.clear();
	
	// TODO: or refreash page??
	items_ele.innerText = "";
	document.querySelector("#total-price").innerHTML = "0";
});

/* // ... existing code ...
function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;
    
    cartContainer.innerHTML = ''; // Clear existing items
    
    cartItems.forEach(item => {
        // Find the product in the catalog using the name
        const product = catalog.find(p => p.name === item.name);
        
        if (!product) {
            console.error(`Product ${item.name} not found in catalog`);
            return;
        }
        
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${product.price.toFixed(2)}</span>
            <span class="item-quantity">Quantity: ${item.quantity}</span>
            <span class="item-total">Total: $${itemTotal.toFixed(2)}</span>
        `;
        cartContainer.appendChild(cartItem);
    });
    
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}
// ... rest of code ... */