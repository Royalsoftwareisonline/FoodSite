const cart = {
    /**
     * Update GUI to reflect current cart status
     */
    update: () => {
        // add up amount of each item in localStorage
        sum = 0;
        for (let i = 0; i < localStorage.length; i++)
            sum += +localStorage.getItem(localStorage.key(i));
        // display the sum in the #cart-status
        document.querySelector("#cart-status").innerText = `(${sum})`;
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
    }
};

    /**
     * Remove product from cart?
     * @param {String} product Name of product
     *
    remove: product => {
    let count = +localStorage.getItem(product);
    if (count)
        localStorage.setItem(product, count - 1);
    else
        localStorage.setItem(product, 1);
    cart.update();
} */

// run on page load
cart.update();