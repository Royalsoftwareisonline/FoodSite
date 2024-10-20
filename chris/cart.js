const cart = {
    /**
     * Update GUI to reflect current cart status
     */
    update: () => {
        // Add up amount of each item in localStorage.
        // Also sanitize localStorage by removing items that are not parsable as positive numbers.
        let sum = 0;
        let deadItems = new Set();
        for (let product of cart.products()) {
            let quantity = +localStorage.getItem(product);
            if (quantity > 0)
                sum += +quantity;
            else
                deadItems.add(product);
        }
        // display the sum in the #cart-status
        document.querySelector("#cart-status").innerText = `(${sum})`;
        
        // remove "dead" items
        deadItems.forEach(product => localStorage.removeItem(product));
    },

    /**
     * Add a product to cart
     * @param {String} product Name of product
     */
    add: product => {
        let count = +localStorage.getItem(product);
        if (count)
            localStorage.setItem(product, count + 1);
        else
            localStorage.setItem(product, 1);
        cart.update();
    },

    /**
     * Get the number/count of the given product that is currently in thye cart.
     * @param {String} product Product name
     * @returns {Number} A positive number if the product is in the cart. 0 if it's not.
     */
    get: product => {
        let quantity = localStorage.getItem(product);
        if (quantity)
            return +quantity;
        return 0;
    },

    /**
     * Change/update the quantity of the given product in the cart to the given value.
     * If this product didn't previously exist in the cart, it will after this call. 
     * @param {String} product Product name
     * @param {Number} quantity New quantity
     */
    set: (product, quantity) => {
        localStorage.setItem(product, quantity);
        cart.update();
    },

    /**
     * Delete all instances of the given product from the cart.
     * @param {String} product 
     */
    removeAll: product => {
        localStorage.removeItem(product);
        cart.update();
    },

    /**
     * Delete all items from the cart.
     */
    clear: () => {
        localStorage.clear();
        cart.update();
    },

    /**
     * Generator function:
     * Get the names of all the products stored in the cart (localStorage).
     */
    products: function*() {
        for (let i = 0; i < localStorage.length; i++)
            yield localStorage.key(i);
    }
};

// run on page load
cart.update();

// run the following code on page load
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
        cart.add(itemName);
    });
});
