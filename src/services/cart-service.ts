import { OrderDTO } from "../models/order";

import * as cartLocalStorage from '../localStorage/cart-localStorage';

export function saveCart(cart: OrderDTO) {
    cartLocalStorage.save(cart);
}