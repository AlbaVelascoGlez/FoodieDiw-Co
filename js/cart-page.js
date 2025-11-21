$(document).ready(function() {
    // Coger items del carrito del localstorage
    function getCart() {
        return JSON.parse(localStorage.getItem('cart')) || [];
    }

    // Guardar carrito en el localStorage
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }


    function parsePrice(priceStr) {
        return parseFloat(priceStr.replace('€', '').replace(',', '.'));
    }

    function formatPrice(num) {
        return num.toFixed(2).replace('.', ',') + '€';
    }

    // Totales
    function calculateTotals() {
        const cart = getCart();
        let subtotal = 0;

        cart.forEach(item => {
            const price = parsePrice(item.price);
            subtotal += price * item.quantity;
        });

        const shipping = cart.length > 0 ? 5.00 : 0;
        const total = subtotal + shipping;

        $('#subtotal').text(formatPrice(subtotal));
        $('#shipping').text(formatPrice(shipping));
        $('#total').text(formatPrice(total));

        if (cart.length > 0) {
            $('#checkout-btn').prop('disabled', false);
        } else {
            $('#checkout-btn').prop('disabled', true);
        }
    }

    // Items del carrito
    function renderCart() {
        const cart = getCart();
        const $cartItemsList = $('#cart-items-list');
        const $emptyCart = $('#empty-cart');

        if (cart.length === 0) {
            $emptyCart.show();
            $cartItemsList.removeClass('active');
            calculateTotals();
            return;
        }

        $emptyCart.hide();
        $cartItemsList.addClass('active');
        $cartItemsList.empty();

        cart.forEach((item, index) => {
            const price = parsePrice(item.price);
            const itemTotal = price * item.quantity;

            const $cartItem = $(`
                <div class="cart-item" data-index="${index}">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">${item.price} / unidad</div>
                    </div>
                    <div class="cart-item-right">
                        <div class="cart-item-quantity">
                            <button class="cart-qty-btn minus-btn" data-index="${index}">-</button>
                            <span class="cart-qty-display">${item.quantity}</span>
                            <button class="cart-qty-btn plus-btn" data-index="${index}">+</button>
                        </div>
                        <div class="cart-item-total">${formatPrice(itemTotal)}</div>
                        <button class="remove-item-btn" data-index="${index}">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            `);

            $cartItemsList.append($cartItem);
        });

        calculateTotals();
        updateCartBadge();
    }

    // Actualizar la cantidad
    $(document).on('click', '.cart-qty-btn.plus-btn', function() {
        const index = $(this).data('index');
        const cart = getCart();
        cart[index].quantity++;
        saveCart(cart);
        renderCart();
    });

    $(document).on('click', '.cart-qty-btn.minus-btn', function() {
        const index = $(this).data('index');
        const cart = getCart();

        if (cart[index].quantity > 1) {
            cart[index].quantity--;
            saveCart(cart);
            renderCart();
        }
    });

    // eliminar producto
    $(document).on('click', '.remove-item-btn', function() {
        const index = $(this).data('index');
        const cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        renderCart();
    });

    // Limpiar carrito
    $('#clear-cart-btn').on('click', function() {
        if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
            localStorage.removeItem('cart');
            renderCart();
        }
    });

    // 
    $('#checkout-btn').on('click', function() {
        const cart = getCart();
        if (cart.length > 0) {
            alert('Funcionalidad de pago en desarrollo.\n\nTotal a pagar: ' + $('#total').text());
          
        }
    });

   
    renderCart();
});
