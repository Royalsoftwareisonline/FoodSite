//
document.addEventListener('DOMContentLoaded', function() {
    const total = displayCartItems();

    paypal.Buttons({
        createOrder: function(data, actions) {
            const currentTotal = displayCartItems(); // Get fresh total
            
            if (currentTotal <= 0) {
                alert('Your cart is empty!');
                return;
            }

            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: 'USD',
                        value: currentTotal.toFixed(2)
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                localStorage.removeItem('cart');
                alert('Payment successful! Thank you for your order.');
                window.location.href = '../success.html';
            });
        },
        onError: function(err) {
            console.error('PayPal error:', err);
            alert('There was an error processing your payment. Please try again.');
        }
    }).render('#paypal-button-container');
});

function displayCartItems() {
    // Get cart and parse it safely with error handling
    let cartItems = [];
    try {
        const cartData = localStorage.getItem('cart');
        cartItems = cartData ? JSON.parse(cartData) : [];
        console.log('Cart data:', cartItems); // Debug log
    } catch (e) {
        console.error('Error parsing cart:', e);
        cartItems = [];
    }

    // Update cart status in header
    const cartStatus = document.getElementById('cart-status');
    if (cartStatus) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartStatus.textContent = `(${totalItems})`;
    }

    // Display items in order summary
    const cartContainer = document.getElementById('cartItems');
    let total = 0;

    cartContainer.innerHTML = '<h2>Order Summary</h2>'; // Clear and add title

    if (cartItems.length === 0) {
        cartContainer.innerHTML += '<p>Your cart is empty</p>';
        document.getElementById('total').textContent = '0.00';
        return 0;
    }

    cartItems.forEach(item => {
        const itemTotal = parseFloat(item.price) * parseInt(item.quantity);
        total += itemTotal;
        
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name}</p>
                <p>Price: $${parseFloat(item.price).toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${itemTotal.toFixed(2)}</p>
            </div>
        `;
    });

    document.getElementById('total').textContent = total.toFixed(2);
    return total;
}

