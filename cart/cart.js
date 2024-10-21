// generate items, quantities, etc. for cart page
let items_ele = document.querySelector("#items");
let total_price = 0;  // in cents

for (let product of cart.products()) {
	let quantity = cart.get(product);

	let item_info = catalog.get(product);
	console.log(product, item_info);  // DEBUG
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