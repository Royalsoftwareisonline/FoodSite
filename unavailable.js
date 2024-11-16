function create_item(item) {
    const div = document.createElement("div");
    div.className = "items";
    
    // Add 'unavailable' class if item is not available
    if (!item.available) {
        div.classList.add('unavailable');
    }
    
    div.innerHTML = `
        <img src="${item.img_src}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
        ${!item.available ? '<span class="sold-out">Sold Out</span>' : ''}
    `;
    
    div.addEventListener("click", () => {
        // Only show dialog if item is available
        if (item.available !== false) {
            show_dialog(item);
        }
    });
    
    return div;
}