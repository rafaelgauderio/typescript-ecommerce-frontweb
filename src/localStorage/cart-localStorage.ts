import { OrderDTO } from "../models/order";

export function save(cart: OrderDTO) {
    const cartString = JSON.stringify(cart);
    localStorage.setItem("com.rafaeldeluca.ecommerce/cart", cartString);
}