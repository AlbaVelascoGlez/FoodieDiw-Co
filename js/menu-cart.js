// obtener cantidad del localstorage (función global)
function getCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart.reduce((total, item) => total + item.quantity, 0);
}

// Actualizar (función global)
function updateCartBadge() {
    const count = getCartCount();
    $('.cart-badge').text(count);
    if (count === 0) {
        $('.cart-badge').hide();
    } else {
        $('.cart-badge').show();
    }
}

$(document).ready(function() {
    updateCartBadge();

    // Añadir
    $('.plus-btn').on('click', function() {
        const $quantityDisplay = $(this).siblings('.quantity-display');
        const $minusBtn = $(this).siblings('.minus-btn');
        let currentQuantity = parseInt($quantityDisplay.text());

        currentQuantity++;
        $quantityDisplay.text(currentQuantity);

        // Si hay más de 1 el botón de - se activa
        if (currentQuantity > 1) {
            $minusBtn.prop('disabled', false);
        }
    });


    $('.minus-btn').on('click', function() {
        const $quantityDisplay = $(this).siblings('.quantity-display');
        let currentQuantity = parseInt($quantityDisplay.text());

        if (currentQuantity > 1) {
            currentQuantity--;
            $quantityDisplay.text(currentQuantity);

            // Boton de - deshabilitado si la cantidad es 1
            if (currentQuantity === 1) {
                $(this).prop('disabled', true);
            }
        }
    });

    // Añadir al carrito
    $('.add-to-cart').on('click', function() {
        const $menuItem = $(this).closest('.menu-item');
        const itemName = $menuItem.find('h3').text();
        const itemPrice = $menuItem.find('.price').text();
        const quantity = parseInt($menuItem.find('.quantity-display').text());

       
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
        const existingItemIndex = cart.findIndex(item => item.name === itemName);

        if (existingItemIndex > -1) {
       
            cart[existingItemIndex].quantity += quantity;
        } else {
    
            cart.push({
                name: itemName,
                price: itemPrice,
                quantity: quantity
            });
        }

        // Guardar en el localstorage 
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar
        updateCartBadge();

        // cambio de boton a añadido
        $(this).text('Añadido');
        $(this).css('background', '#4caf50');

        setTimeout(() => {
            $(this).text('Añadir');
            $(this).css('background', '');
        }, 1500);

        // Resetear cntidad a 1
        const $quantityDisplay = $menuItem.find('.quantity-display');
        const $minusBtn = $menuItem.find('.minus-btn');
        $quantityDisplay.text('1');
        $minusBtn.prop('disabled', true);
    });
});
