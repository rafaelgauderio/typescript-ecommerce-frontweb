import { OrderDTO, OrderItemDTO } from "../models/order";

import * as cartLocalStorage from '../localStorage/cart-localStorage';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartLocalStorage.save(cart);
}

export function getCart() : OrderDTO {
    return cartLocalStorage.get();
}

export function addProductToCart (product : ProductDTO) : void{
    const cart = cartLocalStorage.get();
    const item = cart.items.find(itemDoProduto => itemDoProduto.productId ===product.id);
    // se o item já estiver no carrinho não adiciona ele novamente
    if( !item) {
        const newItem = new OrderItemDTO(product.id, 1, product.price, product.name, product.imgUrl);
        cart.items.push(newItem);
        cartLocalStorage.save(cart);
    }
}

export function cleanCart () : void {
    cartLocalStorage.clearLocalStorage();
}

export function increaseItemCart (productId : number) : void {
    const cart = getCart();
    const itemCart = cart.items.find ( item => item.productId ===productId);
    if(itemCart !==undefined) {
        itemCart.quantity = itemCart.quantity + 1;
        cartLocalStorage.save(cart);
    }
}

export function decreaseItemCart (productId: number): void {
    const cart = getCart();
    const itemCart = cart.items.find(item => item.productId ===productId);
    if(itemCart !==undefined) {
        itemCart.quantity = itemCart.quantity - 1;
        if( itemCart.quantity === 0 || itemCart.quantity < 0) {
            // excluir o item do carrinho se a quantidade for igual a zero
            cart.items = cart.items.filter(item => item.productId !== productId);
        }
        cartLocalStorage.save(cart);
    }
}

