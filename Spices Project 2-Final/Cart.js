//by Collin Savunen and Chloe White

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btnremove')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    addItemToCart()
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addItemToCart() {
    for (var i = 0; i < localStorage.length; i++) {
        
        var newitem = localStorage.getItem(localStorage.key(i))
        if (newitem.length != 1) {
            var item = {}
            item = JSON.parse(newitem)
            var title = item.title
            var price = parseInt(item.price)
            var imageSrc = item.imageSrc

            var cartRow = document.createElement('div')
            cartRow.classList.add('cart-row')
            var cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
                    <p class="cart-item-title">${title}</p>
                </div>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btnremove" type="button">REMOVE</button>
                </div>
                <span class="cart-price cart-column">${price}</span>
                `
            cartRow.innerHTML = cartRowContents
            cartItems = document.getElementsByClassName('cart-items')[0]
            cartItems.append(cartRow)
            cartRow.getElementsByClassName('btnremove')[0].addEventListener('click', removeCartItem)
            cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
        }
        
    }
    updateCartTotal()

}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    var counter = 1
    localStorage.clear()
    localStorage.setItem('counter', counter)
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        var item = {}
        item.title = cartRow.getElementsByClassName('cart-item-title')[0].innerText
        item.price = price
        item.imageSrc = cartRow.getElementsByClassName('cart-item-image')[0].innerText
        localStorage.setItem('item' + counter, JSON.stringify(item))
        counter++
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}