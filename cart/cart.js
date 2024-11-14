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
document.querySelector("#amount").value = total_price / 100;

// event listeners
document.querySelector("#clear-cart").addEventListener("click", event => {
	cart.clear();
	
	// TODO: or refreash page??
	items_ele.innerText = "";
	document.querySelector("#total-price").innerHTML = "0";
});

let bldg = document.querySelector("#bldg");
document.querySelector("input[name=method][value=delivery]").addEventListener("change", event => {
	bldg.classList.remove("hide");
});
document.querySelector("input[name=method][value=pickup]").addEventListener("change", event => {
	bldg.classList.add("hide");
});

document.querySelector("form#checkout").addEventListener("submit", event => {
	// TODO: do form validation maybe

	alert("Testing");  // TODO: write JS to send email with form info here
});