// run the following code on page load

// generates HTML for catalog
let main_ele = document.querySelector("main");

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
		p_ele.innerText = item.desc;                      // <p>...</p>
		item_ele.append(p_ele);                           // <div> ... <p>...</p> </div>

		// TODO: display price

		items_ele.append(item_ele);                       // <div class="items"> ... <div>...</div> </div> 
		
		// pop-up
		item_ele.addEventListener("click", event => {
			let dialog = document.querySelector("dialog");

			// update dialog content
			// \$ is an escape sequence for adding a dollar sign into a string template
			dialog.querySelector("p").innerText = `${item.name}: ${item.desc} \$${item.price}`;

			// show model
			dialog.showModal();

			// DEBUG: remove and replace with actual close button
			dialog.addEventListener("click", event => {
				event.stopPropagation();  // ??? not working
				cart.add(item.name);  // not like this
				dialog.close();
			});
		});
	}
}
