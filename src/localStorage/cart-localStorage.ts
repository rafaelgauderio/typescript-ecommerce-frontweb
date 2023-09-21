import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart: OrderDTO)  {
    const cartString = JSON.stringify(cart);
    localStorage.setItem(CART_KEY, cartString);
}

export function get () : OrderDTO {
    const cartString = localStorage.getItem(CART_KEY) || '{"items":[]}';
    const object = JSON.parse(cartString as OrderDTO);

    const cart = new OrderDTO ();
    object.items.forEach((item: { productId: number; quantity: number; price: number; name: string; imgUrl: string; }) => {
        cart.items.push(new OrderItemDTO(item.productId, item.quantity, item.price, item.name, item.imgUrl));
    });

    return cart;
   //return JSON.parse(cartString);
}