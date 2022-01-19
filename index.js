let cart = [];
let cartContent = document.getElementById('cart__content');

function add(event) {
    let name = event.target.value;
    let elementA = document.createElement('a');
    elementA.setAttribute('onclick', 'deleteCart(event)');
    elementA.textContent = name ;
    cartContent.appendChild(elementA);
}

function deleteCart(event) {
    let selector = event.target;
    selector.remove();
}