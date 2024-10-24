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

        let img_ele = document.createElement("img");      // <img>
        img_ele.src = item.img_src;                       // <img src="...">
        img_ele.alt = "";                                 // <img src="..." alt="">
        item_ele.append(img_ele);                         // <div> <img ...> </div>

        let h3_ele = document.createElement("h3");        // <h3> </h3>
        h3_ele.innerText = item.name;                     // <h3>...</h3>
        item_ele.append(h3_ele);                          // <div> ... <h3>...</h3> </div>

        let p_ele = document.createElement("p");           // <p> </p>
        p_ele.innerText = item.desc;                       // <p>...</p>
        item_ele.append(p_ele);                            // <div> ... <p>...</p> </div>

        // TODO: display price

        items_ele.append(item_ele);                        // <div class="items"> ... <div>...</div> </div> 
    }
}

// add both event listeners for adding items to cart, and also tabIndex
let product_ele = document.querySelectorAll(".items > *");
document.querySelectorAll(".items > *").forEach(item => {
    // add tab-indexes to all items
    item.tabIndex = 0;

    // add click (event) listener for each item so they get added to the cart onclick
    let itemName = item.querySelector("h3")?.innerText;  // try to get itemName
    item.addEventListener("click", event => {
        
       if (!itemName) {  // is itemName falsey (e.g., null, or "")
            alert("Code error. No <h3> (or empty <h3>) for this item. Item not added to cart.");
           return;  // stop further code from running becasue an error occured
        }
        // cart.add(itemName);

        // iframe code

        const iframe = document.createElement('iframe');
        iframe.src = 'https://example.com'; // Change this URL as needed
        iframe.width = '100%';
        iframe.height = '90%';
        iframe.style.border = 'none';
    
         // Clear any existing content in the popup window (if needed)
         popupWindow.innerHTML = '<span id="closePopup">&times;</span>';
    
         // Append the iframe to the pop-up window
         popupWindow.appendChild(iframe);
    
         // Show the pop-up and overlay
         overlay.style.display = 'block';
         popupWindow.style.display = 'block';
    
         // Add event listener to close button
         document.getElementById('closePopup').addEventListener('click', closePopupWindow);
    });
  });
