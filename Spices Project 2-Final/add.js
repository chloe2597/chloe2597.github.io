if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('btnAdd')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    localStorage.setItem('counter', 1)
   
    function addToCartClicked(event) {
        var button = event.target

        var shopItem = button.parentElement.parentElement.parentElement
        var itemTitle = shopItem.getElementsByClassName('shop-item-title')[0].innerText
       

        for (var i = 0; i < localStorage.length; i++) {
            var cartItem = localStorage.getItem(localStorage.key(i));
            if (cartItem.length!=1) {
                var item = {}
                item = JSON.parse(cartItem)
                cartTitle = item.title
                if (cartTitle == itemTitle) {
                    alert('This item is already added to the cart')
                    return
                }
            }

            
        }
        var item = {}
        var counter = localStorage.getItem('counter')
        item.title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
        item.price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
        item.imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
        localStorage.setItem('item' + counter, JSON.stringify(item))
        counter++
        localStorage.setItem('counter', counter)
    }
}