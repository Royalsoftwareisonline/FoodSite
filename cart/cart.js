// generate items, quantities, etc. for cart page
let items_ele = document.querySelector("#items");
let total_price = 0;  // in cents

for (let product of cart.products()) {
	let quantity = cart.get(product);

	let item_info = catalog.get(product);
	console.log(product, item_info);  // DEBUG
	let price = item_info.price * quantity;
	total_price += price;
	
	items_ele.append(`\$${price} ${product} x${quantity}`);
	//price.innerText = `$${(item.price / 100).toFixed(2)}`;
	items_ele.append(document.createElement("br"));
	
	// Add this line to update the hidden field
	document.querySelector('input[name="item_name"]').value = `${product} (${quantity})`;
}

// update price
document.querySelector("#total-price").innerHTML = `${total_price}`;
//document.getElementById("total-price").innerText = (total / 100).toFixed(2); 
document.querySelector("#amount").value = total_price;

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

document.querySelector("form#checkout").addEventListener("submit", event =>{

// TODO: do form validation maybe

	//alert("Testing");  // TODO: write JS to send email with form info here

	//Test code

	 //function formSubmit() {

		 //make variable that gets form data from each part of form via event.target
		const formData = new FormData(event.target);

		//Object that stores form data
		const formDataObj = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			method: formData.get("method"),
			building: formData.get("building"),
			room: formData.get("room"),
			comment: formData.get("comment"),
			item_name: formData.get("item_name"),
		};

		//XMLHttpRequest that sets request header content type to json and allows to be accepted
		//converts form data to json and sends via XMLHttpRequest
		const xhttp = new XMLHttpRequest(); 

		xhttp.open("POST", "https://formsubmit.co/ajax/peboyles05@gmail.com");
		xhttp.setRequestHeader("Content-Type", "application/json");
		xhttp.setRequestHeader("Accept", "application/json");
		xhttp.send(JSON.stringify(formDataObj));

		xhttp.onreadystatechange = () => {
			if (xhttp.readyState === 4 && xhttp.status === 200);
				alert("Form submitted successfully");
		} 
	});

// Add this event listener for the radio buttons
document.querySelectorAll('input[name="method"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const bldgDiv = document.getElementById('bldg');
        const pickupText = document.getElementById('pickup-location') || createPickupText();
        
        if (this.value === 'pickup') {
            bldgDiv.style.display = 'none';
            pickupText.style.display = 'block';
        } else {
            bldgDiv.style.display = 'grid';
            pickupText.style.display = 'none';
        }
    });
});

function createPickupText() {
    const pickupText = document.createElement('p');
    pickupText.id = 'pickup-location';
    pickupText.innerText = 'Pickup location: McDowell 208';
    document.getElementById('bldg').after(pickupText);
    return pickupText;
}
	