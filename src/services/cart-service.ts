import { OrderDTO, OrderItemDTO } from "../models/order";

import * as cartLocalStorage from '../localStorage/cart-localStorage';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartLocalStorage.save(cart);
}

export function getCart() : OrderDTO {
    return cartLocalStorage.get();
}

export function addProductToCart (product : ProductDTO) {
    const cart = cartLocalStorage.get();
    const item = cart.items.find(itemDoProduto => itemDoProduto.productId ===product.id);
    // se o item já estiver no carrinho não adiciona ele novamente
    if( !item) {
        const newItem = new OrderItemDTO(product.id, 1, product.price, product.name, product.imgUrl);
        cart.items.push(newItem);
        cartLocalStorage.save(cart);
    }
}

export function cleanCart () {
    cartLocalStorage.clearLocalStorage();
}

