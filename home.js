// run the following code on page load

// generates HTML for catalog
let main_ele = document.querySelector("main");

let dialog = document.querySelector("dialog");
let item_shown = null;

let currentQty = 1;

const show_dialog = item => {
	// update dialog content
	// \$ is an escape sequence for adding a dollar sign into a string template
	dialog.querySelector("p").innerText = `${item.desc}`;
	dialog.querySelector("img").src = `${item.img_src}`;
	dialog.querySelector("h3").innerText = `${item.name}`;
	dialog.querySelector("#add-to-cart").innerText = `Add To Cart - \$${item.price}`;

	// show model
	if (item.available === false) {
		return; // Don't show dialog for unavailable items
	}
	
	dialog.querySelector("h3").innerText = item.name;
	dialog.querySelector("p").innerText = item.desc;
	dialog.querySelector("img").src = item.img_src;
	dialog.querySelector("#add-to-cart").innerText = `Add To Cart - \$${item.price}`;
	
	item_shown = item;
	dialog.showModal();
	
	// Reset quantity to 1 when dialog opens
	currentQty = 1;
	dialog.querySelector('.qty-display').textContent = currentQty;
	
	// Update price display
	updateAddToCartButton(item.price);
};

const close_dialog = () => {
	item_shown = null;
	dialog.close();
};

//dialog.querySelector("#buy").addEventListener("click", event => {
dialog.querySelector(".close-btn").addEventListener("click", close_dialog);
dialog.querySelector("#add-to-cart").addEventListener("click", () => {
	if (item_shown.available !== false) {
		// Add the item multiple times based on quantity
		for (let i = 0; i < currentQty; i++) {
			cart.add(item_shown.name);
		}
		//close_dialog();
	}
});

/* dialog.querySelector("#close").addEventListener("click", event => {
	close_dialog();
}); */

for (let section of catalog) {
	
	let section_ele = document.createElement("section");  // <section> </section>
	section_ele.id = section.id;                          // <section id="..."> </section>
	main_ele.append(section_ele);                         // <main> ... <section id="">...</section> </main>
	
	let h2_ele = document.createElement("h2");            // <h2> </h2>
	h2_ele.innerText = section.section_heading;           // <h2>...</h2>
	section_ele.append(h2_ele);                           // <section id="..."> <h2>...</h2> </section>
	
	let items_ele = document.createElement("div");        // <div> </div>
	items_ele.classList.add("items");                     // <div class="items"> </div>
	section_ele.append(items_ele);                        // <section id="..."> ... <div class="items">...</div> </section>
	
	for (let item of section.items) {
		let item_ele = document.createElement("div");     // <div> ... </div>
		item_ele.tabIndex = 0;

		let img_ele = document.createElement("img");      // <img>
		img_ele.src = item.img_src;                       // <img src="...">
		img_ele.alt = "";                                 // <img src="..." alt="">
		item_ele.append(img_ele);                         // <div> <img ...> </div>

		let h3_ele = document.createElement("h3");        // <h3> </h3>
		h3_ele.innerText = item.name;                     // <h3>...</h3>
		item_ele.append(h3_ele);                          // <div> ... <h3>...</h3> </div>

		let p_ele = document.createElement("p");          // <p> </p>
		//p_ele.innerText = item.desc;                      // <p>...</p>
		item_ele.append(p_ele);                           // <div> ... <p>...</p> </div>

		// TODO: display price

		items_ele.append(item_ele);                       // <div class="items"> ... <div>...</div> </div> 
		
		// pop-up
		item_ele.addEventListener("click", event => show_dialog(item));
	}
}

dialog.querySelector('.minus').addEventListener('click', () => {
	if (currentQty > 1) {
		currentQty--;
		dialog.querySelector('.qty-display').textContent = currentQty;
		updateAddToCartButton(item_shown.price);
	}
});

dialog.querySelector('.plus').addEventListener('click', () => {
	currentQty++;
	dialog.querySelector('.qty-display').textContent = currentQty;
	updateAddToCartButton(item_shown.price);
});

function updateAddToCartButton(price) {
	const totalPrice = (price * currentQty).toFixed(2);
	dialog.querySelector("#add-to-cart").innerText = `Add To Cart - \$${totalPrice}`;
}
