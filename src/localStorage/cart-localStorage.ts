import { OrderDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO)  {
    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
}

export function get () : OrderDTO {
    const cartString = localStorage.getItem(CART_KEY) || '{"items":[]}';
    return JSON.parse(cartString);
}